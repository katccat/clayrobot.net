// OpenGraph-style link preview card. The OG metadata is fetched at build time
// (see the `og-previews` Vite plugin) and passed in as props — this is a static
// site, and third-party pages can't be fetched client-side because of CORS.
export default function LinkPreview({
  href,
  title,
  description,
  siteName,
  image,
  imageAlt = '',
}) {
  let host = siteName
  if (!host) {
    try {
      host = new URL(href).hostname.replace(/^www\./, '')
    } catch {
      host = href
    }
  }

  // Drop the redundant " - {siteName}" suffix some sites (e.g. the App Store)
  // append to og:title, since we surface the site name separately.
  let displayTitle = title
  if (siteName && displayTitle?.endsWith(` - ${siteName}`)) {
    displayTitle = displayTitle.slice(0, -` - ${siteName}`.length)
  }

  return (
    <a
      className="link-preview no-animate"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image && (
        <div className="link-preview__media">
          <img
            className="link-preview__image"
            src={image}
            alt={imageAlt}
            loading="lazy"
          />
        </div>
      )}
      <div className="link-preview__body">
        <span className="link-preview__site">{host}</span>
        <span className="link-preview__title">{displayTitle}</span>
        {description && (
          <span className="link-preview__desc">{description}</span>
        )}
      </div>
    </a>
  )
}

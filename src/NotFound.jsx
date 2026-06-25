import Img from './Img.jsx'

export default function AboutPage() {
  return (
    <div
    style={{
        margin: 'auto',
        paddingInline: 'var(--pad)',
    }}
    >
        <Img
            src='/images/404.webp'
            style={{
                width: 'min(512px, 100%)',
                height: 'auto',
                aspectRatio: '1',
                marginBlock: '5px',
            }}
            alt='404 image'
        ></Img>
        <span className='about__subheading'>
            The requested resource was <mark>not found.</mark>
            {/* Qouth the raven, <mark>404.</mark> */}
        </span>
    </div>
  )
}
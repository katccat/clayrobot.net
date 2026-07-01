import { projects } from '../projects'
import { PLACEHOLDER_IMG, INAR_APPSTORE, INAR } from '../consts';
import ogPreviews from 'virtual:og-previews'
import LinkPreview from './LinkPreview.jsx'
import styles from '../styles/featured.module.css'

export default function Featured ({ projectKeys = [], gamesOnly = false }) {
  const projectList = (projectKeys.length > 0
    ? projectKeys.map(key => projects.get(key)).filter(Boolean)
    : projects.getAll())
    .filter(project => gamesOnly ? project.game === true : !project.exclude);


  return (
    <section className={styles.featured}>
      <span className={`about__subheading ${styles.title}`}>
          What's <mark>new.</mark>
        </span>
      <div className={styles.content}>
        <LinkPreview href={INAR_APPSTORE} {...ogPreviews[INAR_APPSTORE]} />
        <div className='text'>
          <p>
            I'm not a Robot is now available to download on the App Store.
            <br></br><br></br>
            Prove you're human the fun way. I'm not a Robot is the only memory match game that changes to reflect new, trending topics from the Internet every day.
            <br></br><br></br>
            Flip and match through daily puzzles built from the moments everyone's talking about. It's simple to pick up and tough to put down.
          </p>
        </div>
      </div>
    </section>
  )
}

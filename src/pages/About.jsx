import { useOutletContext } from 'react-router-dom'
import { GITHUB, LINKEDIN, DONATE, INAR_APPSTORE, ARTSTATION, RESUME } from '../consts.js'
import LinkList from '../components/LinkList.jsx'
import Img from '../Img.jsx'

const INDEX = [
  { label: 'LinkedIn', href: LINKEDIN, external: true },
  { label: 'ArtStation', href: ARTSTATION, external: true },
  { label: 'Resume', href: RESUME, external: true },
  { label: 'Donate', href: DONATE, external: true },
]

export default function About() {
  const { theme } = useOutletContext()
  const src = theme === 'dark' ? '/images/portrait-blue.png' : '/images/portrait-bw.png'
  return (
    <main className="site-main">
      <section className="about">
        <Img className="about__img" src={src} fetchpriority="high" />
        <div className='about__text'>
          <h1 className='about__title'>About</h1>
          <p>
            My name is Khan, and I am a published developer. I set out to make games that feel genuinely novel. In my projects I integrate my unique vision and proficiency in 3D software and graphic design.
          </p>
          <span className='about__subheading'>Inspirations</span>
          <p>
            For CLAYROBOT, I took cues from neo brutalist designs found in places like 2021-2023 Twitter (drawing inspiration from its use of the halftone effect to evoke print media) and modernism.
            <br></br><br></br>
            Recently, I’ve had a particular interest in creating something ephemeral that represents the mood of the Internet at that moment and distills it into a gameplay experience. That culminated in my latest project which I released on the App Store with Thomas, <a href={INAR_APPSTORE} className='no-animate'>I’m not a Robot.</a>
          </p>
          {/* <span className='about__subheading'>Interests</span>
          <p>
            Some of my favorite movies are Memento and The Matrix. I am also fond of retro gaming, liking the PS2 in particular.
          </p> */}
          <LinkList index={INDEX} />
        </div>
        
        {/* <div className='about__footer'>
          <hr></hr>
          <Img className='about__footer-image' alt='Me and a baby goat' title='Me and my friend' src="/images/goat.webp"></Img>
        </div> */}
      </section>
    </main>
  )
}

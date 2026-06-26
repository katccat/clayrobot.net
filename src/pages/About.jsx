import { useOutletContext } from 'react-router-dom'
import { GITHUB, LINKEDIN, DONATE, INAR } from '../consts.js'
import LinkList from '../components/LinkList.jsx'
import Img from '../Img.jsx'

const INDEX = [
  { label: 'Resume', href: '/resume.pdf', external: true },
  { label: 'LinkedIn', href: LINKEDIN, external: true },
  { label: 'GitHub', href: GITHUB, external: true },
  { label: 'Donate', href: DONATE, external: true },
]

export default function About() {
  const { theme } = useOutletContext()
  const src = theme === 'dark' ? '/images/dotblue.png' : '/images/dotorange.png'
  return (
    <main className="site-main">
      <section className="about">
        <Img className="about__img" src={src} fetchpriority="high" />
        <div className='about__text'>
          <h1 className='about__title'>About</h1>
          <p>
            Hi! My name is Khan, and I am a published full-stack developer. I try to make games that feel genuinely novel. I’ve had a lifelong passion for design and putting something cool together, which I accomplish not just through programming but my skills in 3D software.
          </p>
          <span className='about__subheading'>Inspirations</span>
          <p>
            From a game development perspective, I'm inspired in bits and pieces by a lot of things, such as the simple but addictive nature of Angry Birds or the unpredictable charm of the SpongeBob games. Recently, I’ve had a particular interest in creating something ephemeral that represents the mood of the Internet at that moment and distills it into a gameplay experience. That culminated in my latest project which I released with Thomas, <a href={INAR} className='no-animate'>I’m not a Robot</a>.
          </p>
          <span className='about__subheading'>Hobbies</span>
          <p>
            I like movies, and anyone who knows me can attest I have logged <i>every</i> movie I've ever seen, and I catch most new releases in theaters. Some of my favorite films are Memento and The Matrix. I also like retro gaming and keeping in touch with current events.
          </p>
          <LinkList index={INDEX} />
        </div>
        
        <div className='about__footer'>
          <hr></hr>
          <Img className='about__footer-image' alt='Me and a baby goat' title='Me and my friend' src="/images/goat.webp"></Img>
        </div>
      </section>
    </main>
  )
}

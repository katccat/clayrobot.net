import { GITHUB } from './links'
import { LINKEDIN } from './links'
import IndexList from './IndexList'

const INDEX = [
  { label: 'Resume', href: '/resume.pdf', external: true },
  { label: 'LinkedIn', href: LINKEDIN, external: true },
  { label: 'GitHub', href: GITHUB, external: true },
]

export default function AboutPage() {
  return (
    <main className="site-main">
      <section className="about">
        <img className="about__img about__img--dark" src="/images/dotblue.png" alt="" />
        <img className="about__img about__img--light" src="/images/dotorange.png" alt="" />
        <div className='about__text'>
          <h1 className='about__title'>About</h1>
          <p>
            My name is Khan, and I am a published full-stack developer. I primarily make games and I have a lifelong passion for graphic design from my background as a 3D artist.
          </p>
          <span className='about__subheading'>Inspirations</span>
          <p>
            From a game development perspective, I'm inspired in bits and pieces by a lot of things, such as the simple but addictive nature of Angry Birds and its physics-based gameplay. I also enjoy leveraging real-world data that changes independently, reflecting the state of the Internet in projects of mine such as <a href='games/recaptcha' className='no-animate'>I'm not a Robot</a>.
          </p>
          <span className='about__subheading'>Hobbies</span>
          <p>
            I like movies, and anyone who knows me can attest I have logged every movie I've ever seen and I catch most new releases in theaters. Some of my favorite films are Memento and The Matrix. I also like retro gaming, with my favorite console being the PS2.
          </p>
          <IndexList index={INDEX} />
      </div>
        
      </section>
    </main>
  )
}

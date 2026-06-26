// import GITHUB from './links'
import LinkList from "../components/LinkList"

const INDEX = [
  { label: 'I\'m not a Robot', href: '/games/recaptcha/legal', external: true },
]

export default function Legal() {
  return (
    <main className="site-main">
        {/* <h1 className='about__title'>Legal</h1> */}
        <span className='about__subheading'>
            Below is a directory of our <mark>legal documents.</mark>
        </span>
        <LinkList index={INDEX} noLowerCase={true} />
    </main>
  )
}

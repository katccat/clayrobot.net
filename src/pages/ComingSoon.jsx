import Img from '../Img.jsx'
import { PLACEHOLDER_IMG } from '../consts.js'

export default function ComingSoon() {
  return (
    <main className="site-main">
        <h1 className='about__title'>Coming Soon</h1>
        {/* <hr></hr> */}
        <div
          style={{
            flexGrow: '1',
            alignContent: 'center',
            justifyItems: 'center',
          }}
        >
          <Img 
            style={{
                  width: 'min(400px, 100%)',
                  height: 'auto',
              }}
            src={PLACEHOLDER_IMG}
          ></Img>
        </div>
    </main>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const IAm = () => {
  return (
    <section className='intro-section'>
      <article className='intro-text'>
        <p>Hello, I’m</p>
        <h1>SHASHI TIWARI</h1>
        <p className="adjust">FULLSTACK - SOFTWARE ENGINEER</p>
      </article>
      <div className='CTAs'>
        <a className='download-resume' href="/ShashiTiwari-Resume.pdf">Checkout Resume</a>
        <div className='socials'>
          <a href={"https://www.linkedin.com/in/shashi-tiwari-ba2a58331/"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={"https://github.com/theshashi001"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <article className='some-details'>
        <p>Skilled at bringing designs to life with more than 3 months experience.</p>
        <p>Constantly learning and expading my knowledge. Currently in the Web space.</p>
      </article>
    </section>
  )
}

export default IAm;
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/Rajdip1805/personal-portfolio'
      className='link footer__link'
    >
      Created by Rajdip Rajput © {new Date().getFullYear()}
    </a>
  </footer>
)

export default Footer

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const container = isDarkTheme ? 'home-dark' : 'home-light'

      return (
        <>
          <Navbar />
          <div className={container}>
            <img src={imageUrl} alt="about" className="main-img" />
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About

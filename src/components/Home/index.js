import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const container = isDarkTheme ? 'home-dark' : 'home-light'
      return (
        <>
          <Navbar />
          <div className={container}>
            <img src={imageUrl} alt="home" className="main-img" />
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home

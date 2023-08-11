import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const container = isDarkTheme ? 'navbar-dark' : 'navbar-light'
      const linkItem = isDarkTheme ? 'link-dark' : 'link-light'
      const lightDark = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={container}>
          <img src={logoImg} alt="website logo" className="logo" />
          <ul className="texts">
            <li>
              <Link to="/" className={linkItem}>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkItem}>
                <p>About</p>
              </Link>
            </li>
          </ul>
          <button data-testid="theme" type="button">
            <img
              src={lightDark}
              alt="theme"
              className="logo"
              onClick={changeTheme}
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar

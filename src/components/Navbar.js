import { NavLink } from "react-router-dom"
import '../style/Navbar.scss'
import SearchBar from "./SearchBar"



const Navbar = () => {
  
  return(
  <div className="Navbar">
  <div className="nav-container">
    <div className='nav-left'>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/profile">Profile</NavLink>
      <NavLink exact to="/news">News</NavLink>
      <NavLink exact to="/test">Donate</NavLink>
    </div>
    <div className='nav-right'>
      <SearchBar/>
      <NavLink exact to="/profile">Profile</NavLink>
    </div>
  </div>
  </div>
  )
}
export default Navbar
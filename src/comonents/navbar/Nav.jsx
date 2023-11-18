import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
      <Link className='link' to={'/'}>Home</Link>
      <Link className='link' to={'/about'}>About</Link>
      <Link className='link' to={'/service'}>Service</Link>
      <Link className='link' to={'/gellary'}>Gellary</Link>
      <Link className='link' to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Nav

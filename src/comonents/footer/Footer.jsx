import './footer.css'
import { FaGithub,FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router';

const Footer = () => {
    let navigate = useNavigate();
  return (
    <div className='fot'>
      <div className='stuf1'>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/about')}>About</button>
        <button onClick={() => navigate('/service')}>Service</button>
        <button onClick={() => navigate('/gellary')}>Gellary</button>
        <button onClick={() => navigate('/contact')}>Contact</button>
        <button>Privacy 'Need Help ?'</button>
      </div>
      <div className='stuf2'>
        <a href="http://github.com"><FaGithub />Github</a>
        <a href="http://Facebook.com"><FaFacebook />Facebook</a>
        <a href="http://Youtube.com"><FaYoutube />Youtube</a>
        <a href="http://Whatsapp.com"><FaWhatsapp />Whatsapp</a>
      </div>
    </div>
  )
}

export default Footer

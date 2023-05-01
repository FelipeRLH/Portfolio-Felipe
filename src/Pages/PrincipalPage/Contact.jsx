// REACT
import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';

// COMPONENTS
import Form from '../../Components/Contact/Form';
import Footer from '../../Components/Contact/Footer';

// IMG
import icon_email from '../../Assets/Contact/icon_email.png'

// CSS
import "./Contact.css"


function Contact() {
  return (
    <div id='contato'>
      
        <div className='container-title'>
          <div className='title-contact'>
            <h2>Contato</h2>
            <img src={icon_email} alt="" />
          </div>
        </div>

        <div className='container-info-form'>
          <div className='infos-contact'>
            <div><FaMobileAlt className='icon-contact' /> (61) 99257-1705</div>
            <div><FaRegEnvelope className='icon-contact' /> feliperamalhoalves40@gmail.com</div>
            <div className="background-infos"></div>
          </div>

          <div className='form-contact'>
            <div className='title-contact-area'>
              <span>Contate</span>-me
            </div>
            <Form />
          </div>
        </div>
        <Footer />
     
    </div>
  )
}

export default Contact
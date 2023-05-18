// REACT
import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';

// COMPONENTS
import Form from '../../../Components/Contact/Form';
import Footer from '../../../Components/Contact/Footer';

// IMG
import icon_email from '../../../Assets/Contact/icon_email.png'

// CSS
// import "./Contact.css"
import styles from "./Contact.module.css"


function Contact() {
  return (
    <div id='contato'>

      <div className={styles.ContainerTitle}>
        <h2>Contato</h2>
        <img src={icon_email} alt="Ícone de Email" />
      </div>

      <div className={styles.ContainerInfos}>
        <div className={styles.Infos}>
          <div><FaMobileAlt className={styles.Icon} />(61) 99257-1705</div>
          <div><FaRegEnvelope className={styles.Icon} />feliperamalhoalves40@gmail.com</div>
          <div className={styles.InfosBackground}></div>
        </div>

        <div className={styles.ContainerForm}>
          <h3 className={styles.TitleForm}><span>Contate</span>-me</h3>
          <Form />
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Contact
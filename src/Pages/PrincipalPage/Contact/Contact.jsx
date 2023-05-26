// COMPONENTS
import Form from '../../../Components/Contact/Form';
import Footer from '../../../Components/Contact/Footer';

// IMG
import icon_email from '../../../Assets/Contact/icon_email.png'
import EstrelaDaMorte from '../../../Assets/Contact/EstrelaDaMorte.png'

// CSS
import styles from "./Contact.module.css"


function Contact() {
  return (
    <div id='contato'>
      <div className={styles.ContainerContact}>
        <div className={styles.ContainerTitle}>
          <h2>Contato</h2>
          <img src={icon_email} alt="Ícone de Email" />
        </div>

        <div className={styles.ContainerForm}>
          <div className={styles.ContainerContent}>
            <h3 className={styles.TitleForm}>Contate-me</h3>
            <Form />
          </div>
        </div>
        <Footer />
        <div className={styles.Background} />
        <img className={styles.EstrelaDaMorte} src={EstrelaDaMorte} alt="" />
      </div>
    </div>
  )
}

export default Contact
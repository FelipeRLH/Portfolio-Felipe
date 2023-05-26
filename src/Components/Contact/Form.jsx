// REACT
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaUserAlt, FaRegEnvelope } from 'react-icons/fa';

// IMG
import sabre from '../../Assets/Contact/sabredeluz.png'

import video from './starvid.mp4'

// CSS
import styles from "./Form.module.css"

function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('Preencha todos os campos')
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_lprcmuk", "template_fhjfqqo", templateParams, "Dr1eXn3zbZRPzxfjs")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')
                alert('Email enviado')
            }, (err) => {
                console.log("ERRO: ", err)
                alert("Email não enviado")
            })
    }

    return (
        <form onSubmit={sendEmail}>
            <div className={styles.ContainerForm}>
                <label className={styles.NameForm} htmlFor="Email">
                    <FaUserAlt className={styles.Icon} />
                    <input
                        className={styles.TextImput}
                        type="text"
                        placeholder='Seu nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <span className={styles.Laser}></span>
                    <img className={styles.Sabre} src={sabre} alt="" />
                </label>

                <label className={styles.EmailForm} htmlFor="Email">
                    <FaRegEnvelope className={styles.Icon} />
                    <input
                        className={styles.EmailImput}
                        type="email"
                        placeholder='contato@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <span className={styles.Laser}></span>
                    <img className={styles.Sabre} src={sabre} alt="" />
                </label>
            </div>

            <textarea
                placeholder='Digitar mensagem...'
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />

            <div className={styles.BtnContainer}>
                <input
                    className={styles.Btn}
                    type="submit"
                    value="Enviar"
                />
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </form>
    )
}

export default Form;
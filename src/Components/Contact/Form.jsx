import { useState } from 'react'
import emailjs from '@emailjs/browser'

import { FaUserAlt, FaRegEnvelope } from 'react-icons/fa';

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
        <div>
            <form onSubmit={sendEmail}>
                <div className='container-form'>
                    <label className='nameForm' htmlFor="Email">Nome
                        <input
                            className='textimput'
                            type="text"
                            placeholder='Seu nome'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                         <FaUserAlt className='icon' />
                    </label>
                    <label className='emailForm' htmlFor="Email"> Email
                        <input
                            className='emailimput'
                            type="email"
                            placeholder='contato@gmail.com'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <FaRegEnvelope className='icon' />
                    </label>
                </div>

                <label htmlFor="textareaForm" className='textareaForm'> Mensagem
                    <textarea
                        className='textarea'
                        placeholder='Digitar mensagem...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                </label>
                <input
                    className='btn-form'
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}

export default Form;
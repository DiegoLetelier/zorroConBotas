import { useState } from 'react'
import Input from './Input'
import { db } from '../../settings/firebase'
import { collection, addDoc } from 'firebase/firestore'
import toast, { Toaster } from 'react-hot-toast'
import './form.css'


const Form = () => {

    const [message, setMessage] = useState({})

    const handleInput = (e) => {
        const { name, value } = e.target

        setMessage({
            ...message,
            [name]: value,

        })
        console.log(message)
    }

    const [saving, setSaving] = useState(false)

    const sendMessage = async (e) => {
        try{

        setSaving(true)
        e.preventDefault()
        let response = await addDoc(collection(db, 'message'), message)
        toast.success('Tu mensaje ha sido enviado, ¡gracias!')
        setSaving(false)
        console.log(response)
        }catch (error) {
            toast.error('Hubo un error. Intenta de nuevo más tarde.')
        }
        
    }



    return (
        <div className="customForm" >
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <div >
                <br></br>
                <h3>Formulario de Contacto</h3>
                <form >
                    <label htmlFor='name'>Nombre y Apellido</label>
                    <div className="customInput">
                        <Input
                            type='text'
                            name='name'
                            id='name'
                            handle={(e) => handleInput(e)}
                        />
                    </div>
                    <label htmlFor="email">Correo</label>
                    <div className="customInput">
                        <Input
                            type='email'
                            name='email'
                            id='email'
                            handle={(e) => handleInput(e)}
                        />
                    </div>
                    <label htmlFor="comment">Mensaje</label>
                    <div className="customInput">
                        <textarea

                            type='text'
                            name='comment'
                            id='comment'
                            onChange={(e) => handleInput(e)}
                        />
                    </div>
                    <button onClick={(e) => sendMessage(e)} disabled={saving}>Enviar!</button>
                </form>
            </div>
            <br></br>
        </div>

    )

}

export default Form
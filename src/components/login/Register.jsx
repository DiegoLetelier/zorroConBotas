import { auth } from "../../settings/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'


// Intenté usar una lógica y código distinto para el login, pero no me funcionó, este código lo dejaré aquí para verlo más tarde. 

const Register = () =>{
    
    const initialValue = {
        email: '',
        password: '',
    }
    
    const [user, setUser] = useState(initialValue)

    const handle = (e)=>{

        const {name, value} = e.target
        
        setUser({
            ...user,
            [name] : value,
        })

        
    }

   console.log(initialValue.email)
   console.log(initialValue.password)
    

    const [saving, setSaving] = useState(false)

    const sendCredentials = async (e) => {
        const email = e.target.email.value
        const password = e.target.password.value

        try{
        e.preventDefault()
        setSaving(true)
        let response =  await createUserWithEmailAndPassword(auth, email, password )
        toast.success('listo, ahora anda a logearte!')
        setSaving(false)
        console.log(response)
        }catch (error) {
            console.log(error)
        }
        
    }

    

return (
                <div className="customBackground">
                    <h2>Registrate</h2>
                    <Toaster
                position="top-center"
                reverseOrder={false}
            />
                    <form >
                        <div>
                            <label htmlFor="correo">Correo</label>
                            <input type="email" placeholder="tu correo" id="email" required onChange={handle} value={user.email}></input>
                        </div>
                        <div>
                            <label htmlFor="contraseña">Contraseña</label>
                            <input type="password" placeholder="*****" id="password" required onChange={handle} value={user.password}></input>
                        </div>
                        <button onClick={(e)=>sendCredentials(e)} disabled={saving}>Enviar!</button>
                    </form>
                    <div>
    
                    </div>
                </div>
            )

}

export default Register








// const Register = () => {

//     const [reg, setReg] = useState(false)

//     const [saving, setSaving] = useState(false)

//     const handleSubmit = async (e) => {

//             setReg(!reg)
//             setSaving(true)
//             e.preventDefault();
//             const email = e.target.email.value;
//             const password = e.target.password.value;

//             if (reg) {
//                 await createUserWithEmailAndPassword(auth, email, password)
//             }
//             setSaving(false)
       
//         }
//         return (
//             <div className="customBackground">
//                 <h2>Registrate</h2>
//                 <form >
//                     <div>
//                         <label htmlFor="correo">Correo</label>
//                         <input type="email" placeholder="tu correo" id="email" required></input>
//                     </div>
//                     <div>
//                         <label htmlFor="contraseña">Contraseña</label>
//                         <input type="password" placeholder="*****" id="password" required></input>
//                     </div>
//                     <button type="submit" onSubmit={handleSubmit} disabled={saving}>{reg ? 'enviar1' : 'enviar2'}</button>
//                 </form>
//                 <div>

//                 </div>
//             </div>
//         )
        
//         }
//     export default Register
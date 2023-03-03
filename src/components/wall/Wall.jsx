

import { signOut } from 'firebase/auth'
import { auth } from '../../settings/firebase'
import './wall.css'


const Wall = ({userEmail}) => {

    

   
 return(
    <div className="customBackground">
        <h3>Muro</h3>
        <p>¡HOLA!, {userEmail}</p>
        <h5>Próximamente aquí podrás dejar tus comentarios sobre nosotros y tu experiencias en el restaurante </h5>
        <button className="btn btn-primary" onClick={()=>signOut(auth)}>Cerrar sesión</button>     

        
    </div>
 )

}

export default Wall
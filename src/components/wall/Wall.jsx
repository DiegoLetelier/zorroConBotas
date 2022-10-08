

import { signOut } from 'firebase/auth'
import { auth } from '../../settings/firebase'



const Wall = ({userEmail}) => {

    

   
 return(
    <div>
        <h3>Muro</h3>
        <p>hola, {userEmail}</p>
        <h5>Deja tus comentarios sobre nosotros y tu experiencias en el restaurante</h5>
        <button className="btn btn-primary" onClick={()=>signOut(auth)}>Cerrar sesión</button>     

        
    </div>
 )

}

export default Wall
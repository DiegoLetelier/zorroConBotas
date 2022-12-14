import Login from '../login/Login'
import Wall from './Wall'
import {useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../settings/firebase'
import './wall.css'

const Bridge = () =>{

    const [user, setUser] = useState(null)

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }else{
            setUser(null)
        }
    });



    return(

        <div className="customBackground">
            {user ? <Wall userEmail={user.email}/> : <Login />}
        </div>
    )

}

export default Bridge

import { auth } from "../../settings/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react'
import '../wall/wall.css'


const Login = () => {
  const [register, setRegister] = useState(false);
  const handlerSubmit = async(e) => {
      e.preventDefault();
      const correo = e.target.email.value;
      const contraseña = e.target.contraseña.value;
      if (register){
          await createUserWithEmailAndPassword(auth, correo, contraseña)
      } else {
          await signInWithEmailAndPassword(auth, correo, contraseña)
      }
  }
  return(
    <div className="customBackground">
    <div className="row container p-4">
        <h3>Aquí puedes registrarte. ¡más adelante podrás dejarnos un comentario en nuestro muro y tendrás otros beneficios!</h3>
          {/* formulario */}
          <div className="col-md-4">
              <div className="mt-5 ms-5">
                  {/* render conditional */}
                  <h2>{register ? 'Registrarse' : 'Iniciar Sesion'}</h2>
                  {/*colocando onsubmit*/}
                  <form onSubmit={handlerSubmit}>
                      <div className="mb-3">
                           <label className="form-label">Email: </label>
                          <input type='email' className="form-control" placeholder="Tu email" id="email" required></input>
                      </div>
                      <div className="mb-3">
                          <label className="form-label">Contraseña: </label>
                          <input type='password' className="form-control" placeholder="Tu contraseña" id="contraseña" required></input>
                      </div>
                      <button className="btn btn-primary" type="submit">
                          {register ? 'Registrarse' : 'Iniciar Sesion'}
                      </button>
                  </form>
                  {/* actualizar estado */}
                  <div className="form-group">
                      <button className="btn btn-secondary mt-4 form-control" onClick={() => setRegister(!register)}>{register ? 'Estas registrado? Inicia sesion' : 'No estas registrado? Registrate'}</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
  )
}
export default Login;


      //     <div className="col-md-8">
      //     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      //         <div className="carousel-inner">
      //             <div className="carousel-item active">
                      
      //             </div>
      //             <div className="carousel-item">
                      
      //             </div>
      //             <div className="carousel-item">
                      
      //             </div>
      //         </div>
      //         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //             <span className="visually-hidden">Previous</span>
      //         </button>
      //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //             <span className="visually-hidden">Next</span>
      //         </button>
      //         </div>
      //     </div>
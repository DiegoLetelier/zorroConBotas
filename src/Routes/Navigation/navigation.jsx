import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import zorro from '../Navigation/Master-Zorro.png'


export const Navigation = () => {
    return (
        <Fragment>
            <div className="backNav">
                <div className='customNavbar'>
                    <div>
                    <img src={zorro} alt="zorro" className='zorroImg' />
                    </div>
                    <Link to='/' > Inicio  </Link>
                    <Link to='/menu'> Menu </Link>
                    <Link to='/reserva'> Reservas </Link>
                    <Link to='/muro'>Comunidad</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )

}
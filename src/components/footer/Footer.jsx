
import Info from '../info/Info';
import zorro from '../../Routes/Navigation/Master-Zorro.png'
import {Link} from 'react-router-dom'
import { CDBFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import './footer.css'

export const Footer = () => {
  return (
    <CDBFooter className="shadow customFooter">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <Link to="/" className="d-flex align-items-center p-0 text-dark customLinks" >
              <img alt="logo" src={zorro} width="30px" />
              <span className="ml-3 h5 font-weight-bold">Zorro con Botas</span>
            </Link>
            <p className="my-3" style={{ width: '250px' }}>
              Productos locales montañosos combinados con energía de los Andes Chilenos. 
            </p>
            <CDBBox display="flex" className="mt-4">
              <CDBBtn flat color="dark">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox >
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Zorro con Botas
            </p>
            <div className="customColumns">
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }} className="customLinks">
              <Link to="/N" >Nuestro Proyecto</Link><br></br>
              <Link to="/E">Equipo</Link><br></br>
              <Link to="/C">Contacto</Link><br></br>
              <Link to="/B">Blog</Link><br></br>
            </CDBBox>
            </div>
          </CDBBox>
          <CDBBox >
            
            <Info/>
            {/* <div className="customColumns">
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }} className="customLinks">
              <Link to="/N" >Nuestro Proyecto</Link><br></br>
              <Link to="/E">Equipo</Link><br></br>
              <Link to="/C">Contacto</Link><br></br>
              <Link to="/B">Blog</Link><br></br>
            </CDBBox>
            </div> */}
          </CDBBox>
          
        </CDBBox>
        <small className="text-center mt-5">&copy; Zorro con Botas, 2022.</small>
      </CDBBox>
    </CDBFooter>
  );
};
import Slider from '../slider/Slider';
import Form from '../forms/Form';
import './inicio.css'



const Inicio = () => {
  
  const fadeImages = [
    {
    url: '../../assets/imgs/familia.jpg',
    caption: 'Para todos',
    
    },
    {
    url: '../../assets/imgs/Hamburguesa.jpg',
    caption: 'Hamburguesa artesanal',
    
    },
    {
    url: '../../assets/imgs/kebab.jpg',
    caption: 'el mejor Kebab',
    
    },
    {
      url: '../../assets/imgs/zorrito.jpg',
      caption: 'Rodeado de Naturaleza',
      
      },
      {
    url: '../../assets/imgs/volcan.jpg',
    caption: 'A los pies del Volcán',
    
    },
    {
      url: '../../assets/imgs/sour.jpg',
      caption: 'Sour en el Sur de Chile',
           },
  ];

  return (
    <div className="customBackground">
        <h1>ZORRO CON BOTAS RESTAURANTE</h1>
        <p className='pp'>El restaurante de montaña Zorro con Botas es ideal para hacer un break durante la jornada de ski. Con un cálido ambiente y una inmejorable vista al volcán Lonquimay, ofrece una variada carta de sándwiches y kebabs, junto a un delicioso a menú autoservicio, perfecto para recuperar energía.
Acompaña tu almuerzo con una selección de los mejores vinos y cervezas nacionales o con un refrescante jugo natural. Para terminar, no olvides acompañar tu café con nuestras especialidades dulces.</p>
       <div className='sliderBox'>
        <div className='column1' />
        <p className='slider'><Slider  fadeImages={fadeImages} /> </p>
        <div className='column2' /> 
        </div>
      <div>
      <Form />
      </div>
    </div>
  )

}

export default Inicio;
import { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { menuRef } from '../../settings/firebase';
import './menu.css';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getDocs(menuRef)
      .then((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setMenuItems(items);
      })
      .catch((error) => {
        console.log('Error getting menu items:', error);
      });
  }, []);

  console.log(menuItems);

  return (
    <div className="customBackground">
      <div className="center">
        <h2> MENU</h2>
        <div className='imageContainer'>
          <img src='https://images.unsplash.com/photo-1568031813264-d394c5d474b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80' alt="menu" />
        </div>
        <div>
          {menuItems.map((item) => (
            <div key={item.id}>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;

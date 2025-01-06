import React from 'react';
import myImage from '/home/nanet/develop/react/curso-react-intro/src/images/rb_1762.png'; // Cambia esto al nombre correcto de tu imagen
import './TodoImagen.css';

export function TodoImagen() {
  return (
    <img className="TodoImagen" src={myImage} alt="" 
    />
  );
}

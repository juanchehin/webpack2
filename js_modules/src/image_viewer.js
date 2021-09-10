import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css'; // Como no es un archivo .js , debe especificarse la extencion (en este caso .cNss)

const img = document.createElement('img');
img.src = "http://lorempixel.com/400/400/";

document.body.appendChild(img);
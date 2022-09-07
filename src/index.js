import React from 'react';
import ReactDOM from 'react-dom/client';
import {Isabel} from '../src/Isabel/Isabel.js'
import { Menu } from '../src/Menu/Menu.js'
//{Isabel} es como si existiera esa etiqueta en html
//en el index se renderizan los componentes que construyen el html en js
let nombre = <h1>Hola mundo</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Menu></Menu>)

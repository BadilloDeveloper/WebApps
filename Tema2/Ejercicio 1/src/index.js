import { Label, Button, Container } from './core.js';
var lbl1 = Label('hola', 'red');
var lbl2 = Label('adios', 'blue');
var bt = Button('boton', function() { alert('hola'); });
Container('main', [lbl1, lbl2, bt]);
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en FirstApp.jsx', ()=>{
    test('debe de hacer match con el snapshot', ()=>{
        const tittle = 'Hola, soy Goku'
        render( <FirstApp tittle={tittle}/> );
    });   
});
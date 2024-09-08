import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj',()=>{
    test('get debe de retornar la data', ()=>{

        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };

        const resp = usContext(persona);

        expect( resp ).toEqual({
            Clave: 'Ironman',
            Nombre: 'Tony',
            anios: 45,
            latlng: { lat: 14.1232, lng: -12.3232 }  
          });
    });
});
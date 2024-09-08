import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.test.js', ()=> {
    // test('getImagen debe de retornar un URL de la imagen', async()=> {
    //     const url = await getImagen();
    //     console.log(url); 
    //     expect( typeof url ).toBe('string');
    // });

    test('getImagen debe de retornar un Error porque no hay API key', async()=> {
        const resp = await getImagen();
        expect( resp ).toBe('No se encontro la imagen');
    });
});
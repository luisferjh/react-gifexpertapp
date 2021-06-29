import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', ()=>{

    test('debe de retornar el estado inicial', ()=>{

       const {result} = renderHook( ()=> useFetchGifs('samurai x'))    
       const {data, loading} = result.current
       
        console.log(data, loading)

        expect(data).toEqual([])
        expect(loading).toBe(true)
    })

    test('debe de retornar un arreglo de imgs y el loading false', async ()=>{

        const {result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('samurai x'))            
        await waitForNextUpdate();
        
        const {data, loading} = result.current
        
        console.log(data, loading)

        expect(data).toEqual(10)
        expect(loading).toBe(false)
    })

})
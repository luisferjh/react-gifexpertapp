import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)
    })

    test('debe de mostrarse correctamente', async () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de cambiar la caja de texto', async () => {
        const input = wrapper.find('input')
        const value = 'hola mundo'
        input.simulate('change', {
            target:{
                value}
            })

       expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('No debe de postear la información con submit', () =>{

        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled
    })

    test('debe de llamar setCategories y limpiar la caja de texto', ()=>{
        // 1. simular el inputchange
        const value = 'Hola mundo'
        wrapper.find('input').simulate('change',{ target:{ value } })

        //2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}})


        //3 .setCtegories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )

        //4. el valor del input debe estar en cero
        expect(wrapper.find('input').prop('value')).toBe('')
    })
})

import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../components/GifExpertApp'

describe('Debe mostrarse correctamente', ()=>{

    
    
    test('debe de mostrarse correctamente', async () => {
        const wrapper = shallow(<GifExpertApp /> )
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', ()=> {

        const categories = ['samurai x', 'dragon ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} /> )

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
})
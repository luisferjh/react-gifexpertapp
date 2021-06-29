import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {

    const id = "eo8UrZwpvjPHi";
    const title = "rurouni kenshin GIF"
    const url = "https://media4.giphy.com/media/eo8UrZwpvjPHi/giphy.gif?cid=c7b9e7e9attbsd94pk06j0y6kh0q18zsbphpk33sm11b5qzz&rid=giphy.gif&ct=g"
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('debe renderizar el componente correctamente', ()=>{       

        expect(wrapper).toMatchSnapshot()

    })

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        //console.log(img.html())
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div')
       //animame_fadeIn
       const className = div.prop('className')
        expect(className.includes('animate__fadeIn')).toBe(true)
    })
})
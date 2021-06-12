import React, {useState} from 'react'
import {AddCategory} from './AddCategory'
import {GifGrid} from './GifGrid'

export const GifExpertApp = () => {

   // const categories = ['One Puch', 'samurai X', 'dragon ball']
    const [categories, setCategories] = useState(['samurai X'])

    // const handleAdd = ()=>{
    //     console.log(categories)
    //     //setCategories([...categories, 'Hunter x Hunter']) // alternativa para no borrar el estado
    //     setCategories(cats =>  [...cats, 'Hunter x Hunter']) // alternativa para no borrar el estado
    // }


    console.log(categories)
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />        

            <ol>
               {
                   categories.map((category, index) => ( // los parentesis indican que se devuelve un objeto
                    <GifGrid 
                        key={category}
                        category={category} />
                   ))
               }
            </ol>
           
        </>
    )
}

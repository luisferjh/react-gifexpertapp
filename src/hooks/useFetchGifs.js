import {getGifs} from '../helpers/getGifs'
import React, { useState, useEffect } from 'react'

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    
    useEffect(()=>{
        getGifs(category)
            .then(imgs => {
                console.log(imgs)
                setstate({
                    data: imgs,
                    loading: false
                })                
            }) 
    }, [category])

  
    return state // {data:[, loading:true]}
}

import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handInputChange = (e) => {
        setInputValue(e.target.value)          
        
        console.log('handleInputChange llamado')
    }

    const handleSubmit = (e)=>{
        e.preventDefault();            
        if(inputValue.trim().length > 2)
        {
            setCategories(category => [inputValue, ...category])
            setInputValue('')
        }

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                onChange={handInputChange}
            />
        </form>
            
        </>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

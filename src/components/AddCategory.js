import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorys}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) =>{ setInputValue(e.target.value) };
  
  const handleSubmit = (e) =>{ 

    if(inputValue.trim().length > 2){
        e.preventDefault();
        setCategorys( cats => [inputValue,...cats]);
    }
    
  }

    return (
      <form onSubmit={ handleSubmit }>

        <input 
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
        />

      </form>
  );
}

AddCategory.propTypes ={
  setCategorys: PropTypes.func.isRequired,
}

import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {

  const [categorys, setCategorys] = useState(['One Piece']);

  const handleAdd = () =>{ setCategorys([...categorys,'Dragon Ball'])};

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategorys={ setCategorys }/>
      <hr/>
      <ol>
        {
          categorys.map( (cat) =>  <GiftGrid key={ cat } categorys={ cat }/> )
        }
      </ol>
      <button onClick={ handleAdd }>Agregar</button>
    </>
  );
}
import React from 'react'
import { GiftGridItem } from './GiftGridItem';
import { useFetchGift } from '../hooks/useFetchGift';

export const GiftGrid = ({ categorys }) => {

  const {loading, data:imgs} = useFetchGift(categorys);

  return (
    <div>
      <h3 className='animate__animated animate__bounce'> { categorys } </h3>
      { loading && <p>Loading...</p> }
      <div className='cardBox'>
        {
          imgs.map( (img) => (
            <GiftGridItem 
              key={ img.id }
              {...img}//otra menera de enviar las propertis de manera independiente
            />
          ))
        } 
      </div>
    </div>
  )
}

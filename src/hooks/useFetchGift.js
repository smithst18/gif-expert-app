import { useEffect, useState } from "react"
import { getGift } from "../helpers/GetGifs";

export const useFetchGift = ( category ) =>{
  
  const [state, setState] = useState({
    data:[],
    loading:true,
  });
  
  useEffect(() => {

    getGift( category )

      .then(

        imgs => {
          setTimeout(() => {
            setState({
              data:imgs,
              loading:false,
            })
          }, 2000);
        }
        
      );

  }, [ category ])

  return state; // { data: [] , loading: true }

}
import React, { useEffect, useState } from 'react'
import { getShowById, ShowDetailType } from '../api'
import useFavouritesId from './useFavouritesId'

function useFavouritesFromApi(showIds: number[]) {
    const [shows,setShows] = useState<ShowDetailType[]>([])

    useEffect(() => {
      const getShows = async () => {
        const res = await Promise.all(showIds.map((id)=>getShowById(id)));
        setShows(res);
      }
      getShows();
    }, [showIds])
    

  return shows;
  
}

export default useFavouritesFromApi
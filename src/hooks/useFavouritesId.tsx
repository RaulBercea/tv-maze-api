import { off, onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { database } from '../firebase'

function useFavouritesId() {
    const { user } = UserAuth();
    const [favouriteIds,setFavouriteIds] = useState<number[]>([]);

  useEffect(() => {
    const favouritesIdsRef = ref(database, `users/${user?.uid}/favourites`)  ;
    onValue(favouritesIdsRef, (snapshot)=>{
        const data  = snapshot.val();
        const favourites: number[] = data ? Object.values(data) : [];
        setFavouriteIds(favourites);
        off(favouritesIdsRef);
    })
  },[user]);
  
  return favouriteIds;
}

export default useFavouritesId;
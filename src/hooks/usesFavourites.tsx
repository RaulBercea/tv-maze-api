import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { database } from "../firebase";
import { UserAuth } from "../context/AuthContext.jsx";

const usesFavourites = (favouriteId?: string | number) => {
  const [isFavourite, setFavourite] = useState<boolean>(false);
  const { user } = UserAuth();

  useEffect(() => {
    const unsubscribe = onValue(
      ref(database, `users/${user?.uid}/favourites/${favouriteId}`),
      (snapshot) => {
        const data = snapshot.val();
        setFavourite(!!data);
      }
    );

    return () => {
      unsubscribe();
    };
  });

  return isFavourite;
};

export default usesFavourites;

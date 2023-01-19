import { getDatabase, ref, remove, set, update } from "firebase/database";
import { database } from "../firebase";

export function addFavourite(userId: string, favourite: number) {
  update(ref(database, `users/${userId}/favourites`), {
    [favourite]: favourite,
  });
}

export function removeFavourite(userId: string, favourite: number) {
  remove(ref(database, `users/${userId}/favourites/${favourite}`));
}


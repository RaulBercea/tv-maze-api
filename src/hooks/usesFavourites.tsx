import React from 'react'
import { onValue,ref } from 'firebase/database'
import { database } from '../firebase'
import {UserAuth} from "../context/AuthContext.jsx"

const usesFavourites = () => {
  return (
    <div>usesFavourites</div>
  )
}

export default usesFavourites
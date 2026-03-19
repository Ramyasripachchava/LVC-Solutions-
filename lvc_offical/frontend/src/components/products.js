
import React from 'react'
import FairjobProduct from './fairjobProduct'
import LvcSpotlightProduct from "./lvcSpotlightProduct"
import Lvc320CareerProduct from './lvc320CareerProduct'
import { color } from 'framer-motion'

const Products = () => {
  return (
    <div>
      <FairjobProduct/>
      <LvcSpotlightProduct/>
      <Lvc320CareerProduct/>
    </div>
  )
}

export default Products


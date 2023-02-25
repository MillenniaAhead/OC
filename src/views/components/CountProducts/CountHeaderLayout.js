import React from 'react'
import { CountCustomButton } from './CountButton/CountCustomButton'
import CustomButtonGroup from './CountButton/CustomButtonGroup'
import Countsbodylayout from './Countslayout/Countsbodylayout'

const CountHeaderLayout = () => {
  return (
    <div>
          <div class="d-flex justify-content-between">
              <div>x</div>
              <div><h2> Counts product </h2></div>
              <div class="d-flex  align-items-center ">
                 <CountCustomButton />
                 <CustomButtonGroup />

              </div>
          </div>

          <Countsbodylayout />
    </div>
  )
}

export default CountHeaderLayout
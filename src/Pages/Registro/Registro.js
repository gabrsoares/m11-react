import React from 'react'
import './Registro.css'
import Data from '../../Components/Data/Data'

export default function Registro({newData}) {
  return (
    <div id='registro'>
        <Data newData={newData} />
    </div>
  )
}

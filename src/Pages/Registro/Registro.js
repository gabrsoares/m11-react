import React from 'react'
import './Registro.css'
import Data from '../../Components/Data/Data'
import Header from '../../Components/Header/Header'

export default function Registro({newData}) {
  return (
    <div id='registro'>
        <Header title="Registro"/>
        <Data newData={newData} />
    </div>
  )
}

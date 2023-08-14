import React from 'react'
import './Cadastro.css'
import Header from '../../Components/Header/Header'
import Form from '../../Components/Form/Form'

export default function Cadastro({setNewData, newData}) {

  return (
    <div id='cadastro'>
      <Header title="Cadastro" />
      <Form setNewData={setNewData} newData={newData} />
    </div>
  )
}

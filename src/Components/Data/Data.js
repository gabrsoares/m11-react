import React from 'react'
import './Data.css'

export default function Data({newData}) {
  return (
    <div id='data'>
        {newData.map((item, index) => (
            <div className="data-list" key={index}>
                <div className='container'>
                    <p>Nome:</p>
                    <p className='name-data'>{item.name}</p>
                </div>
                <div className='container'>
                    <p>CPF:</p>
                    <p>{item.cpf}</p>
                </div>
                <div className='container'>
                    <p>Email:</p>
                    <p>{item.email}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

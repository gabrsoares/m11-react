import React, { useState } from 'react'
import './Form.css'

const Form = ({setNewData, newData}) => {

    
    const [nameData, setNameData] = useState('');
    const [cpfData, setCpfData] = useState('');
    const [emailData, setEmailData] = useState('');
    const [isError, setIsError] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const resetForm = () => {
        document.getElementById('form').reset()
        setNameData('')
        setCpfData('')
        setEmailData('')
        setIsError(false)
    }

    const handleChange = (event) => {
        const {id, value} = event.target
        setIsSubmitted(false)
        setIsError(false)

        switch(id) {
            case "name":
                setNameData(value);
                break
            case "cpf":
                setCpfData(value);
                break
            case "email":
                setEmailData(value);
                break
            default:
                console.log("erro")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(true)
        if (nameData !== "" && cpfData !== "" && emailData !== "") {
            setNewData([
                ...newData,
                {
                    name: nameData,
                    email: emailData,
                    cpf: cpfData
                }
            ])
            resetForm()
        } else {
            setIsError(true)
        }
    }

    return (
        <div>
            <form id='form' onSubmit={handleSubmit}>
                <div className="form">
                    <div className="loginInfo">
                        <div className="container name">
                            <label htmlFor="name">Nome</label>
                            <input type="text" onChange={handleChange} placeholder="Digite seu nome" id="name"/>
                        </div>
                        <div className="container email">
                            <label htmlFor="idade">Email</label>
                            <input  type="text" onChange={handleChange} placeholder='Digite seu email' id="email"/>
                        </div>
                        <div className="container cpf">
                            <label htmlFor="cpf">CPF</label>
                            <input maxLength={14} type="text" onChange={handleChange} placeholder='Digite seu CPF' id='cpf'/>
                        </div>
                    </div>
                    <p style={{display: isError? "block" : "none"}}>Preencha os campos corretamente!</p>
                    <input type="submit" value="Cadastrar" id='cadButton'/>
                </div>
            </form>
        </div>
    )
}

export default Form;

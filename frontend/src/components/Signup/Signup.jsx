import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    let userData = {
        firstName,
        lastName,
        email
    }
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate("/")
        }
    })

    const registerUser = async (e) => {
        e.preventDefault()

        let result = await fetch('https://ecommerce-ineuron.onrender.com/register', {
            method: 'post',
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        result = await result.json()

        // sessionStorage.setItem("token", JSON.stringify(result.auth))
        // sessionStorage.setItem("user", JSON.stringify(userData))

        if (result.status === "success") {
            alert("Successfully Registered. Kindly Login")
            navigate("/login")
        }
    }
    return (
        <div className='FormContainer'>
            <h2 className='textLabel'>Register</h2>
            <form>

                <label className='textLabel'>Firstname</label>
                <input type="text" className='inputText' required onChange={(e) => setFirstName(e.target.value)}></input>

                <label className='textLabel'>Lastname</label>
                <input type="text" className='inputText' required onChange={(e) => setLastName(e.target.value)}></input>


                <label className='textLabel'>E-mail</label>
                <input type="text" className='inputText' required onChange={(e) => setEmail(e.target.value)}></input>

                <label className='textLabel'>Password</label>
                <input type="password" className='inputText' maxLength={10} required onChange={(e) => setPassword(e.target.value)}></input>

                <button className='submitButton' onClick={(e) => registerUser(e)}>Register</button>
            </form>

        </div>
    )
}

export default Signup
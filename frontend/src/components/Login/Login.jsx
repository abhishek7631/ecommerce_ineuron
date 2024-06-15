import { React, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password)
    const navigate = useNavigate();

    const [isLoading,setLoading] = useState(false)


    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        let result = await fetch("https://ecommerce-ineuron.onrender.com/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        setLoading(false)
        if (result.status == "success") {
            sessionStorage.setItem('token', JSON.stringify(result));
            sessionStorage.setItem("user", JSON.stringify(result.userData[0]))
            navigate("/")
        }
        else {
            alert(result.status)
        }

    }
    return (
        <div className='FormContainer'>
            <h2 className='textLabel'>Login</h2>
            <form>

                <label className='textLabel'>E-mail</label>
                <input type="text" className='inputText' required onChange={(e) => setEmail(e.target.value)}></input>

                <label className='textLabel'>Password</label>
                <input type="password" className='inputText' maxLength={10} required onChange={(e) => setPassword(e.target.value)}></input>

                <button className='submitButton' onClick={(e) => handleLogin(e)}>{isLoading ? <CircularProgress /> : "Login"}</button>
            </form>
            <p style={{ color: 'red'}}>Note: 1st Login/Register may take upto 50 seconds time as the backend is running on free server.</p>

        </div>
    )
}

export default Login
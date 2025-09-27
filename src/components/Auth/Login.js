import { useState } from 'react'
import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        alert(123)
    }
    return (
        <div className='login-container'>
            <div className='header'>
                Don't have account yet
            </div>
            <div className='title col-4 mx-auto'>
                Brian Becoming Software Engineering
            </div>

            <div className='welcome col-4 mx-auto'>
                Hello, who's this
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className='form-control' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                </div>

                <span className='forgot-password'>Forget your password ?</span>
                <div>
                    <button onClick={() => handleLogin()} className='btn-submit'>Login to Brian</button>
                </div>
            </div>



        </div>
    )
}

export default Login
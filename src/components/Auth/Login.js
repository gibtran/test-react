import { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { postLogin } from '../../service/apiService'
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async () => {
        //validate 

        //submit data
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/")
        } else if (data && data.EC !== 0) {
            toast.error(data.EM)
        }


    }
    const navigate = useNavigate()
    return (
        <div className='login-container'>
            <div className='header'>
                <span>Don't have account yet?</span>
                <button onClick={() => navigate('/signup')}>Sign Up</button>
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
                <div className='text-center' >
                    <span className='back' onClick={() => navigate('/')}> &lt;&lt; Go to Homepage</span>
                </div>
            </div>



        </div>
    )
}

export default Login
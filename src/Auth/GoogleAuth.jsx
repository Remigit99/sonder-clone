
import './Auth.css'
import { FcGoogle } from 'react-icons/fc'

const GoogleAuth = () => {
    return (
        <button type='button' className='btn-auth'>
            <FcGoogle />
            <p>Login with google</p>
        </button>
    )
}

export default GoogleAuth
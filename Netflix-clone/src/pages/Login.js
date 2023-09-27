import React ,{useState} from 'react'
import { Link , useNavigate} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
const Login = () => {

  const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const {user,logIn} = UserAuth();
    const [error , setError] = useState("");
    
    const handleSubmit = async (e)=>{
      e.preventDefault();
      setError("")
      try {
        await logIn(email , password);
        navigate('/');
      } catch (error) {
        console.log(error);
        setError(error.message)
      }

    }

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
          <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
                  <div className="max-w-[320px] mx-auto py-16 " >
                    <h1 className="text-3xl font-bold">Sign In
                    </h1>
                    {
                      error ? <p className='p-3 rounded text-red-900 font-bold my-2'>Invalid login credentials</p>:null
                    }
                    <form onSubmit={handleSubmit}  className="w-full flex flex-col py-4 ">
                        <input onChange={(e)=> setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded " type="email" placeholder="Email" autoComplete="email" />
                        <input onChange={(e)=> setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded " type="password" placeholder="Password" autoComplete="current-password"/>
                        <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                        <div className="flex justify-between items-center text-gray-600 text-sm">
                          <p><input className=" mr-2" type="checkbox" name="" id="" />Remember Me</p>
                          <p>Need Help?</p>
                        </div>
                        <p className="text-center py-8"><span className='text-gray-600'>
                    Hey New to Netflix?
                  </span>{' '}
                  <Link to='/signup'>Sign Up</Link></p>
                    </form>
                  </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default Login

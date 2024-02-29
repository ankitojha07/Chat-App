import {React, useState} from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Form = ({
  isSignInPage = true
}) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: ''
    }),
    email:'',
    password:'',
  })

  console.log("data :>> " ,data);
  return (
    <div className='bg-white w-[800px] h-[800px] shadow-lg flex flex-col justify-center items-center rounded-xl'> 
    <div className='text-4xl font-bold'>Welcome {isSignInPage && "Back"}</div>
    <div className='text-xl font-light mb-14'> {isSignInPage ? 'Sign in to get started' : 'Sign up to get started'}</div>
 
 <form onSubmit = {()=>{console.log('Submitted')}} className='flex items-center justify-center flex-col w-full'>
  { !isSignInPage && <Input label='Full Name' name='name' placeholder='Enter your full name' className='mb-6' value={data.fullName} onChange={(e)=>setData({...data, fullName:e.target.value})} /> }

    
    <Input label='Email Address' name='email' type="email" placeholder='Enter your email id' className='mb-6' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})}/>
    <Input label='Password' type='password' name='name' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e)=>setData({...data, password:e.target.value})}/>
    <Button label= {isSignInPage?'Sign In' :'Sign Up'} type='submit' className="w-1/2 mb-6" />
    </form>
    <div> {isSignInPage ? "Don't have an account?" : 'Already have an account?'} <span className="text-primary cursor-pointer underline"> {isSignInPage?'Sign Up' : 'Sign In'} </span> </div>
    </div>
  )
}

export default Form
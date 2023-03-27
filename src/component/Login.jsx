import React from 'react'
import {useNavigate} from "react-router-dom";


export default function Login() {
    const navigate =useNavigate();
  return (

    <div className='h-screen w-full bg-slate-300 flex justify-items-center'>
      <form action="" className='max-w-[400px] w-full my-auto mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center'>LOGIN</h2>
          <div className='flex flex-col py-2 '>
              <label htmlFor="">Email</label>
              <input className='border p-2'type="text" />
          </div>
          <div className='flex flex-col py-2 '>
              <label htmlFor="">Password</label>
              <input className='border p-2'type="password" />
          </div>
          <button onClick={()=> navigate('/Expencess')} className='border w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-500 text-white'>
              Sign in
          </button>
      </form>
    </div>
  )
}

import React from 'react'
import index from '.'


export const LoginForm = () => {
  return (
    <div className='flex flex-col flex-auto  w-full h-screen'>
        <div className='h-full'>
            <div className='grid grid-cols-3 h-full'>
                <div className='bg-orange-500'></div>
                    <div className='col-span-2 flex justify-center items-center'>
                        <div className='min-w-[450] px-8'>
                            <div className='mb-8'>
                                <h1 className='text-3xl 
                                font-medium'>Welcome Back</h1>
                                <p className='mb-4'>Please enter your credentails to sign in!</p>
                               
                              

                              
                               <form>

                               <div className='mb-4'>
                                        <label className='font-medium mb-2 flex'>email</label>
                                        <input type='text' placeholder='Enter your email' 
                                        className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                                    </div>

                                    <div className='mb-2'>
                                        <label className='font-medium mb-2 flex'>password</label>
                                        <input type='password' placeholder='Enter your password' 
                                        className='w-full border rounded-md bg-transparent border-gray-400 p-3'/>
                                    </div>
                                    <div className='flex justify-between mb-6'>
                                        <label>
                                            <input type='checkbox' className='mr-2 mt-1'/>
                                                remember me

                                        </label>

                                        <span>Forgot password</span>
                                    </div>
                                    <button className='block bg-orange-500 hover:bg-orange-300
                                     text-white w-full py-2 px rounded-md'>Sign in</button>

                                     <div className='mt-4 text-center'>
                                        Don't have an account yet?<span className='m-1 text-orange-300'>
                                            Sign up</span>
                                     </div>
                               </form>
                              
                            </div>

                        </div>

                    </div>
            </div>


        </div>

    </div>
    
  )
}
export default LoginForm

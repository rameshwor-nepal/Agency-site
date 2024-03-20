import { register } from '@/lib/CreatePost'
import React from 'react'

const Registerpage = () => {
  return (
    <div>
      <form action={register}>
        <input type="text" placeholder='username' name='username' />
        <input type="text" placeholder='email' name='email' />
        <input type="password" placeholder='password1' name='password1' />
        <input type="password" placeholder='password2' name='password2' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Registerpage
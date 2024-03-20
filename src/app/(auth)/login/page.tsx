import { handleGithubLogIn, logIn } from '@/lib/CreatePost';
import { auth } from '@/lib/auth';
import React from 'react'

const Loginpage = async () => {

  const session = await auth();
  console.log(session);
  return (
    <div>
      <form action={handleGithubLogIn}>
        <button> Login with Github</button>
      </form>
      <form action={logIn}>
      <input type="text" placeholder='username' name='username' />
        <input type="password" placeholder='password' name='password' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Loginpage
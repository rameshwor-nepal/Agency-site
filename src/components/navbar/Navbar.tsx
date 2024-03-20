
import React, { useState } from 'react'
import Links from './Links'
import { auth } from '@/lib/auth';

const Menus = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog'
  },
  {
    id: 4,
    name: 'Contact Us',
    path: '/contact'
  },
]
const Navbar = async() => {

  const isSession = await auth();
  return (

    <section>
      <Links isSession = {isSession || null}/>

    </section>
  )
}

export default Navbar
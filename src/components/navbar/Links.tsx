"use client"
import { handleLogOut, handleGithubLogIn } from '@/lib/CreatePost';
import React, { useState } from 'react'
import MobileNavbar from './MobileNavbar';
import NavLinks from './navLinks';
import Image from 'next/image'
import styles from './navbar.module.css'
import { Session } from 'next-auth';

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
interface PropI{
    isSession: Session | null;
}
const Links = ({isSession}: PropI) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div>
            <div className={styles.container}>
                <div>
                    <Image src={'/agencyLogo.png'} alt='logo' width={70} height={70}></Image>
                </div>

                <ul className={styles.linkContainer}>
                    {Menus.map((el, index) => (
                        <NavLinks key={index} path={el.path} title={el.name} />
                    ))}
                    {isSession?.user?.isAdmin &&
                        <NavLinks path='/admin' title='Admin' />
                    }
                </ul>
                <div className={styles.linkContainer}>
                    {isSession?.user ? (
                        <form action={handleLogOut}>
                            <button className='btnPrimary'>Log Out</button>
                        </form>
                    ) : (
                        <form action={handleGithubLogIn}>
                            <button className='btnPrimary'>Log In</button>
                        </form>
                    )}

                </div>

                <MobileNavbar open={open} setOpen={setOpen} session={isSession} menus={Menus} />
            </div>
        </div>
    )
}

export default Links
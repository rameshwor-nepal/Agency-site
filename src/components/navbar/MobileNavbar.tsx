import { handleLogOut, handleGithubLogIn } from '@/lib/CreatePost'
import React from 'react'
import NavLinks from './navLinks'
import styles from './navbar.module.css'
import { Session } from 'next-auth';

interface PropsI{
    open:boolean;
    setOpen: (open: boolean) => void;
    session: Session | null;
    menus: {
        id:number;
        name: string;
        path: string;
    }[]
}

const MobileNavbar = ({open, setOpen, session, menus}:PropsI) => {
  return (
    <>
         <button onClick={() =>setOpen(!open)} className={styles.menuButton}>Menu</button>
        { open && (
            <ul className={styles.mobileLinks}>
              {menus.map((el, index) => (
                <NavLinks key={index} path={el.path} title={el.name} />
              ))}
              {session?.user?.isAdmin &&
                <NavLinks path='/admin' title='Admin' />
              }
              {session?.user ? (
                <form action={handleLogOut}>
                <button className='btnPrimary'>Log Out</button>
            </form>
              ) : (
                <form action= {handleGithubLogIn}>
                <button className='btnPrimary'>Log In</button>
            </form>
              )}
            </ul>
        )
      }
    </>
  )
}

export default MobileNavbar
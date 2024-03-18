"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'
import NavLinks from './navLinks'

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
const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isSession = true;
  const isAdmin = true;
  return (
    <section>
      <div className={styles.container}>
        <div>
          <Image src={'/agencyLogo.png'} alt='logo' width={70} height={70}></Image>
        </div>

          <ul className={styles.linkContainer}>
            {Menus.map((el, index) => (
              <NavLinks key={index} path={el.path} title={el.name} />
            ))}
            {isAdmin &&
              <NavLinks path='/admin' title='Admin' />
            }
          </ul>
          <div className={styles.linkContainer}>
            {isSession ? (
              <button className='btnPrimary'>Log Out</button>
            ) : (
              <button className='btnPrimary'>Log In</button>
            )}

          </div>
             
      <button onClick={() =>setOpen(!open)} className={styles.menuButton}>Menu</button>
        { open && (
            <ul className={styles.mobileLinks}>
              {Menus.map((el, index) => (
                <NavLinks key={index} path={el.path} title={el.name} />
              ))}
              {isAdmin &&
                <NavLinks path='/admin' title='Admin' />
              }
              {isSession ? (
                <button className='btnPrimary'>Log Out</button>
              ) : (
                <button className='btnPrimary'>Log In</button>
              )}
            </ul>
        )
      }
      </div>

    </section>
  )
}

export default Navbar
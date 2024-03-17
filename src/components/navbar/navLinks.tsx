"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation'

 interface PropsI{
    path: string;
    title: string
 }

const NavLinks = ({path, title}: PropsI) => {
  const getPath = usePathname();

  return (
    <div>
          <Link href={path}>
            <li className={`${styles.linkItem} ${getPath === path && styles.linkActive}`}>
              {title}
            </li>
          </Link>
    </div>
      
  )
}

export default NavLinks
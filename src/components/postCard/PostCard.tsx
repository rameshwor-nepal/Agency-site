import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imageContainer}>
                <Image src={"/post.png"} alt='post' width={340} height={250} className={styles.img}/>
            </div>
            <span className={styles.date}>01/01/2001</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos, soluta, omnis veniam 
                    rerum iure blanditiis neque ipsam modi officiis totam nemo perferendis facere. Voluptates nam eos in porro laudantium.
            </p>
            <Link href={"/blog/post"} className={styles.readMore}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard
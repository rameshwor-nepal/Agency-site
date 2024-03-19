import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
interface PropsI{
  data:DbPost;
}
const PostCard = ({data}:PropsI) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imageContainer}>
                <Image src={ data.img ? `${data.img}`: "/post.png"} alt='post' width={340} height={250} className={styles.img}/>
            </div>
            <span className={styles.date}>01/01/2001</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.body}</p>
            <Link href={`/blog/${data.slug}`} className={styles.readMore}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard
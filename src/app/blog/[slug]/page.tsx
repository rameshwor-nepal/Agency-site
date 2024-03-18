import Image from "next/image";
import styles from "./SingleBlog.module.css";

const SinglePostPage = async () => {


  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={"/post.png"} alt="" width={500} height={300} className={styles.img} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
         <Image src={"/post.png"} alt="detail"  width={120} height={70}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              Rameshwor Nepal
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis quam unde. Voluptatem recusandae non minima facere 
            voluptas magni. Reprehenderit molestias cupiditate perspiciatis repudiandae voluptatum commodi ea omnis nihil illum.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
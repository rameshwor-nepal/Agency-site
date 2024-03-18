import Image from "next/image";
import styles from './page.module.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.containerLeft}>
        <h1 className={styles.heroTitle}> Creative Thought Agency</h1>
        <p  className={styles.heroContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit consequuntur facere, minus fugiat repellat voluptatibus et rem 
          nemo aspernatur expedita necessitatibus numquam accusantium ducimus non minima enim? Nam, accusamus aperiam.
        </p>
        <div  className={styles.heroButton}>
          <button className="btnPrimary">Learn More</button>
          <button className="btnSecondary">Contact Us</button>
        </div>
        <div  className={styles.heroBrands}>
          <Image src={'/brands.png'} alt="brands" width={450} height={50}/>
        </div>
      </div>

      <div className={styles.containerRight}>
        <Image src={'/hero.gif'} alt="hero gif" width={800} height={550}/>
      </div>

    </section>
  );
}

import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.scss";
// import "../styles/Home.scss"


const About = () => {
  return (
    <>
      <Head>
        {/* <title>About CodeEvolution</title> */}
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <br />

      <h3 className={styles.highlightScss}>HIGHLIGHTED BY SCSS</h3>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.innerWrapper}>
            <div className={styles.innerContainer}>
              <h1 className={styles.heading}></h1>
              <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
                magnam architecto ducimus.
              </p>
              <button className={styles.btn}>Button</button>
            </div>
          </div>
        </div>
      </div>

      <div className="nContainer">
        <div className="inner">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            deserunt incidunt voluptatem totam quo esse consectetur, rerum
            distinctio atque minus et nihil!
          </p>
        </div>
        <div className="inner">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            deserunt incidunt voluptatem totam quo esse consectetur, rerum
            distinctio atque minus et nihil!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

About.getLayout = function PageLayout(page){
  return <>
    {page}
    <Footer/>
  </>
}

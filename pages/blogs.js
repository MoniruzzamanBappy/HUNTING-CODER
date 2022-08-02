import React from "react";
import styles from "../styles/Home.module.css";
import  Link  from 'next/link';

const blogs = () => {
  return (
    <>
      <h2 className={styles.grid}>Popular Blogs</h2>
      <div className={styles.grid}>
        <div>
          <Link  href="/blogPost/next.js"><h3 className={styles.blogPost}>How to learn Next.JS</h3></Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            incidunt!
          </p>
        </div>
        <div>
          <h3>How to learn Next.JS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            incidunt!
          </p>
        </div>
        <div>
          <h3>How to learn Next.JS</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            incidunt!
          </p>
        </div>
      </div>
    </>
  );
};

export default blogs;

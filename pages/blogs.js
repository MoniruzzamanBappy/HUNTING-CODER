import React, { useEffect, useState } from "react";
import styles from "../styles/Blogs.module.css";
import Link from "next/link";
import * as fs from "fs";

const blogs = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogs, setBlogs] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setBlogs(props.blogs);
  }, [props.blogs]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blog")
  //     .then((res) => res.json())
  //     .then((data) => setBlogs(data));
  // }, []);
  return (
    <>
      <h2 className={styles.grid}>Popular Blogs</h2>
      <div className={styles.container}>
        {blogs.map((blog, index) => (
          <div className={styles.card} key={index}>
            <Link href={`/blogPost/${blog.slug}`}>
              <h3 className={styles.blogPost}>{blog.title}</h3>
            </Link>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default blogs;

export async function getStaticProps(context) {
  const data = await fs.promises.readdir(`blogdata`);
  let myFiles;
  let blogs = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    myFiles = await fs.promises.readFile(`blogdata/` +item, "utf-8");
    blogs.push(JSON.parse(myFiles));
  }
  return {
    props: { blogs }, // will be passed to the page component as props
  };
}

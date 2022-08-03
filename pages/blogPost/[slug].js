import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/Blogs.module.css";
const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blog, setBlog] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(`http://localhost:3000/api/blogdata?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [slug]);
  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
    </div>
  );
};

export default slug;

import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/Blogs.module.css";
const slug = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blog, setBlog] = useState(props.blog);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  // const { slug } = router.query;
  // // console.log(slug);
  // // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/blogdata?slug=${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => setBlog(data));
  // }, [slug]);
  return (
    <div className={styles.container}>
      <h1>{blog?.title}</h1>
      <p>{blog?.content}</p>
    </div>
  );
};

export default slug;

export async function getStaticProps(context) {
  const { slug } = context.query;
  const data = await fetch(`http://localhost:3000/api/blogdata?slug=${slug}`);
  const blog = await data.json();
  return {
    props: { blog }, // will be passed to the page component as props
  };
}

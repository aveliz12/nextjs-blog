import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

const Blog = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>Lista de Blog</h1>
        {data.map(({ id, title, body }) => (
          <div key={id}>
            <h3>
              <Link legacyBehavior href={`/blog/${id}`}>
                <a>
                  {id} - {title}
                </a>
              </Link>
            </h3>
            <p>{body}</p>
          </div>
        ))}
      </Layout>
    </>
  );
};

//Viajar los datos al LAYOUT y consumir una api
//Para sitio web statico
export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    //se hace el return para que viajen los datos al layout de la siguiente manera
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Blog;

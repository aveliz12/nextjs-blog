import React from "react";
import Layout from "../../components/Layout";

const FirstPost = ({ data }) => {
  return (
    <>
      <Layout>
        <h1>Post</h1>
        <h4>
          {data.id} - {data.title}
        </h4>
        <p>{data.body}</p>
      </Layout>
    </>
  );
};

//Tomar todos los ids de los blogs y toma todos los ids en la variable path
export const getStaticPaths = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const paths = data.map(({ id }) => {
      return { 
        params: { id: `${id}` } 
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};

//Obtener los datos- acceder a los datos en params definido en la funcion de paths
export const getStaticProps = async ({ params }) => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + params.id
    );
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

export default FirstPost;

/*Navegar a la página principal con Link*/

/* <Image
        src="/images/forest.jpg"
        width={600}
        height={600}
        alt="Mi imagen con Image de nextjs"
      />
      <Link legacyBehavior href="/">
        <a>Volver al inicio</a>
      </Link> */

import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";

const Layout = ({ children, title, description, home }) => {
  const name = "bluuweb";

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/*Colocar todos los metadatos que sean necesario por ejemplo: */}
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/forest.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/forest.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
        <Link href="/" legacyBehavior>
          <a>Inicio | </a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a>Blog | </a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a>Contacto</a>
        </Link>
      </nav>
      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};

Layout.defaultProps = {
  title: "Next.js | mi sitio web",
  description: "Descripción de mi sitio web",
};

export default Layout;

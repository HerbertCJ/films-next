import Head from "next/head"

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <title>Films Search</title>
    </Head>
    <div className={styles.main_div}>
      <h1>Search for your favorite movies</h1>
      <form>
        <div className={styles.form_login}>
          <input type="text" name="" id="" placeholder="User"/>
          <input type="password" name="" id="" placeholder="Password"/>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </>
  )
}

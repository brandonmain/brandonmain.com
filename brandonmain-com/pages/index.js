import styles from '../styles/index.module.css'
import Head from 'next/head'
import { Component } from 'react'

class Home extends Component {

  render() {
    return (
      <>
      <Head>
        <title>Brandon Main | Welcome</title>
      </Head>
      <div className={styles.index_container}>
        <h1 className={styles.landing_name}>Brandon Main</h1>
        <p>Full Stack Web and Mobile Software Engineer</p>
      </div>
      </>
    )
  }
}

export default Home
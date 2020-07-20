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
      <div className={styles.landing_ctn}>
      <div className={styles.top}></div>
      <div className={styles.mtn_wrap}>
      <div className={styles.mtn}></div>
      </div>
      <div className={styles.mtn_btm}>
      <div className={styles.road}>
      </div>
      <div className={styles.road_line}></div>
      </div>
      </div>
      </>
    )
  }
}

export default Home
import styles from '../styles/index.module.css'
import { Component } from 'react'

class Home extends Component {

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.square}/>
        <div className={styles.container__div}>
        <h1 className={styles.container__h1}>Brandon Main</h1>
        <p className={styles.container__p}>
          Full Stack Web and Mobile Developer
        </p>
        </div>
      </div>
    )
  }
}

export default Home
import styles from '../styles/index.module.css'
import Head from 'next/head'
import { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faTiktok, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {

  render() {
    return (
      <>
      <Head>
        <title>Brandon Main | Welcome</title>
      </Head>
      <div id="home" className={styles.index_container}>
      <img className={styles.headshot} src={'/img/bm.jpg'}/>
        <h1 className={styles.landing_name}>Brandon Main</h1>
        <p className={styles.landing_desc}>Full Stack Web and Mobile Software Engineer</p>
        <ul className={styles.social_ul}>
          <li><a href="https://twitter.com/brandonlmain"><FontAwesomeIcon className={styles.social} icon={faTwitter} /></a></li>
          <li><a href="https://www.instagram.com/brandonmain/"><FontAwesomeIcon className={styles.social} icon={faInstagram} /></a></li>
          <li><a href="https://www.facebook.com/brandon.main.7"><FontAwesomeIcon className={styles.social} icon={faFacebook} /></a></li>
          <li><a href="https://www.tiktok.com/@sacredbeometry?lang=en"><FontAwesomeIcon className={styles.social} icon={faTiktok} /></a></li>
          <li><a href="https://github.com/brandonmain"><FontAwesomeIcon className={styles.social} icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/brandon-main/"><FontAwesomeIcon className={styles.social} icon={faLinkedin} /></a></li>
        </ul>
      </div>
      <div id="about" className={styles.about_id}/>
      <div className={styles.about_title}>
      <h1 data-letters="About Me">About Me</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.about_card}></div>
        <div className={styles.about_card}></div>
        <div className={styles.about_card}></div>
      </div>
      </>
    )
  }
}

export default Home
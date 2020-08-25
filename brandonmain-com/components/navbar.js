import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { Component } from 'react'
import classNames from 'classnames'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotated : false
        }
    }

    navClicked = () => {
        this.setState({rotated: !this.state.rotated})
    }

    render() {
    let rotateClass = this.state.rotated ? "styles.rotate_1" : "";

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/zob8hxc.css"></link>
            </Head>
            <div className={styles.nav}>
                <ul className={styles.nav_ul}>
                    <li className={styles.name}><a className={styles.nav_a} href="#">BM</a></li>
                    <li className={styles.filler}><a className={styles.nav_a_filler} href="#">BM</a></li>
                    <li className={classNames({[styles.nav_link]: true, [styles.active]: this.state.rotated})}><a href="#home" className={styles.nav_a}>Home</a></li>
                    <li className={classNames({[styles.nav_link]: true, [styles.active]: this.state.rotated})}><a href="#about" className={styles.nav_a}>About</a></li>
                    <li className={classNames({[styles.nav_link]: true, [styles.active]: this.state.rotated})}><a href="#work" className={styles.nav_a}>Work</a></li>
                    <li className={classNames({[styles.nav_link]: true, [styles.active]: this.state.rotated})}><a href="#blog" className={styles.nav_a}>Blog</a></li>
                </ul>
                <div className={styles.menuIcon} onClick = {this.navClicked.bind(this)}>
                    <div className={classNames({[styles.bar]: true, [styles.rotate_1]: this.state.rotated})}></div>
                    <div className={classNames({[styles.bar]: true, [styles.rotate_2]: this.state.rotated})}></div>
                    <div className={classNames({[styles.bar]: true, [styles.rotate_3]: this.state.rotated})}></div>
                </div>
            </div>
        </>
    )
    };
}

export default Navbar
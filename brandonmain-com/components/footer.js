import { Component } from 'react';
import styles from '../styles/layout.module.css';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.footer}>
                <p>This site is written and maintained by Brandon Main. 2020 &#169;</p>
            </div>
        );
    }

}

export default Footer;
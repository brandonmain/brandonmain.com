import styles from '../styles/index.module.css';
import { Component } from 'react';

class Blog extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={styles.blog}>
                <div id="medium-widget"></div>
            </div>
        );
    }
}

export default Blog;
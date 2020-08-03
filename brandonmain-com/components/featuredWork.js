import {Component} from 'react';
import styles from '../styles/index.module.css';

class FeaturedWork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div>
                <h2>Featured Work</h2>
            </div>
            <div className={styles.featured_work}>
                <div className={styles.project_card}></div>
                <div className={styles.project_card}></div>
                <div className={styles.project_card}></div>
            </div>
            <div className={styles.viewMoreContainer}>
                <div className={styles.viewMore}>View More</div>
            </div>
            </>
        );
    }
}

export default FeaturedWork;
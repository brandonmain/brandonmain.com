import {Component} from 'react';
import styles from '../styles/index.module.css';

class FeaturedWork extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div id="work" className={styles.featured_title}>
            <h1 data-letters="Featured Work">Featured Work</h1>
            </div>
            <div className={styles.featured_work}>
                <div className={styles.project_card}>
                    <img src={'/img/5.8-inch-Screenshot-1.jpg'}/>
                    <img src={'/img/5.8-inch-Screenshot-2.jpg'}/>
                    <img src={'/img/5.8-inch-Screenshot-3.jpg'}/>
                    <img src={'/img/5.8-inch-Screenshot-4.jpg'}/>
                </div>
            </div>
            <div className={styles.viewMoreContainer}>
                <div className={styles.viewMore}>View More</div>
            </div>
            </>
        );
    }
}

export default FeaturedWork;
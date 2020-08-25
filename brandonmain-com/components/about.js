import styles from '../styles/index.module.css';
import AboutCard from './aboutCard';
import { Component } from 'react';

class About extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div id="about" className={styles.about_id}/>
            <div className={styles.about_title}>
            <h1 data-letters="About Me">About Me</h1>
            </div>
            <div className={styles.about}>
                {/* Card 1 */}
                <AboutCard name={"Personal"}/>
                {/* Card 2 */}
                <AboutCard name={"Skills"}/>
                {/* Card 3 */}
                <AboutCard name={"Education"}/>
            
            </div>
            </>
        );
    }
}
  
export default About;
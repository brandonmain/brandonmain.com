import styles from '../styles/index.module.css';
import { Component } from 'react';

class AboutCard extends Component {
   
    constructor(props) {
        super(props);
    }

    render() {
        let card;
        if(this.props.name === "Education") {
            card = 
                <>
                <img src={'/img/unr.png'} />
                <h3>Bachelor of Science in Computer Science and Engineering</h3>
                </>;
        } else if(this.props.name === "Skills") {
            card = 
                <></>;
        } else if(this.props.name === "Personal") {
            card = 
                <></>;
        }
        

        return(
            <div className={styles.card_wrapper}>
                <div className={styles.card_header}>
                    <h2 data-letters={this.props.name}>{this.props.name}</h2>
                </div>
                <div className={styles.about_card}>
                    {card}
                </div>
            </div>
        );
    }
}
  
export default AboutCard;
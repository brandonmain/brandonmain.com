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
                <div className={styles.skills}>
                    <img style={{backgroundColor: 'black'}}  src={'/img/react.png'}/>
                    
                    <img style={{backgroundColor: '#61DAFB'}} src={'/img/nextjs.png'}/>
                    
                    <img style={{backgroundColor: 'black'}} src={'/img/sql.png'}/>
                    
                </div>;
        } else if(this.props.name === "Personal") {
            card = 
                <p>
                    I'm the type of person that loves dipping my feet into the waters of a new challenge. I enjoy learning new technologies and understanding how they interface with existing ones. I also spend time with friends and occasionally document parts of my life on my social media accounts. 
                </p>;
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
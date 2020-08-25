import styles from '../styles/index.module.css';
import Script from 'react-load-script';
import { Component } from 'react';

class Blog extends Component {
   
    constructor(props) {
        super(props);
    }

    componentDidMount() {  }

    render() {
        return(
        <>
            <div id="blog" className={styles.about_id}/>
            <div className={styles.about_title}>
            <h1 data-letters="Blog">Blog</h1>
            </div>
            <div className={styles.blog}>
                <Script
                url="https://medium-widget.pixelpoint.io/widget.js"
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}
                />
                <div id="medium-widget"></div>
            </div>
            </>
        );
    }


    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }
    
    handleScriptError() {
        this.setState({ scriptError: true })
    }
    
    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
        MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@brandonlmain","postsPerLine":2,"limit":4,"picture":"small","fields":["description","author","claps","publishAt"],"ratio":"square"}})
    }


}

export default Blog;
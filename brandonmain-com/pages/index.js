import Home from '../components/home';
import About from '../components/about';
import FeaturedWork from '../components/featuredWork';
import { Component } from 'react';


class Index extends Component {

  render() {
    return (
      <>
      <Home/>
      <About/>
      <FeaturedWork/>
      </>
    )
  }
}

export default Index;
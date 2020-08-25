import Home from '../components/home';
import About from '../components/about';
import FeaturedWork from '../components/featuredWork';
import Blog from '../components/blog';
import { Component } from 'react';


class Index extends Component {

  render() {
    return (
      <>
      <Home/>
      <About/>
      <FeaturedWork/>
      <Blog/>
      </>
    )
  }
}

export default Index;
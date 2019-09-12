import React, { Component } from 'react';
import Page from './page';

class Index extends Component {
  state = {
    articles: []
  }

  render() {
    return (
      <>
        <Page articles={this.state.articles} />
      </>
    )
  }

 

  getArticles = async() => {
    const url = `https://jsonarticles123.herokuapp.com/articles`;
    const response = await fetch(url);
    const data = response.json();
    this.setState({
      articles: data
    })
  } 
}

export default Index;
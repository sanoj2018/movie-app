import React, { Component } from 'react';
import './App.css';
import Movie1 from './components/Movie1';
import MovieSynopsis from './components/MovieSynopsis';
import RelatedMoviesList from './components/RelatedMoviesList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {
  state = { 
    movie: {},
    relatedMovieList: []
   }
   async componentDidMount() {
     //handle the failure case 
     const {data: movie} = await axios.get('http://demo9371423.mockable.io/movie/299534');
     this.setState({movie});
     //if first call successfull make the next one
     let {data: relatedMovieList} = await axios.get('http://demo9371423.mockable.io/movie/299534/related');
     relatedMovieList = relatedMovieList.results.splice(0, 4);
     this.setState({relatedMovieList});
     //right now i will store only 4 movie but we need to have all and ui should have pagination logic

    }
  render() {
    const {title, poster_path: poster, overview} = this.state.movie;

    return (
      <div className="container">
        <Movie1 title={title} poster={poster}/>
        <div className="row"><div className="col-12 col-md-12 col-lg-12 hLine"/></div>
        <MovieSynopsis overview={overview} poster={poster}/>
        <RelatedMoviesList movieList={this.state.relatedMovieList}/>
      </div>
    );
  }
}
 
export default App;

import React, { Component } from 'react';


const baseUrlForPoster = "http://192.168.1.4:3001";

class RelatedMovieList extends Component {
    state = {  }
    shouldComponentUpdate() {
        return true;
    }
    render() { 
        console.log(this.props.movieList);
        return ( 
            <div className="row my-5">
                <h2 className="col-12">Related Videos</h2>
                {this.props.movieList.map((movie, index) => {
                    return (
                        <div className="col-12 col-md-3 col-lg-3 my-5 img-container" key={index}>
                            <img className="col-12 col-md-12 col-lg-12 movie-image" 
                                src={`${baseUrlForPoster}/${movie.poster_path}`}/>
                            <p>{movie.title}</p>
                            <button type="button" className="btn btn-primary mx-2 my-2">Play</button>
                        
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default RelatedMovieList;
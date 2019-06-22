import React, { Component } from 'react';
const baseUrlForPoster = "http://192.168.1.4:3001";

class MovieSynopsis extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <h3 className="col-10 col-md-6 col-lg-6">{this.props.overview}</h3>
                <div>
                    <img className="col-10 col-md-6 col-lg-6 my-2 movie-image-synopsis"
                        src={`${baseUrlForPoster}/${this.props.poster}`}/>
                </div>
            </div>
         );
    }
}

export default MovieSynopsis;
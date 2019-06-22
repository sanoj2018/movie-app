import React, { Component } from 'react';

const baseUrlForPoster = "http://192.168.1.4:3001";
class Movie extends Component {
    state = { 
        isLiked: false
     }
    
    getLikeClass = () => {
        return localStorage.getItem('fav') ? "fa fa-star" : "fa fa-star-o";
    }
    ToggleLike = (poster) => {
        let isLiked = false;
        if (localStorage.getItem('fav')) {
            localStorage.removeItem('fav');
        } else {
            localStorage.setItem('fav', poster);
            isLiked = true;
        }
        this.setState({isLiked});
    }

    render() { 
        const {title, poster} = this.props;
        return (  
            <div className="movie">
                <img className="movie-image" src={`${baseUrlForPoster}/${poster}`}/>
                <div className="movie-details">
                    <div className='like-container'>
                        <h2 className="movie-title">{title}</h2>
                        <i className="fav-icon" onClick={() => {
                        this.ToggleLike(poster);
                            }} className={this.getLikeClass()} aria-hidden="true"/>
                        </div>
                    <div>
                        <button type="button" class="btn btn-primary mx-2">Play</button>
                        <button type="button" class="btn btn-primary mx-2">Watch Later</button>
                        <button type="button" class="btn btn-primary mx-2">Share</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Movie;
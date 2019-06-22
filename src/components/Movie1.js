import React, { Component } from 'react';

const baseUrlForPoster = "http://192.168.1.4:3001";
class Movie1 extends Component {

    getLikeClass = (poster) => {
        return localStorage.getItem('fav') ? "fa fa-star" : "fa fa-star-o";
    }
    ToggleLike = (poster) => {
        //right now its done for only one asset
        if (localStorage.getItem('fav')) {
            localStorage.removeItem('fav');
        } else {
            localStorage.setItem('fav', poster);
        }
        this.forceUpdate();
        }

    render() { 
        const {title, poster} = this.props;
        return (  
            <div className="row">
                <img className="col-10 col-md-3 col-lg-3 my-2 movie-image" src={`${baseUrlForPoster}/${poster}`}/>
                <div className="col-10 col-md-6 col-lg-6 my-5">
                    <div>
                        <h2>{title}</h2>
                        </div>
                    <div>
                        <button type="button" className="btn btn-primary mx-2">Play</button>
                        <button type="button" className="btn btn-primary mx-2">Watch Later</button>
                        <button type="button" className="btn btn-primary mx-2">Share</button>
                        <i  onClick={() => {
                        this.ToggleLike(poster);
                            }} className={this.getLikeClass(poster)} aria-hidden="true"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie1;
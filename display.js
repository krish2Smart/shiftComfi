import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './App.css';

class Search extends Component {
    render() {
        return (
            <div className="Inside-display" >
                <div className="HotelLogo">
                    <img src="./images/c.png" alt="Grand Hotel" />
                </div>
                <div className="HotelNameRatings">
                     <div className="HotelName">
                        Grand Hotel
                     </div>
                     <div className="HotelAddress">
                        Eden Garden, Viman Nagar, Pune,Maharashtra
                     </div>
                     <div className="rating">
                        <StarRatingComponent
                            name={"star rating"}
                            value={4}
                            starCount={5}
                            starColor={"#ffb400"}
                            size={40}
                            emptyStarColor={"FFFFFF"}
                            editing={false}
                        />
                     </div>
                </div>
                <div className="buttons">
                     <button className="available-button">Available, Book Now !</button>
                </div>
            </div>
        );
    }
}

export default Search;

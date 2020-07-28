import React, { Component } from 'react';

class Content extends Component {
    render () {
        return (
            <div className="content">
                <nav className="sidebar">
                    <ul className="side-nav">
                        <li className="side-nav_item side-nav_item--active">
                            <a href="#" className="side-nav_link">
                                <svg className="side-nav_icon">
                                    <use xlinkHref="/images/sprite.svg#icon-home3"></use>
                                </svg>
                                <span>Hotel</span>
                            </a>
                        </li>
                        <li className="side-nav_item">
                            <a href="#" className="side-nav_link">
                                <svg className="side-nav_icon">
                                    <use xlinkHref="/images/sprite.svg#icon-aircraft"></use>
                                </svg>
                                <span>Flight</span>
                            </a>
                        </li>
                        <li className="side-nav_item">
                            <a href="#" className="side-nav_link">
                                <svg className="side-nav_icon">
                                    <use xlinkHref="/images/sprite.svg#icon-key"></use>
                                </svg>
                                <span>Car Rental</span>
                            </a>
                        </li>
                        <li className="side-nav_item">
                            <a href="#" className="side-nav_link">
                                <svg className="side-nav_icon">
                                    <use xlinkHref="/images/sprite.svg#icon-map"></use>
                                </svg>
                                <span>Tours</span>
                            </a>
                        </li>
                    </ul>

                    <div className="legal">
                        &copy; 2020 by Trillo. All Rights Reserved.
                    </div>
                </nav>
                <main className="hotel-view">
                    <div className="gallery">
                        <figure className="gallery-item">
                            <img src="/images/hotel-1.jpg" alt="Photo of Hotel 1" className="gallery-photo"/>
                        </figure>
                        <figure className="gallery-item">
                            <img src="/images/hotel-2.jpg" alt="Photo of Hotel 2" className="gallery-photo"/>                            
                        </figure>
                        <figure className="gallery-item">
                            <img src="/images/hotel-3.jpg" alt="Photo of Hotel 3" className="gallery-photo"/>
                        </figure>
                    </div>
                    <div className="overview">
                        <h1 className="overview-heading">
                            Hotel Las Palmas
                        </h1>
                    
                        <div className="overview-stars">
                                <svg className="overview-icon-star">
                                    <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                                </svg>
                                <svg className="overview-icon-star">
                                    <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                                </svg>
                                <svg className="overview-icon-star">
                                    <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                                </svg>
                                <svg className="overview-icon-star">
                                    <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                                </svg>
                                <svg className="overview-icon-star">
                                    <use xlinkHref="/images/sprite.svg#icon-star-full"></use>
                                </svg>
                        </div>
                        <div className="overview-location">
                                <svg className="overview-icon-location">
                                    <use xlinkHref="/images/sprite.svg#icon-location"></use>
                                </svg>
                                <button className="btn-inline">Albuferia, Portugal</button>
                        </div>

                        <div className="overview-rating">
                            <div className="overview-rating-average">8.6</div>
                            <div className="overview-rating-count">439 votes</div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
export default Content
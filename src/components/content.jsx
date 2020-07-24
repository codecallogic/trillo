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
                    Hotel View
                </main>
            </div>
        )
    }
}
export default Content
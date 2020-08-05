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
                    <div className="detail">
                        <div className="description">
                            <p className="paragraph">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem veritatis, aut laborum delectus laudantium perspiciatis ex, harum dolore non quae explicabo saepe distinctio dolor consequatur atque ipsa voluptas sed magnam!
                            </p>
                            <p className="paragraph">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                            <ul className="list">
                                <li className="list-item">Close to the beach</li>
                                <li className="list-item">Breakfast included</li>
                                <li className="list-item">Free airport shuttle</li>
                                <li className="list-item">Free wi-fi in all rooms</li>
                                <li className="list-item">Air conditionair and heating</li>
                                <li className="list-item">Pets allowed</li>
                                <li className="list-item">We speak all languages</li>
                                <li className="list-item">Perfect for families</li>
                            </ul>
                            <div className="recommend">
                                <p className="recommend-count">
                                    Lucy and 3 other friends recommend this hotel.
                                </p>
                                <div className="recommend-friends">
                                    <img src="/images/user-3.jpg" alt="Friends 1" className="recommend-photo"/>
                                    <img src="/images/user-4.jpg" alt="Friends 2" className="recommend-photo"/>
                                    <img src="/images/user-5.jpg" alt="Friends 3" className="recommend-photo"/>
                                    <img src="/images/user-6.jpg" alt="Friends 4" className="recommend-photo"/>
                                </div>
                            </div>
                        </div>
                        <div className="user-reviews">
                            <figure className="review">
                                <blockquote className="review-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus nostrum pariatur laboriosam, incidunt commodi quam unde error enim laborum ratione soluta natus magni, exercitationem atque, dolorem vitae vero. Accusantium.
                                </blockquote>
                                <figcaption className="review-user">
                                    <img src="/images/user-1.jpg" alt="" className="review-photo"/>
                                    <div className="review-user-box">
                                        <p className="review-user-name">Larry Half</p>
                                        <p className="review-user-date">Aug 3, 2020</p>                                        
                                    </div>
                                    <div className="review-rating">8.5</div>
                                </figcaption>
                            </figure>
                            <figure className="review">
                                <blockquote className="review-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, corporis explicabo?
                                </blockquote>
                                <figcaption className="review-user">
                                    <img src="/images/user-2.jpg" alt="" className="review-photo"/>
                                    <div className="review-user-box">
                                        <p className="review-user-name">Mary Tomas</p>
                                        <p className="review-user-date">Feb 21, 2020</p>                                        
                                    </div>
                                    <div className="review-rating">7.8</div>
                                </figcaption>
                            </figure>
                            <button className="btn-inline">Show all <span>&rarr;</span></button>                            
                        </div>                        
                    </div>
                    <div className="cta">
                            <h2 className="cta-book-now">
                                Good news we have 4 rooms available for your selected dates
                            </h2>
                            <button className="btn">
                                <span className="btn-visible">Book now</span>
                                <span className="btn-invisible">Only 4 rooms left</span>
                            </button>
                    </div>
                </main>
            </div>
        )
    }
}
export default Content
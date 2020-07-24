import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <header className="header">
                <img src={"/images/logo.png"} alt="Logo" className="logo"/>

                <form action="#" className="search">
                    <input type="text" className="search_input" placeholder="Search hotels"/>
                    <button className="search_button">
                        <svg className="search_icon">
                            <use xlinkHref="/images/sprite.svg#icon-search"></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav_icon-box">
                        <svg className="user-nav_icon">
                            <use xlinkHref="/images/sprite.svg#icon-bookmark"></use>
                        </svg>
                        <span className="user-nav_notification">7</span>
                    </div>
                    <div className="user-nav_icon-box">
                        <svg className="user-nav_icon">
                            <use xlinkHref="/images/sprite.svg#icon-chat"></use>
                        </svg>
                        <span className="user-nav_notification">7</span>
                    </div>
                    <div className="user-nav_user">
                        <img src="/images/fabricio.jpg" alt="User Photo" className="user-nav_user-photo"/>
                        <span className="user-nav_user-name">Fabricio</span>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header
import React, {Component} from 'react';
import Logo from "../../assets/images/logo.png";

class Header extends Component {
    handleHomeClick = () => {
        this.props.history.push('/')
    };

    render() {
        return (
            <div className="wrapper">
                <header className="header">
                    <div className="container-fluid">
                        <div className="header_row">
                            <div className="social_list">
                                <ul>
                                    <li><a href="#" className="fa fa-facebook-official" aria-hidden="true"/></li>
                                    <li><a href="#" className="fa fa-tumblr" aria-hidden="true"/></li>
                                    <li><a href="#" className="fa fa-twitter" aria-hidden="true"/></li>
                                    <li><a href="#" className="fa fa-instagram" aria-hidden="true"/></li>
                                    <li><a href="#" className="fa fa-youtube-play" aria-hidden="true"/></li>
                                </ul>
                            </div>
                            <div className="logo">
                                <a href="#">
                                    <img onClick={(e) => this.handleHomeClick()} src={Logo}/>
                                </a>
                            </div>

                            <div className="logged_nav">
                                <div className="log_in">
                                    <a href="#">LOG IN</a>
                                </div>
                                <span>//</span>
                                <div className="log_in">
                                    <a href="#">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default (Header);
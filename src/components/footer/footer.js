import React, {Component} from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {};
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="social_list">
                        <p>Follow Star Wars:</p>
                        <ul>
                            <li><a href="#" className="fa fa-facebook-official" aria-hidden="true"/></li>
                            <li><a href="#" className="fa fa-tumblr" aria-hidden="true"/></li>
                            <li><a href="#" className="fa fa-twitter" aria-hidden="true"/></li>
                            <li><a href="#" className="fa fa-instagram" aria-hidden="true"/></li>
                            <li><a href="#" className="fa fa-youtube-play" aria-hidden="true"/></li>
                        </ul>
                    </div>
                    <p className="copyright">
                        TM & © Lucasfilm Ltd. All Rights Reserved

                    </p>
                    <div className="footer_links">
                        <ul>
                            <li><a target="_blank" href="#">Terms of Use</a></li>
                            <li><a target="_blank" href="#">Legal Notices</a></li>
                            <li><a target="_blank" href="#">Privacy Policy</a></li>
                            <li><a target="_blank" href="#">Children’s Online Privacy Policy</a></li>
                            <li><a target="_blank" href="#">Your California Privacy Rights</a></li>
                            <li><a target="_blank" href="#">Star Wars at shopDisney</a></li>
                            <li><a target="_blank" href="#">Star Wars Helpdesk</a></li>
                            <li><a target="_blank" href="#">Interest-Based Ads</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default connect(
    mapStateToProps,
)(Footer);
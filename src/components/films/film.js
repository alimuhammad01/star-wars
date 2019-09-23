import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {mapStateToProps, mapDispatchToProps} from "../../actions/starwars";
import detailImg from '../../../src/assets/images/detail-img.jpeg';

class Film extends Component {
    state = {filmRecord: [], isLoading: true};

    componentDidMount() {
        if (this.props.location && this.props.location.state) {
            fetch(this.props.location.state.filmUrl)
                .then((filmData) => {
                    return filmData.json();
                }).then((filmData1) => {
                this.setState({
                    filmRecord: filmData1, isLoading: false
                })
            }).catch((err) => {
                console.log("error", err);
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoading ? <div className="content">
                            <section className="browse_dataBank">
                                <div style={{margin: 'auto', textAlign: 'center'}} className="tab_contentCol">
                                    <Loader
                                        type="BallTriangle"
                                        color="#00BFFF"
                                        height={100}
                                        width={100}
                                        // timeout={300000} //3 secs
                                    />
                                </div>
                            </section>
                        </div> :
                        <div className="content">
                            <div className="dataDetail_wrap">
                                <div className="container">
                                    <div className="detail_row">
                                        <div className="img_wrapper">
                                            <div className="detail_img">
                                                <img src={detailImg}/>
                                            </div>
                                        </div>
                                        <div className="detail_content">
                                            <div className="detail_inner">
                                                <div className="row compareTextDiv">
                                                    <h3>{this.state.filmRecord.title && this.state.filmRecord.title}</h3>
                                                    {/*<button onClick={(e)=>this.compareCharacters(this.state.data)}>Compare</button>*/}
                                                </div>
                                                {this.state.filmRecord.opening_crawl && this.state.filmRecord.opening_crawl ?
                                                    <p>{this.state.filmRecord.opening_crawl}</p> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Film);
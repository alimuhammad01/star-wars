import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "../../actions/starwars";
// import {BallBeat} from 'react-pure-loaders';
import Loader from 'react-loader-spinner'

import Spinner from 'react-spinner-material';
import Logo from '../../../src/assets/images/logo.png';
import likeIco from '../../../src/assets/images/like.png';
import dislikeIco from '../../../src/assets/images/dislike1.png';
import bg2 from '../../../src/assets/images/bg-2.png';
import databank from '../../../src/assets/images/data-bank-icon.png';
import databgpattern from '../../../src/assets/images/data-bg-pattern.png';
import dataimg1 from '../../../src/assets/images/data-img1.jpeg';
import dataimg2 from '../../../src/assets/images/data-img2.webp';
import dataimg3 from '../../../src/assets/images/data-img3.webp';
import dataimg4 from '../../../src/assets/images/data-img4.webp';
import dataimg5 from '../../../src/assets/images/data-img5.webp';
import dataimg6 from '../../../src/assets/images/data-img6.webp';
import dataimg7 from '../../../src/assets/images/data-img7.jpeg';
import dataimg8 from '../../../src/assets/images/data-img8.webp';
import dataimg9 from '../../../src/assets/images/data-img9.jpeg';
import dataimg10 from '../../../src/assets/images/data-img10.webp';
import dataimg11 from '../../../src/assets/images/data-img11.webp';
import dataimg12 from '../../../src/assets/images/data-img12.jpeg';
import dataimg13 from '../../../src/assets/images/data-img13.jpeg';
import dataimg14 from '../../../src/assets/images/data-img14.webp';
import dataimg15 from '../../../src/assets/images/data-img15.jpeg';
import dataimg16 from '../../../src/assets/images/data-img16.webp';
import dataimg17 from '../../../src/assets/images/data-img17.webp';
import dataimg18 from '../../../src/assets/images/data-img18.webp';
import detailimg from '../../../src/assets/images/detail-img.jpeg';
import footerbg from '../../../src/assets/images/footer-bg.jpg';
import search_icon from '../../../src/assets/images/search_icon.png';



class Home extends Component {
    state = {
        isLoading: true,
        isLiked: false,
        myLikes: [],
        data: []
    };

    componentDidMount() {
        fetch('https://swapi.co/api/people/')
            .then((results) => {
                return results.json();
            })
            .then((myJson) => {
                let data = myJson;
                if (myJson.results) {
                    myJson.results.map((item) => {
                        item.is_fav = false
                    })
                }
                this.props.setAllCharactersData(myJson);
                this.setState({isLoading: false});
            })
            .catch((err) => {
                console.log("err: ", err)
            })
    }

    toggleLike = (item, index) => {
        // this.setState((preState) => ({isLiked: !preState.isLiked}));
        if (this.props.allCharactersData.results[index].is_fav) {
            this.props.allCharactersData.results[index].is_fav = false;
        } else {
            this.props.allCharactersData.results[index].is_fav = true;
        }
        this.props.setAllCharactersData(this.props.allCharactersData);
        // this.setState({data: updatedData})
    };
    handleClick = (data) => {
        // this.props.dispatch({type: 'SINGLE_CHARACTER_DATA', payload: data});4
        this.props.setSingleCharacterData(data);

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.singleCharacter !== this.props.singleCharacter) {
            this.props.history.push({
                pathname: '/details/' + this.props.singleCharacter.name,
                // search: '?query=abc',
                state: {singleCharacter: this.props.singleCharacter, allCharactersList: this.props.allCharactersData}
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? <div className="content">
                    <section className="browse_dataBank">
                        <div style={{margin: 'auto', textAlign: 'center'}} className="tab_contentCol">
                            <Loader
                                type="BallTriangle"
                                color="#00BFFF"
                                height={100}
                                width={100}
                            />
                        </div>
                    </section>
                </div> : <div className="content">
                    <section className="browse_dataBank">
                        <div className="container">
                            <h2 className="section_title">Browse DataBank //</h2>
                            <div className="data_row">
                                <div className="tabs_List">
                                    <span className="title_tab">Browse</span>
                                    <ul>
                                        <li className="tab_btn active"><span>All</span></li>
                                        <li className="tab_btn"><span>Characters</span></li>
                                        <li className="tab_btn"><span>Creatures</span></li>
                                        <li className="tab_btn"><span>Droids</span></li>
                                        <li className="tab_btn"><span>Locations</span></li>
                                    </ul>
                                </div>
                                <div className="tab_contentCol">
                                    <div className="tab_content">
                                        <div className="data_list">
                                            {this.props.allCharactersData.results !== undefined && this.props.allCharactersData.results.map((character, index) =>
                                                <div className="data_block">
                                                    <a href="#" className="data_link"/>
                                                    <div className="container_img">
                                                        <img onClick={(e) => this.handleClick(character)} src={dataimg8}
                                                             alt="Snow" style={{width: '100%'}}/>
                                                        {/*<div className="top-right">Top Right</div>*/}
                                                        {character.is_fav ?
                                                            <img onClick={(e) => this.toggleLike(character, index)}
                                                                 className="top-right"
                                                                 src={likeIco} alt="Snow"/> :
                                                            <img onClick={(e) => this.toggleLike(character, index)}
                                                                 className="top-right"
                                                                 style={{backgroundColor: 'none'}}
                                                                 src={dislikeIco} alt="is_fav"/>}

                                                    </div>
                                                    <div onClick={(e) => this.handleClick(character)}
                                                         className="data_info">
                                                        <h4>{character.name}</h4>
                                                        <span><img src={databank}/>databank</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg2}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>4-Lom</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg3}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>4d-m1n</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg4}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>79's</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg5}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>8d8</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg6}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>A-Wing Fighter</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg7}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>A-wing trainer (RZ-1T)</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg8}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>A280 Blaster Rifle</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg9}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>A300 blaster rifle</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg10}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>AA-9 Coruscant freighter</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg11}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>AAT Battle Tank</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg12}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Aayla Secura</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg13}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Abafar</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg14}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Abednedo</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg15}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Acklay</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg16}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Adi Gallia</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg17}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Admiral Ackbar</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            {/*<div className="data_block">*/}
                                            {/*    <a href="#" className="data_link"></a>*/}
                                            {/*    <div className="data_img">*/}
                                            {/*        <img src={dataimg18}/>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="data_info">*/}
                                            {/*        <h4>Admiral Coburn</h4>*/}
                                            {/*        <span><img src={databank}/>databank</span>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show_more">
                                <a href="#">Show More</a>
                            </div>
                        </div>
                    </section>
                </div>}
            </div>

        )
    }
}

// start of code change
// const mapStateToProps = (state) => {
//     console.log("mapSTateProps", state);
//     return {allCharactersData: state.allCharactersList};
// };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from "../../actions/starwars";
import {images} from '../../utils/constants'
import Logo from '../../../src/assets/images/logo.png';
import bg2 from '../../../src/assets/images/bg-2.png';
import databank from '../../../src/assets/images/data-bank-icon.png';
import databgpattern from '../../../src/assets/images/data-bg-pattern.png';
import detailImg from '../../../src/assets/images/detail-img.jpeg';
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

// import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class Details extends Component {
    state = {singleCharacter: [], allCharactersList: []};

    componentDidMount() {
        console.log("aaaaaaaaaaaaaaaazzzzzzzz", this.props);
        // if (Object.keys(this.props.singleCharacter).length === 0 && this.props.singleCharacter.constructor === Object) {
        //     // this.props.history.push('/');
        // } else {
        //
        if (this.props.location && this.props.location.state) {
            this.setState({
                singleCharacter: this.props.location.state.singleCharacter,
                allCharactersList: this.filterCharacters(this.props.location.state.allCharactersList)
            }, () => {
                console.log("state set: ", this.state);
            })
        }
    }

    filterCharacters = (data) => {
        return data.results.filter((char) => char.name !== this.props.singleCharacter.name)
    }
    handleCompare = (data) => {
        this.props.setSingleCharacterData(this.props.singleCharacter);
        this.props.history.push({
            pathname: '/compare/' + this.props.singleCharacter.name + '-vs-' + data.name,
            state: {charOne: this.props.singleCharacter, charTwo: data}
        })
    };

    // state: {singleCharacter: this.props.singleCharacter, allCharactersList: this.props.allCharactersData}

    handleClickFilm = (data) => {
        this.props.setSingleMovieData({data});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.singleMovieData !== this.props.singleMovieData) {
            this.props.history.push({
                pathname: '/film',
                state: {filmUrl: this.props.singleMovieData.data}
            })
        }
    }

    render() {
        return (
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
                                        <h3>{this.state.singleCharacter && this.state.singleCharacter.name}</h3>
                                        {/*<button onClick={(e)=>this.compareCharacters(this.state.data)}>Compare</button>*/}
                                        <div className="dropdown">
                                            <button className="dropbtn">Compare</button>
                                            <div className="dropdown-content">
                                                {this.state.allCharactersList.length > 0 &&
                                                this.state.allCharactersList.map((char, index) =>
                                                    <a onClick={(e) => this.handleCompare(char, index)}>{char.name ? char.name : 'no name'}</a>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                    <p>
                                        2-1B droids were medical wonders, programmed to diagnose and treat injuries
                                        and diseases that afflicted millions of species in the galaxy. 2-1B droids
                                        had modular limbs that allowed them to use a range of surgical tools and
                                        other medical instruments based on their patients' needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="detail_categories">
                            <div className="categories_list">
                                <div className="category">
                                    <h5>APPEARANCES</h5>
                                    <ul>
                                        {this.state.singleCharacter && this.state.singleCharacter.films ?
                                            this.state.singleCharacter.films.map((film) =>
                                                <li onClick={(e) => this.handleClickFilm(film)}
                                                    className="category_data"><a href="#">{film}<span
                                                    className="separator">,</span> </a></li>
                                            ) : ''}

                                        {/*<li className="category_data"><a href="#"> Star Wars: Revenge of the*/}
                                        {/*    Sith<span className="separator">,</span> </a></li>*/}
                                        {/*<li className="category_data"><a href="#"> Star Wars: The Empire Strikes*/}
                                        {/*    Back<span className="separator">,</span> </a></li>*/}
                                        {/*<li className="category_data"><a href="#"> Star Wars: The Clone Wars<span*/}
                                        {/*    className="separator">,</span> </a></li>*/}
                                        {/*<li className="category_data"><a href="#"> Star Wars Rebels<span*/}
                                        {/*    className="separator">,</span></a></li>*/}
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>AFFILIATIONS</h5>
                                    <ul>
                                        <li className="category_data"><a href="#"> Rebel Alliance<span
                                            className="separator">,</span> </a></li>
                                        <li className="category_data"><a href="#"> The Resistance<span
                                            className="separator">,</span> </a></li>
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>LOCATIONS</h5>
                                    <ul>
                                        <li className="category_data"><a href="#">Alderaan<span
                                            className="separator">,</span> </a></li>
                                        <li className="category_data"><a href="#">polis Massa<span
                                            className="separator">,</span> </a></li>
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>GENDER</h5>
                                    <ul>
                                        <li className="category_data"><a
                                            href="#">{this.state.singleCharacter && this.state.singleCharacter.gender}<span
                                            className="separator">,</span> </a></li>
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>DIMENSIONS</h5>
                                    <ul>
                                        <li className="category_data"><a href="#">Lorem Ipsum<span
                                            className="separator">,</span> </a></li>
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>SPECIES</h5>
                                    <ul>
                                        {this.state.singleCharacter && this.state.singleCharacter.species ? this.state.singleCharacter.species.map((specie) =>
                                            <li className="category_data"><a href="#">{specie}<span
                                                className="separator">,</span> </a></li>
                                        ) : ''}
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>VEHICLES</h5>
                                    <ul>
                                        {this.state.singleCharacter && this.state.singleCharacter.vehicles ? this.state.singleCharacter.vehicles.map((vehicle) =>
                                            <li className="category_data"><a href="#">{vehicle}<span
                                                className="separator">,</span> </a></li>
                                        ) : ''}

                                        {/*<li className="category_data"><a href="#">Lorem Ipsum<span*/}
                                        {/*    className="separator">,</span> </a></li>*/}
                                    </ul>
                                </div>
                                <div className="category">
                                    <h5>WEAPONS</h5>
                                    <ul>
                                        <li className="category_data"><a href="#">Lorem Ipsum<span
                                            className="separator">,</span> </a></li>
                                        <li className="category_data"><a href="#">Lorem Ipsum<span
                                            className="separator">,</span> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {singleCharacter: state.singleCharacter}
// };

export default connect(mapStateToProps, mapDispatchToProps)(Details);
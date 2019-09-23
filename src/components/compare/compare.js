import React, {Component} from 'react';
import {connect} from 'react-redux';
import Logo from "../../assets/images/logo.png";
import dataimg9 from '../../../src/assets/images/data-img9.jpeg';
import dataimg10 from '../../../src/assets/images/data-img10.webp';

class Compare extends Component {
    state = {charOne: {}, charTwo: {}}

    componentDidMount() {
        console.log("compare mountedddddddddddddddd", this.props);
        if (this.props.location.state) {
            this.setState({
                charOne: this.props.location.state.charOne,
                charTwo: this.props.location.state.charTwo
            }, () => {
                console.log("state has been set", this.state)
            })
        }
    }

    render() {
        return (
            <div className="content">
                <h2 className="section_title">Compare Two Characters</h2>
                <div style={{marginLeft: 225}} className="compare_char">
                    <section className="browse_dataBank_compare">
                        <div className="tab_contentCol">
                            <div className="tab_content">
                                <div className="data_list">
                                    <table className="table table-dark table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <img scope="col" src={dataimg9}/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>{this.state.charOne ? this.state.charOne.name : 'name'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Birth Year</th>
                                            <td>{this.state.charOne ? this.state.charOne.birth_year : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Eye Color</th>
                                            <td>{this.state.charOne ? this.state.charOne.eye_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Hair Color</th>
                                            <td>{this.state.charOne ? this.state.charOne.hair_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Skin Color</th>
                                            <td>{this.state.charOne ? this.state.charOne.skin_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Height</th>
                                            <td>{this.state.charOne ? this.state.charOne.height : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mass</th>
                                            <td>{this.state.charOne ? this.state.charOne.mass : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Home World</th>
                                            <td>{this.state.charOne ? this.state.charOne.homeworld : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Location</th>
                                            <td>{this.state.charOne ? this.state.charOne.location ? this.state.charOne.location : 'not available' : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Movies</th>
                                            <td>{
                                                this.state.charOne ?
                                                    this.state.charOne.films &&
                                                    this.state.charOne.films.length > 0 ?
                                                        this.state.charOne.films.map((film) =>
                                                            <p>{film}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Species</th>
                                            <td>{
                                                this.state.charOne ?
                                                    this.state.charOne.species &&
                                                    this.state.charOne.species.length > 0 ?
                                                        this.state.charOne.species.map((specie) =>
                                                            <p>{specie}</p>) : 'not available' : 'not available'
                                            }</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Star Ships</th>
                                            <td>{
                                                this.state.charOne ?
                                                    this.state.charOne.starships &&
                                                    this.state.charOne.starships.length > 0 ?
                                                        this.state.charOne.starships.map((starship) =>
                                                            <p>{starship}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Vehicles</th>
                                            <td>{
                                                this.state.charOne ?
                                                    this.state.charOne.vehicles &&
                                                    this.state.charOne.vehicles.length > 0 ?
                                                        this.state.charOne.vehicles.map((vehicle) =>
                                                            <p>{vehicle}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-dark table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <img scope="col" src={dataimg10}/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.name : 'name'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Birth Year</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.birth_year : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Eye Color</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.eye_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Hair Color</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.hair_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Skin Color</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.skin_color : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Height</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.height : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Mass</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.mass : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Home World</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.homeworld : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Location</th>
                                            <td>{this.state.charTwo ? this.state.charTwo.location ? this.state.charTwo.location : 'not available' : 'not available'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Movies</th>
                                            <td>{
                                                this.state.charTwo ?
                                                    this.state.charTwo.films &&
                                                    this.state.charTwo.films.length > 0 ?
                                                        this.state.charTwo.films.map((film) =>
                                                            <p>{film}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Species</th>
                                            <td>{
                                                this.state.charTwo ?
                                                    this.state.charTwo.species &&
                                                    this.state.charTwo.species.length > 0 ?
                                                        this.state.charTwo.species.map((specie) =>
                                                            <p>{specie}</p>) : 'not available' : 'not available'
                                            }</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Star Ships</th>
                                            <td>{
                                                this.state.charTwo ?
                                                    this.state.charTwo.starships &&
                                                    this.state.charTwo.starships.length > 0 ?
                                                        this.state.charTwo.starships.map((starship) =>
                                                            <p>{starship}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">Vehicles</th>
                                            <td>{
                                                this.state.charTwo ?
                                                    this.state.charTwo.vehicles &&
                                                    this.state.charTwo.vehicles.length > 0 ?
                                                        this.state.charTwo.vehicles.map((vehicle) =>
                                                            <p>{vehicle}</p>) : 'not available' : 'not available'
                                            }</td>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default connect()(Compare);
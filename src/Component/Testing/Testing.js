import React, { Component } from 'react';
import { logo, annotation, testing, slider1, slider2, sort_icon } from "../../Assets/icons/index";
import { Carousel } from 'react-bootstrap';
class Testing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }

    }
    handleSelect = (selectedIndex, e) => {
        this.setState({ index: selectedIndex })
    };

    render() {
        // const { loader } = this.state
        return (
            <>
                <div className="container-fluid">
                    <nav className="navbar navbar-light guise-navbar">
                        <a className="navbar-brand" href="#">
                            <img src={logo.default} alt="" />
                        </a>
                        <ul>
                            <li>
                                <img src={annotation.default} alt="" />
                                Annotation
                        </li>
                            <li>
                                <img src={testing.default} alt="" />
                                A/B Testing
                        </li>
                        </ul>
                        <div className="right_btn_nav">
                            <button>Back</button>
                            <button className="guise_btn">Annotated Data</button>
                        </div>
                    </nav>
                </div>
                <div className="main_container">
                    <div className="inner-wrap">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="slide_wrap">
                                    <Carousel interval={null} fade className="guise_slider" activeIndex={this.state.index} onSelect={this.handleSelect}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={slider1.default}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={slider2.default}
                                                alt="Second slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={slider2.default}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                    <div className="slide_indicator">Frame {this.state.index}/15</div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="vechile_list">
                                    <h4><span>Object</span> <span>Accuracy<img src={sort_icon.default} /></span></h4>
                                    <ul className="list_check">
                                        <li>
                                            <label htmlFor="car">
                                                <input type="checkbox" id="car" /> Car
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                        <li>
                                            <label htmlFor="car">
                                                <input type="checkbox" id="car" /> Car
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                        <li>
                                            <label htmlFor="car">
                                                <input type="checkbox" id="car" /> Car
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                        <li>
                                            <label htmlFor="car">
                                                <input type="checkbox" id="car" /> Car
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                        <li>
                                            <label htmlFor="car">
                                                <input type="checkbox" id="car" /> Car
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                        <li>
                                            <label htmlFor="truck">
                                                <input type="checkbox" id="truck" /> Trcuk
    </label>
                                            <span className="accuracy">0.89</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}
export default Testing;
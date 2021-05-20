import React, { Component } from 'react';
import { logo, annotation, testing, upload, vid_icon, vid_upload, img_placeholder } from "../../Assets/icons/index";

class Annotation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,

        }
    }

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
                            <button>Reset</button>
                            <button className="guise_btn">Save & Next</button>
                        </div>
                    </nav>
                </div>
                <div className="main_container">
                    <div className="inner-wrap">
                        <div className="row upload_container_fluid">
                            <div className="col-sm-6">
                                <div className="outer_wrap">
                                    <label htmlFor="test">
                                        <div className="upload_wrap">
                                    <div className="upload_img">
                                        <img src={upload.default} alt="" />
                                    </div>
                                    <h4>Upload a New Video</h4>
                                    <input type="file" id="test"/>
                                    <p>Click in the button or drag and drop your file here</p>
                                    <button className="guise_btn btn_lg" >Upload a File</button>
                                    <div className="warning_text">Max. File Size : 100MB</div>
                                </div>
                                    </label>
                                    <div className="doc_process">
                                        <ul>
                                           <li> 
                                                <img src={vid_icon.default}/>
                                                   <div className="progress_bar">
                                                       <div className="legends">
                                                           <span className="filename">lorem Ipsum.mp4</span>
                                                           <span className="completed">84%</span>
                                                       </div>
                                                        <span className="bar_place"><span className="bar" style={{width: '84%'}}></span></span>
                                                   </div> 
                                               <span className="close">&times;</span>
                                            </li> 
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="right_wrap">
                                    <h4 className="upload_head">
                                        <img src={vid_upload.default}/>Upload Model
                                    </h4>
                                    <button className="guise_btn">Upload File</button>
                                    <h4 className="upload_head">
                                        <img src={img_placeholder.default}/>Choose Image Size
                                    </h4>
                                    <select className="form-control">
                                        <option value="129">129</option>
                                        <option value="129">129</option>
                                        <option value="129">129</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}
export default Annotation;
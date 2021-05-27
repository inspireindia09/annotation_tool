import React, { Component } from 'react';
import { logo, annotation, testing, upload, vid_icon, vid_upload, img_placeholder } from "../../Assets/icons/index";

class Annotation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,
            videoFile: null,
            uploaded: false,
            successMsg: '',
            excelFile: null,
            uploadedFile: false,
            imgSize: null,
            uploadedModel: false

        }
    }
    selectImgSize = (e) => {
        if (e.target.value !== '') {
            this.setState({
                imgSize: e.target.value
            })
        } else {
            alert('Please Select Image Size')
        }
    }
    uploadVideo = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0])
            this.setState({
                videoFile: e.target.files[0],
                uploaded: true
            })
        }
    }
    uploadExcelFile = (e) => {
        if (e.target.files[0]) {
            console.log(e.target.files[0])
            this.setState({
                excelFile: e.target.files[0],
                uploadedFile: true
            })
        }
    }
    uploadExcelFileData = () => {
        window.localStorage.setItem("file", this.state.excelFile.name);
        this.setState({
            loader: true
        })
        let formdata = new FormData();
        formdata.append("file", this.state.excelFile, this.state.excelFile.name);
        // formdata.append("fileName", this.state.excelFile.name);
        // formdata.append("img_size", this.state.imgSize);
        // formdata.append("test_video", window.localStorage.getItem('video'));

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://3.7.113.14/upload_model", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result), this.setState({
                loader: false,
                excelFile: null,
                successMsg: 'Uploaded Successfully',
                uploadedModel: true,
                uploaded: true
            }))
            .catch(error => console.log('error', error), this.setState({
                excelFile: null,
                successMsg: 'Something Went Wrong !',
                uploaded: true
            }));
    }
    uploadVideoFile = () => {
        window.localStorage.setItem("video", this.state.videoFile.name);
        this.setState({
            loader: true
        })
        let formdat = new FormData();
        // formdata.append("excelFile", this.state.videoFile, this.state.videoFile.name);
        formdat.append("file", this.state.videoFile, this.state.videoFile.name);

        let requestOption = {
            method: 'POST',
            body: formdat,
            redirect: 'follow'
        };
        fetch("http://3.7.113.14/upload_video", requestOption)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        loader: false,
                        uploaded: false,
                        videoFile: null,
                        successMsg: 'Uploaded Successfully'
                    });
                },
                (error) => {
                    this.setState({
                        uploaded: false,
                        videoFile: null,
                        successMsg: 'Something Went Wrong !'
                    });
                }
            )

    }
    runModel = () => {
        this.setState({
            loader: true
        })
        let formdata = new FormData();
        formdata.append("fileName", window.localStorage.getItem('file'));
        formdata.append("img_size", this.state.imgSize);
        formdata.append("test_video", window.localStorage.getItem('video'));

        let requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };


        fetch("http://3.7.113.14/get_annotations", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result), this.setState({
                loader: false,
                uploadedModel: false,
                imgSize: null
            }))
            this.props.history.push('/testing')
            .catch(error => console.log('error', error), this.setState({
                successMsg: 'Something Went Wrong !',
            }));
    }
    render() {
        // const { loader } = this.state
        return (
            <>
                {this.state.loader &&
                    <div className="loader_wrapper">
                        <div className="loader"></div>
                    </div>}
                <div className="container-fluid">
                    <nav className="navbar navbar-light guise-navbar">
                        <a className="navbar-brand" href="#">
                            <img src={logo.default} alt="" />
                        </a>
                        <ul>
                            <li className="active">
                                <img src={annotation.default} alt="" />
                                Annotation
                            </li>
                            <li>
                                <img src={testing.default} alt="" />
                                A/B Testing
                            </li>
                        </ul>
                        {/* <div className="right_btn_nav">
                            <button>Reset</button>
                            <button className="guise_btn">Save & Next</button>
                        </div> */}
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
                                            <input type="file" id="test" onChange={(e) => this.uploadVideo(e)} accept=".mp4" name="vide_file" />
                                            <p>Click in the button or drag and drop your file here</p>

                                            <div className="warning_text">Max. File Size : 100MB</div>
                                        </div>
                                    </label>
                                    {this.state.uploaded && this.state.videoFile !== null &&
                                        <button className="guise_btn btn_lg" onClick={this.uploadVideoFile}>Upload a File</button>
                                    }
                                    <div className="doc_process">
                                        <ul>
                                            <li>
                                                <img src={vid_icon.default} />
                                                <div className="progress_bar">
                                                    <div className="legends">
                                                        <span className="filename">{this.state.videoFile && this.state.videoFile.name}</span>
                                                        <span className="completed">{this.state.uploaded ? '100%' : '0%'}</span>
                                                    </div>
                                                    <span className="bar_place"><span className="bar" style={this.state.uploaded ? { width: '100%' } : { width: '0%' }}></span></span>
                                                </div>
                                                <span className="close">&times;</span>
                                            </li>
                                            <li>
                                                {!this.state.uploaded &&
                                                <p className="text-success">{this.state.successMsg}</p>}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 pr-0">
                                <div className="right_wrap">
                                    <div className="right_one">
                                        <div>
                                            <h4 className="upload_head">
                                                <img src={vid_upload.default} />Upload Model
                                            </h4>
                                            <label htmlFor="test1">
                                                <input className="custom-file-input" type="file" id="test1" onChange={(e) => this.uploadExcelFile(e)} accept=".pt" name="excelFile" 
                                                selectedFile={this.state.uploadedFile && 'yes'}/>

                                            </label>
                                            {this.state.uploadedModel&&
                                            <p className="text-success">{this.state.successMsg}</p>}
                                            {this.state.uploadedFile ?
                                                <button className="guise_btn uploadExcel_btn" onClick={this.uploadExcelFileData}>Upload</button> : null}
                                        </div>
                                    </div>
                                    <div className="right_two">
                                        <div>
                                            <h4 className="upload_head">
                                                <img src={img_placeholder.default} />Choose Image Size
                                    </h4>
                                            {this.state.excelFile === null ?
                                                <select className="form-control" disabled>
                                                    <option defaultValue={null}>Choose Image Size</option>
                                                    
                                                </select> :
                                                <select className="form-control" onChange={(e) => this.selectImgSize(e)}>
                                                    <option defaultValue={null}>Choose Image Size</option>
                                                    <option defaultValue="128">128</option>
                                                    <option defaultValue="256">256</option>
                                                    <option defaultValue="416">416</option>
                                                    <option defaultValue="512">512</option>
                                                    <option defaultValue="640">640</option>
                                                    <option defaultValue="1280">1280</option>
                                                </select>}
                                        </div>

                                    </div>
                                </div>
                                {this.state.uploadedModel &&
                                <button className="guise_btn uploadExcel_btn text-right" onClick={this.runModel}>Run Model</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )

    }
}
export default Annotation;
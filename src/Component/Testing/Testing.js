import React, { Component } from 'react';
class Testing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loader: false,

        }
    }

    render() {
        const { loader } = this.state
        return (
            <div className="main_container" id="mainContainer" >Testing</div>
        )

    }
}
export default Testing;
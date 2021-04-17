import React, { Component } from "react";
import BiodataService from "../services/BiodataService";

class ViewBiodataComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            biodata: {}
        }
    }
    componentDidMount(){
        BiodataService.getBiodataById(this.state.id).then( res => {
            this.setState({biodata: res.data});
        })
    }
    render(){
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Biodata Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Name : </label>
                            <div> { this.state.biodata.nama }</div>
                        </div>
                        <div className = "row">
                            <label> Alamat: </label>
                            <div> { this.state.biodata.alamat }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default ViewBiodataComponent
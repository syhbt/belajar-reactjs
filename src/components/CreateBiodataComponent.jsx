import React, { Component } from 'react'
import BiodataService from "../services/BiodataService";

class CreateBiodataComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            name: '',
            alamat: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAlamatHandler = this.changeAlamatHandler.bind(this);
        this.saveOrUpdateBiodata = this.saveOrUpdateBiodata.bind(this);
    }

    componentDidMount( ){

        if (thist.state == 'add') {
            return
        }
        else{
            BiodataService.getBiodatabyId(this.state.id).then( (res) => {
                let biodata = res.data;
                this.setState({name: biodata.name,
                    alamat: biodata.alamat
                });
            });
        }
    }
    saceOrUpdateBiodata = (b) => {
        b.PreventDefault();
        let biodata = {name: this.state.name, alamat: this.state.alamat};
        console.log('biodata =>' + JSON.stringify(biodata));

        if (this.state.id == '_add') {
            BiodataService.createBiodata(biodata).then (res =>{
                this.props.history.push('./biodata');
            });
        }
        else {
            BiodataService.updateBiodata(biodata, this.state,id).then (res =>{
                this.props.history.push('./biodata');
            });
        }
    }
    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changeAlamatHandler = (event) => {
        this.setState({alamat: event.target.value});
    }
    cancel(){
        this.props.history.push('./biodata');
    }

    getTitle(){
        if (this.state.id == '_add') {
            return <h3 className="text-center">Add Biodata</h3>           
        }
        else {

            return <h3 className="text-center">Update Biodata</h3>
        }
    }
    render(){
        return(
                <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Alamat: </label>
                                            <input placeholder="Alamat" name="alamat" className="form-control" 
                                                value={this.state.alamat} onChange={this.changeAlamatHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateBiodata}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        )
    }
}

export default CreateBiodataComponent
import React, {Component} from 'react';
import BiodataService from '../services/BiodataService';

class ListBiodataComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            biodatas: []
        }
        this.addBiodata = this.addBiodata.bind(this);
        this.editBiodata = this.editBiodata.bind(this);
        this.deleteBiodata = this.deleteBiodata.bind(this);
    }

    deleteBiodata(id){
        BiodataService.deleteBiodata(id).then(res => {
            this.setState({biodatas: this.state.biodatas.filter(biodata => biodata.id !== id)});
        });
    }
    viewBiodata(id){
        this.props.history.push(`/view-biodata/${id}`);
    }
    editBiodata(id){
        this.props.history.push(`/edit-biodata/${id}`);
    }
    componentDidMount(){
        BiodataService.getBiodata().then((res) => {
            this.setState({biodatas: res.data});
        });
    }
    addBiodata(){
        this.props.history.push('/add-biodata/_add');
    }

    render(){
        return (
            <div>
                 <h2 className="text-center">Biodata List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addBiodata}> Add Biodata</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Address</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.biodatas.map(
                                        biodata => 
                                        <tr key = {biodata.id}>
                                             <td> { biodata.nama} </td>   
                                             <td> {biodata.alamat}</td>
                                             <td>
                                                 <button onClick={ () => this.editBiodata(biodata.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBiodata(biodata.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewBiodata(biodata.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListBiodataComponent
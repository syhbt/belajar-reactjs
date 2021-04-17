import axios from 'axios';

const BIODATA_API_BASE_URL = 'http://127.0.0.1:8000/api/siswa';

class BiodataService {
    getBiodata(){
        return axios.get(BIODATA_API_BASE_URL);
    }
    createBiodata(biodata){
        return axios.post(BIODATA_API_BASE_URL, biodata);
    }
    getBiodataById(biodataId){
        return axios.get(BIODATA_API_BASE_URL + '/' + biodataId);
    }
    updateBiodata(biodata, biodataId){
        return axios.put(BIODATA_API_BASE_URL + '/' + biodataId, biodata);
    }
    deleteBiodata(biodataId){
        return axios.delete(BIODATA_API_BASE_URL + '/' + biodataId)
    }
}

export default new BiodataService()
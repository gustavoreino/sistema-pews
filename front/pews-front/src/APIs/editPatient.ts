import axios from 'axios';
import {PatientData} from '@/components/types/PatientType';
function EditPatient( id: string ) {
    return Promise.resolve(axios.patch<PatientData>('https://localhost:8080/api/pacientes/'))
    .then(response => {
        if(response.status.toString() == '200'){
            return response.data;
        } 
        return response.data;
    })
    .catch(error => {
        throw('error');
    });
}

export default EditPatient;
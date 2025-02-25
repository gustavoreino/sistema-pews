import axios from 'axios';
import {PatientData} from '@/components/types/PatientType';
function EditUser( id: string ) {
    return Promise.resolve(axios.patch<UserData>(`${process.env.API_URL}/users/update`))
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

export default EditUser;
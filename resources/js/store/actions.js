import { toInteger } from 'lodash';
import Vue from 'vue';
import  axios from 'axios';
import { Spinner } from 'element-ui';
import { error } from 'laravel-mix/src/Log';

let loader = null;
function showLoader(text='loading'){
    loader = Vue.prototype.$loading({
        lock:true,
        text:text,
        Spinner: 'el-icon-loading',
        background: 'rgba(255,255,255,0.85)'
    });
}
function hideloader(){
    loader.close();
}

export const getStudents = ({ commit }, payload) =>{

    let url = `/get-students`;
    showLoader('Saving Student');
    axios.post(url, payload)
        .then(res => { 
            commit('setTableData', res.data); 
        });

};
 
export const saveStudent = ({ commit }, payload) => { //payload is a input fields value
    let url = `/save-student`;
    showLoader('Saving Student');
    
    axios.post(url, payload).then(res => { 
        console.log(`Sending POST request to ${url} with payload:`, payload);
        Vue.prototype.$notify({
            title: 'Success',
            message: 'Student Created Successfully!',
            type: 'success',
        });
        // hideloader();
        window.location.href = '/students';
    }).catch(error =>{
        console.error('Error response:', error);
        Vue.prototype.$notify({
            title: 'Error',
            message: 'Failed to save student!',
            type: 'error',
        });
        hideloader();
    });
}
import axios from 'axios'
import qs from 'qs'


export default {
    post({ url, data, successCallback, failCallback }) {
        axios({
            method: 'post',
            url: url,
            data: qs.stringify(data)
        }).then(response => {
            successCallback(response)
        }).catch(error => {
            failCallback(error)
        })
    },
    get({ url, data, successCallback, failCallback }) {
        axios({
            method: 'get',
            url: url,
            data: qs.stringify(data)
        }).then(response => {
            successCallback(response)
        }).catch(error => {
            failCallback(error)
        })
    }
}

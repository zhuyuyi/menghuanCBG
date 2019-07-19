import axios from 'axios';

export const returnIndexPageAPi = (data) => {
    return {
        type: 'GET_API',
        data: data
    }
}

export function apiToProps(dispatch) {
    return new Promise((resolve, reject) => {
        axios({
                method: 'GET',
                url: '192.168.1.61:1234/api/lists',
                // url: 'https://fe.che300.com/easymock/mock/5d2f06cb3add267074f69c24/api/ceshi',
                data: JSON.stringify({
                    page: 1
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then((res) => {
                console.log(res)
                resolve(res.data.data);
                dispatch(returnIndexPageAPi(res.data.data));
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}
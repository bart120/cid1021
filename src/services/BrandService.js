import axios from 'axios';

const URL = 'https://formation.inow.fr/demo/api/v1/brands';

export function getBrands() {
    return axios.get(URL).then(resp => {
        if (resp.status != 200) {
            return Promise.reject('Erreur des données');
        }
        return Promise.resolve(resp.data);
    });
    console.log('fin getBrands');
}

export function getBrandById(id) {
    return axios.get(`${URL}/${id}`).then(resp => {
        return Promise.resolve(resp.data);
    });
}

export function insertBrand(brand) {
    return axios.post(URL, brand).then(resp => {
        return Promise.resolve(resp.data);
    });
}

export function updateBrand(brand) {
    return axios.put(`${URL}/${brand.id}`, brand).then(resp => {
        return Promise.resolve(resp.data);
    });
}

export function deleteBrand(id) {
    return axios.delete(`${URL}/${id}`).then(resp => {
        return Promise.resolve(resp.data);
    });
}




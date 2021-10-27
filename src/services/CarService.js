import axios from 'axios';

const URL = 'https://formation.inow.fr/demo/api/v1/cars';

export function insertCar(car) {
    car.price = +car.price;
    return axios.post(URL, car).then(resp => {
        return Promise.resolve(resp.data);
    });
}

export function getCars() {
    return axios.get(URL).then(resp => {
        return Promise.resolve(resp.data);
    })
}
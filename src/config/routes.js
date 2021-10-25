import HomePage from '../components/pages/HomePage.vue'
import CarsAddPage from '../components/pages/cars/CarsAddPage.vue'
import CarsListPage from '../components/pages/cars/CarsListPage.vue'
import CarsSearchPage from '../components/pages/cars/CarsSearchPage.vue'
import CarsLayout from '../components/pages/cars/CarsLayout.vue'

export default [
    { path: '/', component: HomePage },
    { path: '/cars/add', component: CarsAddPage },
    { path: '/cars/list', component: CarsListPage },
    { path: '/cars/search', component: CarsSearchPage }
    /*{
        path: '/cars', component: CarsLayout,
        children: [
            { path: 'add', component: CarsAddPage },
            { path: 'list', component: CarsListPage },
            { path: 'search', component: CarsSearchPage }
        ]
    },*/
]
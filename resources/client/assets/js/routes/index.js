import Vue from 'vue'
import VueRouter from 'vue-router'



import ChangePassword from '../components/ChangePassword.vue'
import PermissionsIndex from '../components/cruds/Permissions/Index.vue'
import PermissionsCreate from '../components/cruds/Permissions/Create.vue'
import PermissionsShow from '../components/cruds/Permissions/Show.vue'
import PermissionsEdit from '../components/cruds/Permissions/Edit.vue'
import RolesIndex from '../components/cruds/Roles/Index.vue'
import RolesCreate from '../components/cruds/Roles/Create.vue'
import RolesShow from '../components/cruds/Roles/Show.vue'
import RolesEdit from '../components/cruds/Roles/Edit.vue'
import UsersIndex from '../components/cruds/Users/Index.vue'
import UsersCreate from '../components/cruds/Users/Create.vue'
import UsersShow from '../components/cruds/Users/Show.vue'
import UsersEdit from '../components/cruds/Users/Edit.vue'
import CarPacakagesIndex from '../components/cruds/CarPacakages/Index.vue'
import CarPacakagesCreate from '../components/cruds/CarPacakages/Create.vue'
import CarPacakagesShow from '../components/cruds/CarPacakages/Show.vue'
import CarPacakagesEdit from '../components/cruds/CarPacakages/Edit.vue'
import BookingStatusesIndex from '../components/cruds/BookingStatuses/Index.vue'
import BookingStatusesCreate from '../components/cruds/BookingStatuses/Create.vue'
import BookingStatusesShow from '../components/cruds/BookingStatuses/Show.vue'
import BookingStatusesEdit from '../components/cruds/BookingStatuses/Edit.vue'
import BookingsIndex from '../components/cruds/Bookings/Index.vue'
import BookingsCreate from '../components/cruds/Bookings/Create.vue'
import BookingsShow from '../components/cruds/Bookings/Show.vue'
import BookingsEdit from '../components/cruds/Bookings/Edit.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/home', component: BookingsIndex, name: 'home.index' },
    { path: '/change-password', component: ChangePassword, name: 'auth.change_password' },
    { path: '/change-password', component: ChangePassword, name: 'auth.change_password' },
    { path: '/permissions', component: PermissionsIndex, name: 'permissions.index' },
    { path: '/permissions/create', component: PermissionsCreate, name: 'permissions.create' },
    { path: '/permissions/:id', component: PermissionsShow, name: 'permissions.show' },
    { path: '/permissions/:id/edit', component: PermissionsEdit, name: 'permissions.edit' },
    { path: '/roles', component: RolesIndex, name: 'roles.index' },
    { path: '/roles/create', component: RolesCreate, name: 'roles.create' },
    { path: '/roles/:id', component: RolesShow, name: 'roles.show' },
    { path: '/roles/:id/edit', component: RolesEdit, name: 'roles.edit' },
    { path: '/users', component: UsersIndex, name: 'users.index' },
    { path: '/users/create', component: UsersCreate, name: 'users.create' },
    { path: '/users/:id', component: UsersShow, name: 'users.show' },
    { path: '/users/:id/edit', component: UsersEdit, name: 'users.edit' },
    { path: '/car-pacakages', component: CarPacakagesIndex, name: 'car_pacakages.index' },
    { path: '/car-pacakages/create', component: CarPacakagesCreate, name: 'car_pacakages.create' },
    { path: '/car-pacakages/:id', component: CarPacakagesShow, name: 'car_pacakages.show' },
    { path: '/car-pacakages/:id/edit', component: CarPacakagesEdit, name: 'car_pacakages.edit' },
    { path: '/booking-statuses', component: BookingStatusesIndex, name: 'booking_statuses.index' },
    { path: '/booking-statuses/create', component: BookingStatusesCreate, name: 'booking_statuses.create' },
    { path: '/booking-statuses/:id', component: BookingStatusesShow, name: 'booking_statuses.show' },
    { path: '/booking-statuses/:id/edit', component: BookingStatusesEdit, name: 'booking_statuses.edit' },
    { path: '/bookings', component: BookingsIndex, name: 'bookings.index' },
    { path: '/bookings/create', component: BookingsCreate, name: 'bookings.create' },
    { path: '/bookings/:id', component: BookingsShow, name: 'bookings.show' },
    { path: '/bookings/:id/edit', component: BookingsEdit, name: 'bookings.edit' },
]

export default new VueRouter({
    mode: 'history',
    base: '/admin',
    routes
})

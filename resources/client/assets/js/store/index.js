import Vue from 'vue'
import Vuex from 'vuex'
import Alert from './modules/alert'
import ChangePassword from './modules/change_password'
import Rules from './modules/rules'
import PermissionsIndex from './modules/Permissions'
import PermissionsSingle from './modules/Permissions/single'
import RolesIndex from './modules/Roles'
import RolesSingle from './modules/Roles/single'
import UsersIndex from './modules/Users'
import UsersSingle from './modules/Users/single'
import CarPacakagesIndex from './modules/CarPacakages'
import CarPacakagesSingle from './modules/CarPacakages/single'
import BookingStatusesIndex from './modules/BookingStatuses'
import BookingStatusesSingle from './modules/BookingStatuses/single'
import BookingsIndex from './modules/Bookings'
import BookingsSingle from './modules/Bookings/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Alert,
        ChangePassword,
        Rules,
        PermissionsIndex,
        PermissionsSingle,
        RolesIndex,
        RolesSingle,
        UsersIndex,
        UsersSingle,
        CarPacakagesIndex,
        CarPacakagesSingle,
        BookingStatusesIndex,
        BookingStatusesSingle,
        BookingsIndex,
        BookingsSingle,
    },
    strict: debug,
})

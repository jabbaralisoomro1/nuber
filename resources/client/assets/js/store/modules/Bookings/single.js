function initialState() {
    return {
        item: {
            id: null,
            name: null,
            email: null,
            package: null,
            status: null,
        },
        carpacakagesAll: [],
        bookingstatusesAll: [],
        
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    carpacakagesAll: state => state.carpacakagesAll,
    bookingstatusesAll: state => state.bookingstatusesAll,
    
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.package)) {
                params.set('package_id', '')
            } else {
                params.set('package_id', state.item.package.id)
            }
            if (_.isEmpty(state.item.status)) {
                params.set('status_id', '')
            } else {
                params.set('status_id', state.item.status.id)
            }

            axios.post('/api/v1/bookings', params)
                .then(response => {
                    commit('resetState')
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    updateData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();
            params.set('_method', 'PUT')
        params.set('_method', 'PUT')

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.package)) {
                params.set('package_id', '')
            } else {
                params.set('package_id', state.item.package.id)
            }
            if (_.isEmpty(state.item.status)) {
                params.set('status_id', '')
            } else {
                params.set('status_id', state.item.status.id)
            }

            axios.post('/api/v1/bookings/' + state.item.id, params)
                .then(response => {
                    commit('setItem', response.data.data)
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    cancelBooking({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
                let params = new FormData();




        axios.post('/api/v1/cancel-booking/' + state.item.id, params)
            .then(response => {
            commit('setItem', response.data.data)
        resolve()
    })
    .catch(error => {
            let message = error.response.data.message || error.message
            let errors  = error.response.data.errors

            dispatch(
            'Alert/setAlert',
        { message: message, errors: errors, color: 'danger' },
        { root: true })

        reject(error)
    })
    .finally(() => {
            commit('setLoading', false)
    })
    })
    },
    fetchData({ commit, dispatch }, id) {
        axios.get('/api/v1/bookings/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchCarpacakagesAll')
    dispatch('fetchBookingstatusesAll')
    },
    fetchCarpacakagesAll({ commit }) {
        axios.get('/api/v1/car-pacakages')
            .then(response => {
                commit('setCarpacakagesAll', response.data.data)
            })
    },
    fetchBookingstatusesAll({ commit }) {
        axios.get('/api/v1/booking-statuses')
            .then(response => {
                commit('setBookingstatusesAll', response.data.data)
            })
    },
    setName({ commit }, value) {
        commit('setName', value)
    },
    setEmail({ commit }, value) {
        commit('setEmail', value)
    },
    setPackage({ commit }, value) {
        commit('setPackage', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setName(state, value) {
        state.item.name = value
    },
    setEmail(state, value) {
        state.item.email = value
    },
    setPackage(state, value) {
        state.item.package = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setCarpacakagesAll(state, value) {
        state.carpacakagesAll = value
    },
    setBookingstatusesAll(state, value) {
        state.bookingstatusesAll = value
    },
    
    setLoading(state, loading) {
        state.loading = loading
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}

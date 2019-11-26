function initialState() {
    return {
        all: [],
        relationships: {
            'package': 'name',
            'status': 'name',
        },
        query: {},
        loading: false
    }
}

const getters = {
    data: state => {
        let rows = state.all

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order)
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit)
    },
    total:         state => state.all.length,
    loading:       state => state.loading,
    relationships: state => state.relationships
}



const actions = {
    fetchData({ commit, state }) {
        commit('setLoading', true)

        axios.get('/api/v1/bookings')
            .then(response => {
                commit('setAll', response.data.data)
            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    destroyData({ commit, state }, id) {
        axios.delete('/api/v1/bookings/' + id)
            .then(response => {


                    commit('setAll', state.all.filter((item) => {

                    if(item.id == id){

                         item= commit('setAll', response.data.data)
                        }
                    return item.id != id
                }))
            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
    },
    cancelBooking({ commit, dispatch  }, id) {


        axios.post('/api/v1/cancel-booking/' + id)
            .then(response => {

            dispatch('fetchData');
    })
    .catch(error => {
            message = error.response.data.message || error.message
            commit('setError', message)
        console.log(message)
    })



    },

    acceptBooking({ commit, dispatch  }, id) {


        axios.post('/api/v1/accept_booking/' + id)
            .then(response => {

            dispatch('fetchData');
    })
    .catch(error => {
            message = error.response.data.message || error.message
            commit('setError', message)
        console.log(message)
    })



    },
    setQuery({ commit }, value) {
        commit('setQuery', purify(value))
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setAll(state, items) {
        state.all = items
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setQuery(state, query) {
        state.query = query
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

<template>
    <div class="btn-group btn-group-xs">
        <router-link
                v-if="$can(xprops.permission_prefix + 'view')"
                :to="{ name: xprops.route + '.show', params: { id: row.id } }"
                class="btn btn-primary"
        >
            View
        </router-link>

        <router-link
                v-if="$can(xprops.permission_prefix + 'edit')"
                :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
                class="btn btn-warning">
            Edit
        </router-link>

        <button
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="destroyData(row.id)"
                type="button"
                class="btn btn-danger">
            Delete
        </button>

        <button
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="cancelData(row.id)"
                type="button"
                class="btn btn-danger">
           Cancel
        </button>

        <button
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="acceptData(row.id)"
                type="button"
                class="btn btn-primary">
            Approve
        </button>
    </div>
</template>


<script>
    export default {
        props: ['row', 'xprops'],
        data() {
            return {
                // Code...
            }
        },
        created() {
            // Code...
        },
        methods: {
            destroyData(id) {
                this.$swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: '#dd4b39',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (result.value) {
                        this.$store.dispatch(
                            this.xprops.module + '/destroyData',
                            id
                        ).then(result => {
                            this.$eventHub.$emit('delete-success')
                        })
                    }
                })
            },
            cancelData(id) {
                this.$swal({
                    title: 'Are you sure you want to cancel this booking?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: false,
                    confirmButtonText: 'Cancel',
                    confirmButtonColor: '#3972dd',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (result.value) {
                        this.$store.dispatch(
                            this.xprops.module + '/cancelBooking',
                            id
                        ).then(result => {

                        })
                    }
                })
            },
            acceptData(id) {
                this.$swal({
                    title: 'Are you sure you want to Accept this booking?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Accept',
                    confirmButtonColor: '#3972dd',
                    focusCancel: true,
                    reverseButtons: true
                }).then(result => {
                    if (result.value) {
                        this.$store.dispatch(
                            this.xprops.module + '/acceptBooking',
                            id
                        ).then(result => {

                        })
                    }
                })
            }
        }
    }
</script>


<style scoped>

</style>

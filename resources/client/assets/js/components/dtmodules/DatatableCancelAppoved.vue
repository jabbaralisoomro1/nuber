<template>
    <div class="btn-group btn-group-xs">
        <router-link
                v-if="$can(xprops.permission_prefix + 'view')"
                :to="{ name: xprops.route + '.show', params: { id: row.id } }"
                class="btn btn-primary"
        >
            View
        </router-link>

        <button
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="destroyData(row.id)"
                type="button"
                class="btn btn-danger">
            Approved
        </button>
        <button
                v-if="$can(xprops.permission_prefix + 'delete')"
                @click="destroyData(row.id)"
                type="button"
                class="btn btn-danger">
           Cancel
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
            }
        }
    }
</script>


<style scoped>

</style>

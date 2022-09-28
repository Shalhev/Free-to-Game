<template>
    <section class="game-filter">
        <form @input="filter">
            <input type="text" v-model="filterBy" placeholder="Search game...">
        </form>
    </section>
</template>
<script>
export default {
    name: 'game-filter',
    props: { type: Object },
    data() {
        return {
            filterBy: ''
        }
    },
    created() { },
    methods: {
        filter() {
            console.log('this.filterBy: ', this.filterBy)
            const filter = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit("filtered", filter)
        }
    },
    computed: {},
    unmounted() { },
    components: {}
}
</script>
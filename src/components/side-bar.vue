<template>
    <section class="side-bar">
        <div class="title">BROWSE BY GENRE</div>
        <p @click="$emit('filterByGenre', '')">All</p>
        <div v-for="genre in genres">
            <p @click="$emit('filterByGenre', genre)">{{genre}}</p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'side-bar',
    props: { genres: Array },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {}
}
</script>
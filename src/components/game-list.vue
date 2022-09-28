<template>
    <section class="game-list" v-if="games">
        <!-- <pre>{{games}}</pre> -->
        <gamePreview v-for="game in games" :game="game" />
    </section>
    <section v-else>
        <h2>Loading...</h2>
    </section>
</template>
<script>
import gamePreview from './game-preview.vue';
export default {
    name: 'game-list',
    props: { games: Object },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        gamePreview,
    }
}
</script>
<template>
    <section class="game-list" v-if="games">
        <!-- <pre>{{games}}</pre> -->
        <gamePreview v-for="game in games" :game="game"/>
    </section>
    <section v-else>
        <h2>Loading...</h2>

    </section>
</template>
<script>
import { gamesService } from '../services/game.service';
import gamePreview from './game-preview.vue';
export default {
    name: 'game-list',
    props: { type: Object },
    data() {
        return {
            games: null,
        }
    },
    async created() {
        this.games = await gamesService.query()
    },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        gamePreview,
    }
}
</script>
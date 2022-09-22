<template>
    <section class="game-details" v-if="game">
        <img :src=game.thumbnail />
        {{game.title}}
        {{game.short_description}}
        {{game.genre}}
        {{game.publisher}}
        <a :href="game.game_url">{{game.game_url}}</a>
    </section>
    <section class="not-found" v-else>
        404 Not Found
    </section>
</template>
<script>
import { gamesService } from '../services/game.service';
export default {
    name: 'game-details',
    props: { type: Object },
    data() {
        return {
            game: null,
        }
    },
    created() {
        const id = this.$route.params.gameId
        gamesService.get(id).then(game => this.game = game)
    },
    methods: {},
    computed: {},
    unmounted() { },
    components: {}
}
</script>
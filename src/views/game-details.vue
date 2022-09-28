<template>
    <section class="game-details" v-if="game">
        <img :src=game.thumbnail /> 
        <div class="game-info">
            <h2>{{game.title}}</h2>
            <p>Description: {{game.short_description}}</p>
            <p>Genre: {{game.genre}}</p>
            <p>Publisher: {{game.publisher}}</p>
            <a :href="game.game_url">{{game.game_url}}</a>
        </div>
    </section>
    <section class="not-found" v-else>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
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
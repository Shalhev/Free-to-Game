<template>
    <section class="game-list" v-if="games">
        <gamePreview v-if="games" v-for="game in games" :game="game" />
        <section v-if="games.length === 0">
            0 results match your search.
        </section>
    </section>
    <section v-else>
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
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
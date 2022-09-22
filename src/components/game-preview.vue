<template>
    <section class="game-preview" v-if="game" @click="openDetails">
        <img :src=game.thumbnail  />
    </section>
</template>
<script>
export default {
    name: 'game-preview',
    props: { game: Object },
    data() {
        return {}
    },
    created() {
    },
    methods: {
        openDetails(){
            this.$router.push('/game/' + this.game.id)
        }
    },
    computed: {},
    unmounted() { },
    components: {}
}
</script>
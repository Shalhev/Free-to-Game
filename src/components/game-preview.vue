<template>
    <section class="game-preview" v-if="game" >
        <img :src=game.thumbnail  @click="openDetails"/>
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
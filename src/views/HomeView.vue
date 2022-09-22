<template>
  <section>
    <h1>Games list</h1>
    <gameList />
  </section>
</template>
<script>
import gameList from '../components/game-list.vue';
export default {
  name: 'Home-View',
  props: { type: Object },
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
    gameList,
  }
}
</script>
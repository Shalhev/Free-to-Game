<template>
  <section class="home-view">
    <game-filter @filtered="setFilter" />
    <gameList :games="gamesToShow" />
  </section>
</template>
<script>
import { gamesService } from '../services/game.service';
import gameList from '../components/game-list.vue';
import gameFilter from '../components/game-filter.vue'
export default {
  name: 'Home-View',
  props: { type: Object },
  data() {
    return {
      games: null,
      filterBy: '',
    }
  },
  async created() {
    this.games = await gamesService.query()
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    }
  },
  computed: {
    gamesToShow() {
      if (!this.filterBy) return this.games
      const regex = new RegExp(this.filterBy, "i");
      var games = this.games
      return games.filter((game) => regex.test(game.title))
    }
  },
  unmounted() { },
  components: {
    gameList,
    gameFilter,
  }
}
</script>
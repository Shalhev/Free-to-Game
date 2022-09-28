<template>
  <section class="home-view">
    <game-filter @filtered="setFilter" />
    <main class="main-content">
      <sideBar :genres=genres @filterByGenre="filterByGenre" />
      <gameList :games="gamesToShow" />
    </main>
  </section>
</template>
<script>
import { gamesService } from '../services/game.service';
import gameList from '../components/game-list.vue';
import gameFilter from '../components/game-filter.vue'
import sideBar from '../components/side-bar.vue';
export default {
  name: 'Home-View',
  props: { type: Object },
  data() {
    return {
      games: null,
      filterBy: { txt: '', genre: '' },
      genres: []
    }
  },
  async created() {
    this.games = await gamesService.query()
    for (const { genre } of this.games) {
      if (!this.genres.includes(genre)) this.genres.push(genre)
    }
  },
  methods: {
    setFilter(txt) {
      this.filterBy.txt = txt;
    },
    filterByGenre(genre) {
      this.filterBy.genre = genre
    }
  },
  computed: {
    gamesToShow() {
      const { txt, genre } = this.filterBy
      if (!this.filterBy) return this.games
      const regex = new RegExp(txt, "i");
      var games = this.games
      if (genre) games = games.filter(game => game.genre === genre)
      if (txt) games = games.filter((game) => regex.test(game.title))
      return games
    }
  },
  unmounted() { },
  components: {
    gameList,
    gameFilter,
    sideBar
  }
}
</script>
<template>
    <div class="categories_list">
        <div class="category_card" v-for="category in categories" v-if="!isCatsLoading" :key="category.id">
            <h1>{{category.title}}</h1>
            <img :src="setImage(category.image)" :alt="category.image">
            <app-button @click="$router.push(`/categories/edit/${category.id}`)">Редактировать категорию</app-button>
        </div>
        <h1 v-else="isCatsLoading">Идёт загрузка...</h1>
    </div>
    <h1 v-if="dataLoadingError">Ошибка загрузки данных</h1>
</template>

<style>

.categories_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.category_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 3px solid dodgerblue;
    padding: 25px;
    width: 300px;
    height: 500px
}

.category_card img {
    height: 250px;
    width: 250px;
}

.category_card h1 {
    text-align: center;
    font-size: 14pt;
}

</style>

<script>
import CategoryService from "../APIServices/CategoryService";
import { RouterLink } from 'vue-router';
export default {

  components: {
      RouterLink,
  },

  data() {
    return {
      categories: [],
      isCatsLoading: true,
      dataLoadingError: false
    }
  },

  methods: {
    async getCats() {
      try {
        const response = await CategoryService.getAll()
        this.categories = response.data
        this.isCatsLoading = false
      } catch {
        this.dataLoadingError = true
      }
    },

    setImage(src) {
      return `http://localhost:8000/${src}`
    }
  },
  mounted() {
    this.getCats()
  }
}
</script>

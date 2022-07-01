<template>
  <div class="categories">
    <h1>Создать новую категорию</h1>
    <CategoryCreate></CategoryCreate>
    <h1>Созданные категории</h1>
    <CategoriesList></CategoriesList>
  </div>
</template>

<style>
.categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

</style>

<script>
import CategoryCreate from "../components/CategoryCreate.vue";
import CategoriesList from '../components/CategoriesList.vue'

export default {
  components: {
    CategoryCreate,
    CategoriesList
  },

}
</script>

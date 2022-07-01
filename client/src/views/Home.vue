<script>
import CategoryCreate from "../components/CategoryCreate.vue";
import DishCreate from "../components/DishCreate.vue";

export default {
  components: {
    CategoryCreate,
    DishCreate
  }
}
</script>

<template>
<div class="home_content">
  <h1>Создать категорию</h1>
  <CategoryCreate></CategoryCreate>
  <h1>Создать блюдо</h1>
  <DishCreate></DishCreate>
</div>
</template>

<style>
.home_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}
</style>

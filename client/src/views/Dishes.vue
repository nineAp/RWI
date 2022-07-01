<template>
  <div class="dishes">
    <h1>Создать новое блюдо</h1>
    <DishCreate></DishCreate>
    <h1>Созданные блюда</h1>
    <DishList></DishList>
  </div>
</template>

<style>
.dishes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

</style>

<script>
import DishCreate from "../components/DishCreate.vue";
import DishList from '../components/DishList.vue'

export default {
  components: {
    DishCreate,
    DishList
  },

}
</script>

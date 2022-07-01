<template>
    <div class="categories_create_form">
      <app-input type="text" placeholder="Название" v-model="title"></app-input>
      <app-input type="text" placeholder="Описание" v-model="description"></app-input>
      <app-input type="number" placeholder="Цена" v-model="price"></app-input>
      <app-input type="text" placeholder="Вес" v-model="weigth"></app-input>
      <app-dropdown v-model="categoryId" :options="categories"></app-dropdown>
      <h2>Изображение</h2>
      <app-dad ref="file" v-model="image"></app-dad>
      <app-button @click="post">Создать</app-button>
    </div>
</template>

<style>

.categories_create_form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 25px;
  border: 3px solid dodgerblue;
  border-radius: 25px;
  width: 90%;
}
</style>

<script>
import CategoryService from '../APIServices/CategoryService'
import DishService from '../APIServices/DishService'
export default {
  data() {
    return {
      title: '',
      description: '',
      price: 0,
      weigth: '',
      image: '',
      categoryId: '',
      categories: []
    }
  },
  methods: {
    async post() {
      if(this.title !== '' && this.description !== '' && this.weigth !== '' && this.price !== '') {
        await DishService.create(this.title, this.description, this.image, this.weigth, Number(this.price), this.categoryId).then(() => {
          alert('Блюдо успешно создано')
        }).catch(() => {
          alert('Произошла ошибка')
        })
      } else {
        alert('Заполните все поля')
      }
    },

    async getCategories() {
      const response = await CategoryService.getAll()
      response.data.map((category) => {
        this.categories.push({
          name: category.title,
          value: category.id
        })
      })
    },
  },
  mounted() {
    this.getCategories()
  }
}
</script>

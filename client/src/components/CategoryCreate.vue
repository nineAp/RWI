<template>
    <div class="categories_create_form">
      <app-input type="text" placeholder="Название" v-model="title"></app-input>
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
export default {
  data() {
    return {
      title: '',
      image: '',

    }
  },
  methods: {
    async post() {
      if(this.title !== '') {
        await CategoryService.create(this.title, this.image).then(() => {
          alert('Категория успешно создана')
        }).catch(() => {
          alert('Произошла ошибка')
        })
      } else {
        alert('Название - обязательное поле')
      }
    }
  }
}
</script>

<template>
    <div class="dish_edit_content" v-if="!dataLoadError && !loading">
        <h1 v-if="loading">Загрузка данных...</h1>
        <h2>Название</h2>
        <app-input v-model="title" placeholder="Название"></app-input>
        <app-input v-model="description" placeholder="Описание"></app-input>
        <app-input type="number" v-model="price" placeholder="Цена"></app-input>
        <app-input v-model="weight" placeholder="Вес"></app-input>
        <app-dropdown v-model="categoryId" :options="categories"></app-dropdown>
        <h2>Изображение</h2>
        <img :src="imageSrc" :alt="imageSrc" class="source_image">
        <h2>Изменить изображение</h2>
        <app-dad v-model="imagePut"></app-dad>
        <app-button @click="changeDish">Изменить</app-button>
        <app-button @click="showDialog">Удалить</app-button>
        <app-modal v-model:show="modalShow">
                <h1>Вы уверены что хотите удалить данную категорию?</h1>
                <app-button @click="deleteDish">Удалить</app-button>
        </app-modal>
    </div>
    <h1 v-else="dataLoadError">Ошибка загрузки данных</h1>

</template>

<style>

.dish_edit_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

.source_image {
    height: 250px;
    width: 250px;
}

</style>

<script>
import DishService from '../APIServices/DishService'
import CategoryService from '../APIServices/CategoryService'

export default {
    data() {
        return {
            dishId: this.$route.params.id,
            title: '',
            description: '',
            price: 0,
            weight: '',
            categoryId: '',
            categories: [],
            imageSrc: '',
            imagePut: '',
            dish: {},
            dataLoadError: false,
            loading: true,
            modalShow: false
        }
    },
    methods: {
        async getDishById() {
            try {
                const response = await DishService.getById(this.dishId).then()
                this.dish = response.data
                this.setImage()
                this.title = this.dish.title
                this.description = this.dish.description
                this.price = this.dish.price
                this.weight = this.dish.weight
                this.categoryId = this.dish.categoryId
                this.loading = false
            } catch {
                this.dataLoadError = true
            }
        },
        async changeDish() {
            await DishService.put(this.title, this.description, this.imagePut, this.weight, this.price, this.categoryId, this.dishId).then(() => {
                alert('Успешно изменено')
                this.getDishById(this.dishId)
            }).catch(() => {
                alert('Произошла ошибка')
            })
        },
        async deleteDish() {
            await DishService.delete(this.dishId).then(() => {
                alert('Успешно удалено')
                this.modalShow = false
                this.$router.push('/dishes')
            }).catch(() => {
                alert('Произошла ошибка')
            })
        },
        setImage() {
            this.imageSrc = `http://localhost:8000/${this.dish.image}`
        },
        showDialog() {
            this.modalShow = true
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
        this.getDishById()
        this.getCategories()
    }
}
</script>

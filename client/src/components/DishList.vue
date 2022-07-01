<template>
<app-dropdown v-model="selectedCat" :options="categories"></app-dropdown>
    <div class="dish_list">
        <div class="dish_card" v-for="dish in dishes" v-if="!loading" :key="dish.id">
            <h1>{{dish.title}}</h1>
            <img :src="setImage(dish.image)" :alt="setImage(dish.image)">
            <app-button @click="$router.push(`/dishes/edit/${dish.id}`)">Редактировать блюдо</app-button>
        </div>
        <h1 v-else="loading">Загрузка....</h1>
    </div>
    <h1 v-if="dataLoadingError">Ошибка загрузки данных</h1>
</template>

<script>
import DishService from '../APIServices/DishService'
import CategoryService from '../APIServices/CategoryService'
export default {
    data() {
        return {
            dishes: [],
            loading: true,
            dataLoadingError: false,
            categories: [],
            selectedCat: '',
        }
    },
    methods: {
        async getDishes() {
            try {
                const response = await DishService.getAll()
                this.dishes = response.data
                this.loading = false
                console.log(this.dishes[0].image)
            } catch {
                this.dataLoadingError = true
            }
        },
        setImage(image) {
            return `http://localhost:8000/${image}`
        },
        async getCats() {
            const response = await CategoryService.getAll()
            response.data.map((category) => {
                this.categories.push({
                    name: category.title,
                    value: category.id
                })
            })
        },
        async getSelectedDish(selectedCat) {
            try {
                const response = await DishService.getByCategoryId(selectedCat)
                return response.data
            } catch {
                alert('Ошибка')
            }
        }
    },
    mounted() {
        this.getDishes()
        this.getCats()
    },
    watch: {
        async selectedCat(newValue) {
            this.dishes = (await this.getSelectedDish(newValue))
        }
    }
}
</script>

<style>
.dish_list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.dish_card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 3px solid dodgerblue;
    padding: 25px;
    width: 300px;
    height: 500px
}

.dish_card img {
    height: 250px;
    width: 250px;
}

.dish_card h1 {
    text-align: center;
    font-size: 14pt;
}

</style>
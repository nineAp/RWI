<template>
    <div class="category_edit_content" v-if="!dataLoadError && !loading">
        <h1 v-if="loading">Загрузка данных...</h1>
        <h2>Название</h2>
        <app-input v-model="title"></app-input>
        <h2>Изображение</h2>
        <img :src="imageSrc" :alt="imageSrc" class="source_image">
        <h2>Изменить изображение</h2>
        <app-dad v-model="imagePut"></app-dad>
        <app-button @click="changeCat">Изменить</app-button>
        <app-button @click="showDialog">Удалить</app-button>
        <app-modal v-model:show="modalShow">
                <h1>Вы уверены что хотите удалить данную категорию?</h1>
                <app-button @click="deleteCat">Удалить</app-button>
        </app-modal>
    </div>
    <h1 v-else="dataLoadError">Ошибка загрузки данных</h1>

</template>

<style>

.category_edit_content {
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
import CategoryService from '../APIServices/CategoryService'

export default {
    data() {
        return {
            catId: this.$route.params.id,
            title: '',
            imageSrc: '',
            imagePut: '',
            category: {},
            dataLoadError: false,
            loading: true,
            modalShow: false
        }
    },
    methods: {
        async getCatById() {
            try {
                const response = await CategoryService.getById(this.catId)
                this.category = response.data
                this.setImage()
                this.title = this.category.title
                this.loading = false
            } catch {
                this.dataLoadError = true
            }
        },
        async changeCat() {
            if(this.title !== this.category.title || this.imagePut.name !== this.category.image) {
                await CategoryService.put(this.title, this.imagePut, this.catId).then(() => {
                    alert('Успешно изменено')
                    this.getCatById(this.catId)
                }).catch(() => {
                    alert('Произошла ошибка')
                })
            } else {
                alert('Измените хотя бы одно поле')
            }
        },
        async deleteCat() {
            await CategoryService.delete(this.catId).then(() => {
                alert('Успешно удалено')
                this.modalShow = false
                this.$router.push('/categories')
            }).catch(() => {
                alert('Произошла ошибка')
            })
        },
        setImage() {
            this.imageSrc = `http://localhost:8000/${this.category.image}`
        },
        showDialog() {
            this.modalShow = true
        }
    },
    mounted() {
        this.getCatById()
    }
}
</script>

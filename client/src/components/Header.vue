<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="header">
    <div class="content">
        <div class="header_content">
            <h1 class="logo">Restaurant Web Interface</h1>
            <RouterLink to="/" class="header_link"><app-button>Главная</app-button></RouterLink>
            <RouterLink to="/categories" class="header_link"><app-button>Категории</app-button></RouterLink>
            <RouterLink to="/dishes" class="header_link"><app-button>Блюда</app-button></RouterLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {
        RouterLink,
    }
}
</script>

<style>
.header {
    background-color: white;
    border-bottom: 3px solid black;
}

.header_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    gap: 25px;
    padding-left: 15px;
    padding-right: 15px;
}

.header_link {
    width: 100px;
    text-decoration-line: none;
    color: white;
}

.logo {
    font-weight: 800;
    color: black;
    text-shadow: 0px 0px 20px dodgerblue;
}



@media screen and (max-width: 1000px) {
    .header_content {
        flex-direction: column;
        height: auto;
        padding: 15px;
    }

    .logo {
        font-size: 18pt;
    }
}
</style>
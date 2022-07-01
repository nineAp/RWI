<template>
<div class="footer">
    <div class="content">
        <div class="footer_content">
            <h1 class="logo_footer">Restaurant Web Interface</h1>
            <RouterLink to="/" class="footer_link"><app-button>Главная</app-button></RouterLink>
            <RouterLink to="/categories" class="footer_link"><app-button>Категории</app-button></RouterLink>
            <RouterLink to="/dishes" class="footer_link"><app-button>Блюда</app-button></RouterLink>
        </div>
    </div>
</div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink,
    }
}
</script>

<style>
.footer {
    margin-top: 100px;
    background-color: dodgerblue;
    border-bottom: 3px solid black;
}

.footer_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    gap: 25px;
    padding-left: 15px;
    padding-right: 15px;
}

.footer_link {
    width: 150px;
    text-decoration-line: none;
    color: white;
}

.logo_footer {
    font-weight: 800;
    color: black;
    text-shadow: 0px 0px 20px white;
}



@media screen and (max-width: 1000px) {
    .footer_content {
        flex-direction: column;
        height: auto;
        padding: 15px;
    }

    .logo_footer {
        font-size: 18pt;
    }
}
</style>
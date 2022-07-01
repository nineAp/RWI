<template>
    <button class="app_button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'app-button',
}
</script>

<style>
.app_button {
    height: 50px;
    width: 90%;
    border: 3px solid black;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: 400;
    color: black;
    font-size: 14pt;
}

.app_button:hover {
    background-color: dodgerblue;
    transition: all .3s ease-in-out;
    color: black;
}
</style>
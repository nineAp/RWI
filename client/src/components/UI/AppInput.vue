<template>
    <input type="text" name="" id="" class="app_input" ref="appInput" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'app-input',
    props: {
        modelValue: String
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.app_input {
    height: 50px;
    width: 90%;
    border: 3px solid black;
    transition: all .3s ease-in-out;
    font-weight: 600;
    font-size: 14pt;
    padding: 15px;
    color: black;
    text-align: center;
}

.app_input:focus {
    border: 3px solid dodgerblue;
    transition: all .3s ease-in-out;
    color: black;
}
</style>
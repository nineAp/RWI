<template>
<select name="" id="" v-model="modelValue" @change="changeOption" class="app_select">
    <option disabled class="app_option">Выберите из списка</option>
    <option class="app_option" v-for="option in options"
     :key="option.value"
     :value="option.value"
     >{{ option.name }}</option>
</select>
</template>


<script>
export default {
    name: 'app-dropdown',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.app_select {
    width: 90%;
    height: 100px;
    padding: 15px;
    font-size: 18pt;
}


.app_option:disabled {
    background-color: white;
    color: black;
    cursor: pointer;
}
.app_option {
    background-color: dodgerblue;
    color: white;
    cursor: pointer;
}
</style>

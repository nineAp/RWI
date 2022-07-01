<template>
    <div class="dialog" v-if="show" @click="hideModal">
        <div class="dialog_content" @click.stop>
            <slot></slot>
            <app-button @click="hideModal">Закрыть</app-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-modal',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hideModal(){
            this.$emit('update:show', false)
        }
    }
}
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    display: flex;
}

.dialog_content {
    margin: auto;
    background-color: white;
    border-radius: 25px;
    min-height: 50px;
    min-width: 400px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}
</style>
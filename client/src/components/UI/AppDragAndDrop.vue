<template>
    <label for="file_input_dad"
     :class="{app_dad_drag: dragenter, app_dad: notDraged}"
       @dragenter="onDragEnter"
        @dragleave="onDragLeave">
        <div class="file_loader_div">
            <input type="file" name="" id="file_input_dad"
             @change="onFileChose"
            ref="dd"
             @input="updateInput"
            :file="modelValue">
        </div>

        <h5 style="color: black;">Перетащите или выберите файл</h5>
    </label>
    <img src="http://flxtable.com/wp-content/plugins/pl-platform/engine/ui/images/image-preview.png" alt="Here Will Be File Preview" ref="image" height="500px" width="500px" class="img_preview">
</template>

<script>
export default {
    data() {
        return {
            dragenter: false,
            notDraged: true,
        }
    },
    name: 'app-dad',
    props: {
        modelValue: Object,
    },
    methods: {
        onDragEnter() {
            this.dragenter = true
            this.notDraged = false
        },
        onDragLeave(){
            this.dragenter = false
            this.notDraged = true
        },


        onFileChose() {
            const selectedFile = this.$refs.dd.files[0]
            const reader = new FileReader()
            const img = this.$refs.image
            
            reader.onload = function(event) {
                img.src = event.target.result
            }

            reader.readAsDataURL(selectedFile)
        },

        updateInput(event) {
            this.$emit('update:modelValue', event.target.files[0])
        }
    }
}
</script>
<style>
.app_dad {
    height: 300px;
    width: 90%;
    border: 3px solid black;
    color: black;
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
    transition: all .3s ease-in-out;
    font-weight: 600;
    font-size: 18pt;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.app_dad h5 {
    position: relative;
    bottom: 50%;
    text-align: center;
}

.app_dad_drag h5 {
    position: relative;
    bottom: 50%;
    text-align: center;
}

.file_loader_div {
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: 25%;
    left: 1%;
}

.app_dad_drag {
    background-color: dodgerblue;
    height: 300px;
    width: 90%;
    font-size: 18pt;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.img_preview {
    height: 500px;
    width: 500px;
    border: 3px solid dodgerblue;
    border-radius: 25px;
}

@media screen and (max-width: 1000px) {
    .img_preview {
        width: 250px;
        height: 250px;
    }
}

</style>
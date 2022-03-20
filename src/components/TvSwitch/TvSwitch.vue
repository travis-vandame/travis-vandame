<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
    id: string
    disabled: boolean
    ["default-state"]: boolean
    ["label-enabled"]: string
    ["label-disabled"]: string
}

const props = withDefaults(defineProps<Props>(),{
    id: 'default',
    disabled: false,
    ["default-state"]: false,
    ["label-enabled"]: 'On',
    ["label-disabled"]: 'Off'
})

const checkedValue = ''
const currentState = ref(props['default-state'])

watch(props['default-state'], async (newState, oldState) => {
    currentState.value = props['default-state']
}
</script>

<template>
    <label for="toggle_checkbox" class="toggle__checkbox">
        <span v-if="checkedValue" class="switch__label">On</span>
        <span v-if="!checkedValue" class="switch__label">Off</span>

        <input
            v-model="checkedValue"
            type="checkbox"
            id="toggle_checkbox">
        
        <span class="toggle__switch"></span>
    </label>
</template>

<style scoped>
.toggle__checkbox {
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
}

.toggle__checkbox input[type="checkbox"] {
    opacity: 0; 
    position: absolute;
    width: 1px;
    height: 1px;
}

.toggle__checkbox .toggle__switch {
    display: inline-block;
    height: 12px;
    border-radius: 6px;
    width: 40px;
    background: #BFCBD9;
    box-shadow: inset 0 0 1px black;
    position: relative;
    margin-left: 10px;
    transition: all .25s;
}

.toggle__checkbox .toggle__switch::after,
.toggle__checkbox .toggle__switch::before {
    content: "";
    position: absolute;
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    left: 0;
    top: -3px;
    transform: translateX(0);
    transition: all .25s cubic-bezier(.5, -.6, .5, 1.6);
}

.toggle__checkbox .toggle__switch::after {
    background: #4D4D4D;
    box-shadow: 0 0 1px #666;
}

.toggle__checkbox .toggle__switch::before {
    background: #4D4D4D;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
    opacity: 0;
}

.active .toggle__switch {
    background: #adedcb;
    box-shadow: inset 0 0 1px #adedcb;
}

.active .toggle__switch::after,
.active .toggle__switch::before {
    transform: translateX(40px - 18px);
}

.active .toggle__switch::after {
    left: 23px;
    background: #53B883;
    box-shadow: 0 0 1px #53B883;
}
</style>

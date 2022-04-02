<script setup lang="ts">
const props = withDefaults(defineProps<{
  id?: string
  isActive?: boolean
  disabled?: boolean
  defaultState?: boolean
  labelTextEnabled: string
  labelTextDisabled: string
}>(), {
  id: 'default',
  disabled: false,
  isActive: false,
  showLabel: true,
  defaultState: false,
  labelTextDisabled: 'Off',
  labelTextEnabled: 'On'
})

// TODO: On click event is trying to change a read only prop needs fixed. Doing some type script refactoring
// and broke it.

const emit = defineEmits<{
  (event: 'change'): void
}>()
</script>

<template>
  <label :for="props.id + '_checkbox'" :class="{ 'active': props.isActive }" class="toggle__checkbox">
    <span
      v-if="props.isActive"
      class="switch__label"
    >{{ props.showLabel ? props.labelTextEnabled : '' }}</span>
    <span
      v-if="!props.isActive"
      class="switch__label"
    >{{ props.showLabel ? props.labelTextDisabled : '' }}</span>

    <input
      v-model="props.isActive"
      type="checkbox"
      :id="props.id + '_checkbox'"
      :disabled="props.disabled"
    />
    <span class="toggle__switch"></span>
  </label>
</template>

<style scoped>
.toggle__checkbox {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__checkbox input[type='checkbox'] {
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
  background: #bfcbd9;
  box-shadow: inset 0 0 1px black;
  position: relative;
  margin-left: 10px;
  transition: all 0.25s;
}
.toggle__checkbox .toggle__switch::after,
.toggle__checkbox .toggle__switch::before {
  content: '';
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}
.toggle__checkbox .toggle__switch::after {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
}
.toggle__checkbox .toggle__switch::before {
  background: #4d4d4d;
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
  background: #53b883;
  box-shadow: 0 0 1px #53b883;
}
</style>

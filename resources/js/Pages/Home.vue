<template>
    <h1 class="pl-5">{{ exampleProp }}</h1>
</template>

<script setup>

const props = defineProps({
  exampleProp: String
})

</script>

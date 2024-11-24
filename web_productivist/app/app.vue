<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
const name = "aaaaa";

function printname(name:string){
  console.log(name)
}
</script>

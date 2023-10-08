<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <div>
    <p>angel altuve</p>
    <p>software engineer</p>
    <section>
      <button @click="count++">add</button>
      <p>client {{ count }}</p>
      <TestComp :count="count" :lazy="false" />
      <p>email: devendr4@protonmail.com</p>
      <NuxtLink
        to="https://github.com/devendr4"
        rel="noreferrer"
        target="_blank"
      >
        <!-- <font-awesome-icon :icon="['fab', 'github']" /> -->
      </NuxtLink>
    </section>
  </div>
</template>

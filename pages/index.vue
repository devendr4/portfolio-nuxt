<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const a = 2;
</script>

<template>
  <div>
    <p>angel altuve</p>
    <p>software engineer</p>
    <section>
      <p>email: devendr4@protonmail.com</p>
      <NuxtLink
        to="https://github.com/devendr4"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon :icon="['fab', 'github']" />
      </NuxtLink>
    </section>
  </div>
</template>

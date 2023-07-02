<script setup lang="ts">
import { Experience } from "../types/index";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserSecret);
const experiences: Experience[] = [
  {
    company: "Vendible",
    startYear: "2020",
    endYear: "Present",
    duties:
      "In charge of going through all the steps of the life cycle of several web applications and services. From requirement gathering to development of both frontend and backend services.\n \n \n Worked on several crypto projects involving the integration of zero knowledge proofs and blockchain libraries. Mostly worked on Algorand, Ethereum and Polygon. In charge of applying SCRUM to be able to keep track of tasks and keep the development team in sync",
  },
  {
    company: "Telefonica Venezolana, C.A.",
    startYear: "2020",
    endYear: "2021",
    duties:
      "In charge of creating and managing ETL processes using Python, Django REST Framework and pandas in order to get relevant and organized data. Developed a frontend application using Angular, Material and Highcharts that consumed this data and presented it in a dashboard that was later used by executives in the company for decision making.",
  },
  {
    company: "Asociacion GUAO",
    startYear: "2019",
    endYear: "2020",
    duties:
      "Redesigned a Drupal website to be responside using CSS and JavaScript on top of the existing project.",
  },
];

const skills = [
  { name: "typescript" },
  { name: "python" },
  { name: "django" },
  { name: "nodejs" },
  { name: "git" },
  { name: "postgresql" },
  { name: "reactjs" },
  { name: "angular" },
  { name: "nextjs" },
  { name: "docker" },
  { name: "graphql" },
];
</script>

<template>
  <h1 class="mb-3">about</h1>
  <div class="flex flex-wrap">
    <section class="basis-3/4 p-3">
      <h2 class="mb-2">experiences</h2>
      <ul class="flex flex-col gap-5">
        <li v-for="exp in experiences" v-bind:key="exp.company">
          <p>{{ exp.company + " " + exp.startYear + " - " + exp.endYear }}</p>
          <p>{{ exp.duties }}</p>
        </li>
      </ul>
    </section>
    <FontAwesomeIcon icon="{faUserSecret}" />
    <section class="p-3">
      <h2 class="mb-2">skills</h2>
      <ul class="flex flex-col gap-3">
        <li v-for="skill in skills" v-bind:key="skill.name">
          {{ skill.name }}
        </li>
      </ul>
    </section>
  </div>
</template>

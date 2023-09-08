<script setup>
const projects = [
  {
    title: "Admetricks landing page",
    description:
      "Landing page for Admetricks company that also contains a dynamic chart built with D3.js to represent the CLP/USD variation yearly.",
    stack: ["Vue.js", "Tailwind", "TypeScript", "D3.js"]
  },
  {
    title: "To Do List",
    description: "Simple To Do List. Deployed on firebase and cloud functions.",
    stack: ["Angular", "Express.js", "Firestore", "Firebase"]
  },
  {
    title: "Rick and Morty app",
    description:
      "Web app that consumes data from the Rick and Morty API and allows to edit it and store changes locally.",
    stack: ["Next.js", "Tailwind", "TypeScript", "Zustand", "GraphQL"]
  },
  {
    title: "Trustible",
    description:
      "Web application built on the Algorand network that would help users restore and recover their lost seedphrases in multiple blockchain networks, including Ethereum, Polygon, Vechain, Solana and Algorand.",
    stack: ["Next.js", "Material UI", "TypeScript", "Redux Toolkit", "GraphQL"]
  },
  {
    title: "Algorand web wallet",
    description:
      "Web blockchain wallet for the Algorand network with additional privacy and identity features using Onfido.",
    stack: ["Next.js", "Material UI", "TypeScript", "Redux Sagas", "GraphQL"]
  },
  {
    title: "Portfolio V1",
    description: "Previous iteration of my personal portfolio using React.js",
    stack: ["React.js", "Material UI", "TypeScript", "Redux Sagas"]
  },
  {
    title: "Guao.org",
    description:
      "Responsive redesign of a Drupal website using plain CSS and Javascript on top of the existing page using a Drupal plugin.",
    stack: ["Ruby on Rails", "Bootstrap"]
  },
  {
    title: "LAPROMO",
    description: "TheFork clone using Ruby on Rails",
    stack: ["Ruby on Rails", "Bootstrap"]
  }
];
</script>

<template>
  <section class="flex flex-wrap gap-2">
    <h1 class="w-full">
      projects
    </h1>
    <GenericCard v-for="p in projects" :key="p.title">
      <GenericTitle variant="h1">
        {{ p.title }}
      </GenericTitle>
      <p>{{ p.description }}</p>
      <div class="flex gap-3">
        <p v-for="v in p.stack" :key="v">
          {{ v }}
        </p>
      </div>
    </GenericCard>
  </section>
</template>
;

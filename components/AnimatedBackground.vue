<script setup>
const boxRef = ref();
const { onLoop } = useRenderLoop();
onLoop(() => {
  if (boxRef.value) {
    boxRef.value.rotation.x += 0.001;
    boxRef.value.rotation.z += 0.001;
    // boxRef.value.rotation.z += 0.002;
  }
});
</script>

<template>
  <TresCanvas
    class="relative"
    :clear-color="true ? '#2C3333' : 'white'"
    :shadows="true"
  >
    <TresMesh ref="boxRef">
      <TresBoxGeometry :args="[2, 1, 1]" />
      <TresMeshBasicMaterial color="#3b4545" />
    </TresMesh>
    <TresSpotLight :intensity="10" />
  </TresCanvas>
</template>

<template>
  <div ref="container" class="abc-notation"></div>
</template>

<script setup>
import { ref, onMounted, watch, useSlots } from "vue";

const props = defineProps({
  abc: { type: String, default: "" },
  responsive: { type: String, default: "resize" },
});

const slots = useSlots();
const container = ref(null);

function getAbc() {
  if (props.abc) return props.abc;
  const slot = slots.default?.();
  if (slot?.[0]?.children) return slot[0].children;
  return "";
}

async function render() {
  if (!container.value) return;
  const abcjs = await import("abcjs");
  const abc = getAbc().trim();
  if (!abc) return;
  abcjs.renderAbc(container.value, abc, {
    responsive: props.responsive,
    staffwidth: 600,
    paddingtop: 0,
    paddingbottom: 0,
  });
}

onMounted(render);
watch(() => props.abc, render);
</script>

<style scoped>
.abc-notation {
  margin: 1rem 0;
  overflow-x: auto;
}
.abc-notation :deep(svg) {
  max-width: 100%;
}
</style>

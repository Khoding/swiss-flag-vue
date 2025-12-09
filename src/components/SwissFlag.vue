<template>
  <section class="flag-grid" :class="{'low-perf': !isHighPerformance}">
    <div
      v-for="(colBlocks, index) in columnStructures"
      :key="index"
      class="column"
      :class="colBlocks.length === 1 ? colBlocks[0].color : ''"
      :style="{animationDelay: index * staggeredDelay + 'ms'}"
    >
      <template v-if="colBlocks.length > 1">
        <div
          v-for="(block, bIndex) in colBlocks"
          :key="bIndex"
          class="row"
          :class="block.color"
          :style="{flex: block.size}"
        ></div>
      </template>
    </div>
  </section>
</template>

<script setup>
import {computed} from 'vue';

const isHighPerformance = computed(() => {
  const cpuCores = navigator.hardwareConcurrency || 2;
  const deviceMemory = navigator.deviceMemory || 2;
  const connection = navigator.connection?.effectiveType || '4g';
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  return (
    cpuCores >= 4 &&
    deviceMemory >= 4 &&
    connection !== 'slow-2g' &&
    !prefersReducedMotion
  );
});

const dimensions = computed(() => (isHighPerformance.value ? 32 : 15));
const staggeredDelay = computed(() => (isHighPerformance.value ? 50 : 35));

const columnStructures = computed(() => {
  const size = dimensions.value;
  const cols = [];

  let hBarX, hBarY, vBarX, vBarY;
  if (size === 32) {
    hBarX = [6, 25];
    hBarY = [13, 18];
    vBarX = [13, 18];
    vBarY = [6, 25];
  } else {
    hBarX = [3, 11];
    hBarY = [6, 8];
    vBarX = [6, 8];
    vBarY = [3, 11];
  }

  const isWhite = (x, y) => {
    const inHBar =
      x >= hBarX[0] && x <= hBarX[1] && y >= hBarY[0] && y <= hBarY[1];
    const inVBar =
      x >= vBarX[0] && x <= vBarX[1] && y >= vBarY[0] && y <= vBarY[1];
    return inHBar || inVBar;
  };

  for (let x = 0; x < size; x++) {
    const blocks = [];
    let currentStart = 0;
    let currentColor = isWhite(x, 0) ? 'white' : 'red';

    for (let y = 1; y < size; y++) {
      const color = isWhite(x, y) ? 'white' : 'red';
      if (color !== currentColor) {
        blocks.push({color: currentColor, size: y - currentStart});
        currentColor = color;
        currentStart = y;
      }
    }
    blocks.push({color: currentColor, size: size - currentStart});
    cols.push(blocks);
  }
  return cols;
});

const props = defineProps({
  blockSize: {
    type: String,
    required: true,
    default: '12rem'
  }
});
</script>

<style scoped>
@keyframes oscillate {
  from {
    transform: translateY(var(--oscillate-distance, 2%));
  }
  to {
    transform: translateY(calc(-1 * var(--oscillate-distance, 2%)));
  }
}

.flag-grid {
  display: flex;
  aspect-ratio: 1 / 1;
  inline-size: v-bind(blockSize);
  margin-inline: auto;
  margin-block-start: 1rem;
  anchor-name: --flag-grid;
  --oscillate-distance: 2%;

  &.low-perf {
    --oscillate-distance: 3%;
  }

  .column {
    display: flex;
    flex: 1;
    flex-direction: column;
    animation: oscillate 600ms infinite alternate ease-in-out backwards;

    &.red {
      background-color: #ff0000;
    }

    &.white {
      background-color: #ffffff;
    }
  }

  .row {
    flex: 1;
    inline-size: 100%;
    background-color: #ff0000;

    &.white {
      background-color: #ffffff;
    }
  }

  &:not(.low-perf)
    > .column:nth-child(n + 7):nth-child(-n + 26)
    .row:nth-child(n + 14):nth-child(-n + 19) {
    background-color: #ffffff;
  }

  &:not(.low-perf)
    > .column:nth-child(n + 14):nth-child(-n + 19)
    .row:nth-child(n + 7):nth-child(-n + 26) {
    background-color: #ffffff;
  }

  &.low-perf
    .column:nth-child(n + 4):nth-child(-n + 12)
    .row:nth-child(n + 7):nth-child(-n + 9) {
    background-color: #ffffff;
  }

  &.low-perf
    .column:nth-child(n + 7):nth-child(-n + 9)
    .row:nth-child(n + 4):nth-child(-n + 12) {
    background-color: #ffffff;
  }
}
</style>

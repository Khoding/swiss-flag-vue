<template>
  <section
    class="flag-grid"
    :class="{
      'low-perf': !isHighPerformance || lowPerfVariant,
      'no-animation': removeAnimation
    }"
  >
    <div
      v-for="(col, index) in columnStructures"
      :key="index"
      class="column"
      :class="col.blocks.length === 1 ? col.blocks[0].color : ''"
      :style="{
        animationDelay: index * staggeredDelay + 'ms',
        flex: col.width
      }"
    >
      <template v-if="col.blocks.length > 1">
        <div
          v-for="(block, bIndex) in col.blocks"
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

const props = defineProps({
  inlineSize: {
    type: String,
    default: '12rem'
  },
  lowPerfVariant: {
    type: Boolean,
    default: false
  },
  removeAnimation: {
    type: Boolean,
    default: false
  }
});

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

const dimensions = computed(() => {
  if (props.removeAnimation) {
    return 5;
  } else if (!props.lowPerfVariant && isHighPerformance.value) {
    return 32;
  } else {
    return 15;
  }
});
const staggeredDelay = computed(() =>
  !props.lowPerfVariant && isHighPerformance.value ? 50 : 35
);

const columnStructures = computed(() => {
  const size = dimensions.value;
  const cols = [];

  let hBarX, hBarY, vBarX, vBarY;
  if (size === 32) {
    hBarX = [6, 25];
    hBarY = [13, 18];
    vBarX = [13, 18];
    vBarY = [6, 25];
  } else if (size === 15) {
    hBarX = [3, 11];
    hBarY = [6, 8];
    vBarX = [6, 8];
    vBarY = [3, 11];
  } else if (size === 5) {
    hBarX = [1, 3];
    hBarY = [2, 2];
    vBarX = [2, 2];
    vBarY = [1, 3];
  }

  const isWhite = (x, y) => {
    const inHBar =
      x >= hBarX[0] && x <= hBarX[1] && y >= hBarY[0] && y <= hBarY[1];
    const inVBar =
      x >= vBarX[0] && x <= vBarX[1] && y >= vBarY[0] && y <= vBarY[1];
    return inHBar || inVBar;
  };

  const getWeight = i => {
    if (size === 32) return 1;
    if (size === 5) {
      return i === 1 || i === 3 ? 7 : 6;
    }
    const section = Math.floor(i / 3);
    if (section === 1 || section === 3) return 7 / 3;
    return 2;
  };

  for (let x = 0; x < size; x++) {
    const blocks = [];
    let currentStart = 0;
    let currentColor = isWhite(x, 0) ? 'white' : 'red';

    for (let y = 1; y < size; y++) {
      const color = isWhite(x, y) ? 'white' : 'red';
      if (color !== currentColor) {
        let blockSize = 0;
        for (let k = currentStart; k < y; k++) blockSize += getWeight(k);
        blocks.push({color: currentColor, size: blockSize});
        currentColor = color;
        currentStart = y;
      }
    }
    let blockSize = 0;
    for (let k = currentStart; k < size; k++) blockSize += getWeight(k);
    blocks.push({color: currentColor, size: blockSize});

    cols.push({
      width: getWeight(x),
      blocks
    });
  }
  return cols;
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
  inline-size: v-bind(inlineSize);
  --oscillate-distance: 2%;

  &.low-perf {
    --oscillate-distance: 3%;
  }

  &.no-animation .column {
    animation: none;
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
}
</style>

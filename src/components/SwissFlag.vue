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
      :class="col.singleColor"
      :style="{
        animationDelay: index * staggeredDelay + 'ms',
        flex: col.width,
        background: col.background
      }"
    ></div>
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

  const getWeight = i => {
    if (size === 32) return 1;
    if (size === 5) {
      return i === 1 || i === 3 ? 7 : 6;
    }
    const section = Math.floor(i / 3);
    if (section === 1 || section === 3) return 7 / 3;
    return 2;
  };

  const sumWeights = (start, end) => {
    let sum = 0;
    for (let i = start; i < end; i++) sum += getWeight(i);
    return sum;
  };

  const totalHeight = 32;

  for (let x = 0; x < size; x++) {
    const blocks = [];

    if (x >= vBarX[0] && x <= vBarX[1]) {
      blocks.push({color: 'red', size: sumWeights(0, vBarY[0])});
      blocks.push({color: 'white', size: sumWeights(vBarY[0], vBarY[1] + 1)});
      blocks.push({color: 'red', size: sumWeights(vBarY[1] + 1, size)});
    } else if (x >= hBarX[0] && x <= hBarX[1]) {
      blocks.push({color: 'red', size: sumWeights(0, hBarY[0])});
      blocks.push({color: 'white', size: sumWeights(hBarY[0], hBarY[1] + 1)});
      blocks.push({color: 'red', size: sumWeights(hBarY[1] + 1, size)});
    } else {
      blocks.push({color: 'red', size: sumWeights(0, size)});
    }

    let background = null;
    let singleColor = null;

    if (blocks.length === 1) {
      singleColor = blocks[0].color;
    } else {
      const stops = [];
      let currentPos = 0;
      blocks.forEach(block => {
        const start = (currentPos / totalHeight) * 100;
        const end = ((currentPos + block.size) / totalHeight) * 100;
        const colorHex = block.color === 'red' ? '#ff0000' : '#ffffff';
        stops.push(`${colorHex} ${start}% ${end}%`);
        currentPos += block.size;
      });
      background = `linear-gradient(to bottom, ${stops.join(', ')})`;
    }

    cols.push({
      width: getWeight(x),
      singleColor,
      background
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
    flex: 1;
    animation: oscillate 600ms infinite alternate ease-in-out backwards;

    &.red {
      background-color: #ff0000;
    }
  }
}
</style>

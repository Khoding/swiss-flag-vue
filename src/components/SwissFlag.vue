<template>
  <section
    class="flag"
    :class="{
      'reduced-motion': effectiveReduceAnimation,
      'no-animation': removeAnimation
    }"
    style="background-color: transparent !important"
  >
    <div
      v-for="(column, index) in columnStructures"
      :key="index"
      class="column"
      :style="{
        animationDelay: (index - gridSize) * activeStaggeredDelay + 'ms',
        flex: column.width,
        background: column.background,
        backgroundColor: column.singleColor
      }"
    ></div>
  </section>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  reduceAnimation: {
    type: Boolean,
    default: false
  },
  animationSpeed: {
    type: Number,
    default: undefined
  },
  oscillateDistance: {
    type: String,
    default: undefined
  },
  staggeredDelay: {
    type: Number,
    default: undefined
  },
  removeAnimation: {
    type: Boolean,
    default: false
  }
});

const isReducedMotion = computed(() => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
});

const effectiveReduceAnimation = computed(() => {
  return props.reduceAnimation || isReducedMotion.value;
});

const gridSize = computed(() => {
  if (props.removeAnimation) {
    return 5;
  }

  if (!effectiveReduceAnimation.value) {
    return 32;
  }

  return 15;
});

const columnStructures = computed(() => {
  const size = gridSize.value;
  const columns = [];
  const TOTAL_HEIGHT_UNITS = 32;

  // Configuration for the Swiss Cross geometry based on grid resolution
  let horizontalArmX, horizontalArmY, verticalArmX, verticalArmY;

  if (size === 32) {
    horizontalArmX = [6, 25];
    horizontalArmY = [13, 18];
    verticalArmX = [13, 18];
    verticalArmY = [6, 25];
  } else if (size === 15) {
    horizontalArmX = [3, 11];
    horizontalArmY = [6, 8];
    verticalArmX = [6, 8];
    verticalArmY = [3, 11];
  } else {
    // size === 5
    horizontalArmX = [1, 3];
    horizontalArmY = [2, 2];
    verticalArmX = [2, 2];
    verticalArmY = [1, 3];
  }

  // Helper to calculate column width weight to normalize total width to 32 units
  const getColumnWeight = columnIndex => {
    if (size === 32) return 1;

    if (size === 5) {
      const isWideColumn = columnIndex === 1 || columnIndex === 3;
      return isWideColumn ? 7 : 6;
    }

    // size === 15
    const sectionIndex = Math.floor(columnIndex / 3);
    const isWideSection = sectionIndex === 1 || sectionIndex === 3;
    return isWideSection ? 7 / 3 : 2;
  };

  const calculateHeightWeight = (startUnit, endUnit) => {
    let weightSum = 0;
    for (let i = startUnit; i < endUnit; i++) {
      weightSum += getColumnWeight(i);
    }
    return weightSum;
  };

  for (let x = 0; x < size; x++) {
    let whiteStripeStart = -1;
    let whiteStripeEnd = -1;

    const isVerticalArm = x >= verticalArmX[0] && x <= verticalArmX[1];
    const isHorizontalArm = x >= horizontalArmX[0] && x <= horizontalArmX[1];

    if (isVerticalArm) {
      whiteStripeStart = verticalArmY[0];
      whiteStripeEnd = verticalArmY[1];
    } else if (isHorizontalArm) {
      whiteStripeStart = horizontalArmY[0];
      whiteStripeEnd = horizontalArmY[1];
    }

    let background = null;
    let singleColor = null;

    // If no white stripe, it's a solid red column
    if (whiteStripeStart === -1) {
      singleColor = 'red !important';
    } else {
      // Calculate the height of each segment (Red -> White -> Red)
      const topRedHeight = calculateHeightWeight(0, whiteStripeStart);
      const whiteHeight = calculateHeightWeight(
        whiteStripeStart,
        whiteStripeEnd + 1
      );

      // Convert heights to percentages for CSS gradient
      const whiteStartPercent = (topRedHeight / TOTAL_HEIGHT_UNITS) * 100;
      const whiteEndPercent =
        ((topRedHeight + whiteHeight) / TOTAL_HEIGHT_UNITS) * 100;

      background = `linear-gradient(to bottom, 
        #ff0000 0% ${whiteStartPercent}%, 
        #ffffff ${whiteStartPercent}% ${whiteEndPercent}%, 
        #ff0000 ${whiteEndPercent}% 100%) !important`;
    }

    columns.push({
      width: getColumnWeight(x),
      singleColor,
      background
    });
  }

  return columns;
});

const activeStaggeredDelay = computed(() => {
  if (props.staggeredDelay !== undefined) {
    return props.staggeredDelay;
  }
  return !effectiveReduceAnimation.value ? 50 : 35;
});

const activeAnimationSpeed = computed(() => {
  if (props.animationSpeed !== undefined) {
    return props.animationSpeed;
  }
  return !effectiveReduceAnimation.value ? 600 : 900;
});

const activeOscillateDistance = computed(() => {
  if (props.oscillateDistance !== undefined) {
    return props.oscillateDistance;
  }
  return !effectiveReduceAnimation.value ? '2%' : '3%';
});

let animationSpeedValue = computed(() => {
  return `${activeAnimationSpeed.value}ms`;
});
</script>

<style scoped>
.flag {
  display: flex;
  aspect-ratio: 1 / 1;
  --oscillate-distance: v-bind(activeOscillateDistance);

  /* Prevent colors from being inverted by auto dark mode or high contrast mode */
  isolation: isolate;
  color-scheme: only light;
  forced-color-adjust: none;

  /* Ensure the flag container itself is white if transparent parts exist */
  background-color: white !important;
  color: black !important;

  &.no-animation .column {
    animation: none;
  }

  .column {
    flex: 1;
    animation: oscillate v-bind(animationSpeedValue) infinite alternate
      ease-in-out backwards;
    filter: none !important;
  }
}

@keyframes oscillate {
  from {
    transform: translateY(var(--oscillate-distance, 2%));
  }
  to {
    transform: translateY(calc(-1 * var(--oscillate-distance, 2%)));
  }
}
</style>

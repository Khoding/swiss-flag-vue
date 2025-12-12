# SwissFlag

This Swiss Flag, whose inspiration came from Josh W. Comeau's [Pride Flag](https://www.joshwcomeau.com/animation/pride-flags/), is a simple Vue component that displays the Swiss flag with a subtle waving animation.

You can see a demo of the component [here](https://swiss-flag.khodok.com).

## Installation

You can install the package via npm:

```bash
npm install github:Khoding/swiss-flag-vue
```

## Usage

### Local Registration

Import the SwissFlag component into your Vue application and use it in your templates:

```vue
<template>
  <div class="container">
    <!-- Recommended 2rem minimum, less than that makes it so tiny it looks broken -->
    <!-- Normal flag -->
    <SwissFlag />

    <!-- Custom sizes -->
    <SwissFlag inline-size="20rem" />

    <!-- Reduce animation variant -->
    <SwissFlag :reduce-animation="true" />

    <!-- Disable animation -->
    <SwissFlag :remove-animation="true" />

    <!-- Advanced Animation Controls -->
    <SwissFlag
      :animation-speed="1000"
      oscillate-distance="5%"
      :staggered-delay="100"
    />
  </div>
</template>

<script setup>
import {SwissFlag} from 'swiss-flag-vue';
</script>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `inline-size` | String | `'12rem'` | Sets the size of the flag. The flag is a perfect square. Accepts CSS units (rem, px, vw, etc). |
| `reduce-animation` | Boolean | `false` | When true, forces the simplified variant of the flag (fewer columns, slower animation). Automatically enabled if user prefers reduced motion. |
| `remove-animation` | Boolean | `false` | When true, disables the waving animation completely and renders a static 5-column flag for performance. |
| `animation-speed` | Number | `600` / `900` | (Optional) Duration of the oscillation cycle in milliseconds. Defaults to 600ms (Standard) or 900ms (Reduced Motion). |
| `oscillate-distance` | String | `'2%'` / `'3%'` | (Optional) CSS value for the vertical displacement distance. Defaults to '2%' (Standard) or '3%' (Reduced Motion). |
| `staggered-delay` | Number | `50` / `35` | (Optional) Delay in milliseconds between each column's animation start. Defaults to 50ms (Standard) or 35ms (Reduced Motion). |

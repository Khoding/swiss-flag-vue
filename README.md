# SwissFlag

This Swiss Flag, whose inspiration came from Josh W. Comeau's [Pride Flag](https://www.joshwcomeau.com/animation/pride-flags/), is a simple Vue component that displays the Swiss flag with a subtle waving animation.

You can see a demo of the component [here](https://swiss-flag.khodok.com).

## Installation

You can install the package via npm:

```bash
npm install github:Khoding/swiss-flag-vue
```

## Usage

Import the SwissFlag component into your Vue application and use it in your templates:

```vue
<template>
  <!-- Recommended 2rem minimum, less than that makes it so tiny it looks broken -->
  <!-- Normal flag -->
  <SwissFlag />

  <!-- Custom sizes -->
  <SwissFlag inline-size="20rem" />

  <!-- Low performance variant -->
  <SwissFlag :reduce-animation="true" />

  <!-- Disable animation -->
  <SwissFlag :remove-animation="true" />
</template>

<script setup>
import {SwissFlag} from 'swiss-flag-vue';
</script>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `inline-size` | String | `12rem` | Sets the size of the flag. The flag is a perfect square. |
| `reduce-animation` | Boolean | `false` | When true, forces the simplified variant of the flag, this variant is automatically used when the user has enabled the "reduce motion" setting in their operating system. |
| `remove-animation` | Boolean | `false` | When true, disables the waving animation of the flag and makes it a 5 columns flag for performances (not because the animated flags are massive, but because since we can reduce the amount of nodes, why not do it?). |

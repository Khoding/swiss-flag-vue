# SwissFlag

This Swiss Flag, who's inspiration came from Josh W. Comeau's [Pride Flag](https://www.joshwcomeau.com/animation/pride-flags/), is a simple Vue component that displays the Swiss flag with a subtle waving animation.

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
  <SwissFlag block-size="20rem" />
  <SwissFlag />
</template>

<script setup>
import {SwissFlag} from 'swiss-flag-vue';
</script>
```

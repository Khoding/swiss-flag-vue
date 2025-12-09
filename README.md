# SwissFlag

This Swiss Flag, whose inspiration came from Josh W. Comeau's [Pride Flag](https://www.joshwcomeau.com/animation/pride-flags/), is a simple Vue component that displays the Swiss flag with a subtle waving animation.

You can see a demo of the component [here](https://khoding.github.io/swiss-flag-vue/).

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

## Performance Considerations

It's important for me to disclose that the full flag is made out of 92 nodes, while the simplified version (that gets activated for people with less powerful devices or with reduced motion preferences), is made out of 42 nodes.

The previous version I made of this flag was made out of 1056 nodes, and the simplified version had 240, so it was significant, that doesn't mean 92 unused nodes on your website isn't still _way too many_, so please use this component wisely!

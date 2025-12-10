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
  <SwissFlag block-size="20rem" />

  <!-- Low performance variant -->
  <SwissFlag :low-perf-variant="true" />

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
| block-size | String | "12rem" | Sets the size of the flag. Both width and height are set to this value, maintaining aspect ratio. |
| low-perf-variant | Boolean | false | When true, uses a simplified version of the flag with fewer nodes for better performance on less powerful devices. This is to force it in that mode, otherwise it gets activated automatically based on device capabilities and user preferences. |
| remove-animation | Boolean | false | When true, disables the waving animation of the flag and automatically enables the low-perf-variant for better performance. |

## Performance Considerations

It's important for me to disclose that the full flag is made out of 92 nodes, while the simplified version (that gets activated for people with less powerful devices or with reduced motion preferences), is made out of 42 nodes.

The previous version I made of this flag was made out of 1056 nodes, and the simplified version had 240, so it was significant, that doesn't mean 92 unused nodes on your website isn't still _way too many_, so please use this component wisely!

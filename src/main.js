import {createApp, h} from 'vue';
import SwissFlag from './components/SwissFlag.vue';

createApp({
  render() {
    return [
      h(SwissFlag, {
        blockSize: '12rem'
      }),
      h(
        'div',
        {
          style: 'text-align: center; margin-top: 2rem; font-family: sans-serif'
        },
        [
          h(
            'a',
            {
              href: 'https://github.com/Khoding/swiss-flag-vue',
              target: '_blank'
            },
            'View on GitHub'
          )
        ]
      )
    ];
  }
}).mount('#app');

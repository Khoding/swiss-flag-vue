import {createApp, h, ref} from 'vue';
import SwissFlag from './components/SwissFlag.vue';

createApp({
  setup() {
    const lowPerfVariant = ref(false);
    const removeAnimation = ref(false);

    return () => [
      h(
        'div',
        {
          style:
            'text-align: center; margin-bottom: 1rem; font-family: sans-serif'
        },
        [
          h('label', [
            h('input', {
              type: 'checkbox',
              checked: lowPerfVariant.value,
              onChange: e => {
                lowPerfVariant.value = e.target.checked;
                if (!removeAnimation.value) {
                  removeAnimation.value = true;
                  setTimeout(() => (removeAnimation.value = false), 10);
                }
              }
            }),
            ' Low Perf'
          ]),
          h('label', {style: 'margin-left: 1rem'}, [
            h('input', {
              type: 'checkbox',
              checked: removeAnimation.value,
              onChange: e => (removeAnimation.value = e.target.checked)
            }),
            ' No Animation'
          ])
        ]
      ),
      h(SwissFlag, {
        blockSize: '12rem',
        lowPerfVariant: lowPerfVariant.value,
        removeAnimation: removeAnimation.value
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

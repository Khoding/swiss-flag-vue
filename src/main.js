import {createApp, h, ref} from 'vue';
import SwissFlag from './components/SwissFlag.vue';

createApp({
  setup() {
    const reduceAnimation = ref(false);
    const removeAnimation = ref(false);
    const flagSize = ref(12);

    const useManualSettings = ref(false);
    const animationSpeed = ref(600);
    const oscillateDistance = ref(2);
    const staggeredDelay = ref(50);

    return () => [
      h(
        'div',
        {
          style:
            'max-width: 600px; margin: 2rem auto; font-family: system-ui, -apple-system, sans-serif; padding: 0 1rem;'
        },
        [
          h(
            'h1',
            {style: 'text-align: center; margin-bottom: 2rem'},
            'Swiss Flag Vue'
          ),

          // Controls Container
          h(
            'div',
            {
              style:
                'background: #f8f9fa; padding: 1.5rem; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); margin-bottom: 3rem; display: flex; flex-direction: column; gap: 1.5rem;'
            },
            [
              // Primary Toggles
              h(
                'div',
                {
                  style:
                    'display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;'
                },
                [
                  h(
                    'label',
                    {
                      style:
                        'display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none;'
                    },
                    [
                      h('input', {
                        type: 'checkbox',
                        checked: reduceAnimation.value,
                        onChange: e => {
                          const isChecked = e.target.checked;
                          const wasRemoved = removeAnimation.value;
                          removeAnimation.value = true;
                          reduceAnimation.value = isChecked;
                          setTimeout(() => {
                            removeAnimation.value = wasRemoved;
                          }, 10);
                        }
                      }),
                      'Reduce Motion'
                    ]
                  ),
                  h(
                    'label',
                    {
                      style:
                        'display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none;'
                    },
                    [
                      h('input', {
                        type: 'checkbox',
                        checked: removeAnimation.value,
                        onChange: e =>
                          (removeAnimation.value = e.target.checked)
                      }),
                      'No Animation'
                    ]
                  )
                ]
              ),

              // Size Slider
              h('div', {}, [
                h(
                  'div',
                  {
                    style:
                      'display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem; font-weight: 500;'
                  },
                  [
                    'Size',
                    h('span', {style: 'color: #666'}, `${flagSize.value}rem`)
                  ]
                ),
                h('input', {
                  type: 'range',
                  min: '2',
                  max: '50',
                  value: flagSize.value,
                  onInput: e => (flagSize.value = e.target.value),
                  style: 'width: 100%; display: block;'
                })
              ]),

              // Manual Settings Toggle
              h(
                'div',
                {style: 'border-top: 1px solid #e5e7eb; padding-top: 1.5rem;'},
                [
                  h(
                    'label',
                    {
                      style:
                        'display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none; margin-bottom: 1rem; font-weight: 500;'
                    },
                    [
                      h('input', {
                        type: 'checkbox',
                        checked: useManualSettings.value,
                        onChange: e =>
                          (useManualSettings.value = e.target.checked)
                      }),
                      'Override Animation Settings'
                    ]
                  ),

                  // Manual Controls
                  useManualSettings.value
                    ? h(
                        'div',
                        {
                          style:
                            'display: grid; gap: 1rem; padding-left: 0.5rem; animation: fadeIn 0.2s ease-out;'
                        },
                        [
                          // Speed
                          h('div', {}, [
                            h(
                              'div',
                              {
                                style:
                                  'display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;'
                              },
                              [
                                'Animation Speed',
                                h(
                                  'span',
                                  {style: 'color: #666'},
                                  `${animationSpeed.value}ms`
                                )
                              ]
                            ),
                            h('input', {
                              type: 'range',
                              min: '100',
                              max: '3000',
                              step: '50',
                              value: animationSpeed.value,
                              onInput: e =>
                                (animationSpeed.value = Number(e.target.value)),
                              style: 'width: 100%;'
                            })
                          ]),
                          // Distance
                          h('div', {}, [
                            h(
                              'div',
                              {
                                style:
                                  'display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;'
                              },
                              [
                                'Oscillation Distance',
                                h(
                                  'span',
                                  {style: 'color: #666'},
                                  `${oscillateDistance.value}%`
                                )
                              ]
                            ),
                            h('input', {
                              type: 'range',
                              min: '0',
                              max: '10',
                              step: '0.1',
                              value: oscillateDistance.value,
                              onInput: e =>
                                (oscillateDistance.value = Number(
                                  e.target.value
                                )),
                              style: 'width: 100%;'
                            })
                          ]),
                          // Stagger
                          h('div', {}, [
                            h(
                              'div',
                              {
                                style:
                                  'display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.85rem;'
                              },
                              [
                                'Stagger Delay',
                                h(
                                  'span',
                                  {style: 'color: #666'},
                                  `${staggeredDelay.value}ms`
                                )
                              ]
                            ),
                            h('input', {
                              type: 'range',
                              min: '0',
                              max: '200',
                              step: '5',
                              value: staggeredDelay.value,
                              onInput: e =>
                                (staggeredDelay.value = Number(e.target.value)),
                              style: 'width: 100%;'
                            })
                          ])
                        ]
                      )
                    : h(
                        'div',
                        {
                          style:
                            'color: #666; font-size: 0.9rem; font-style: italic; padding-left: 1.8rem;'
                        },
                        reduceAnimation.value
                          ? 'Using "Reduced Motion" preset (900ms speed, 3% distance, 35ms stagger)'
                          : 'Using "Standard" preset (600ms speed, 2% distance, 50ms stagger)'
                      )
                ]
              )
            ]
          ),

          h(SwissFlag, {
            style: 'margin-inline: auto;',
            animationSpeed: useManualSettings.value
              ? animationSpeed.value
              : undefined,
            oscillateDistance: useManualSettings.value
              ? `${oscillateDistance.value}%`
              : undefined,
            staggeredDelay: useManualSettings.value
              ? staggeredDelay.value
              : undefined,
            inlineSize: `${flagSize.value}rem`,
            reduceAnimation: reduceAnimation.value,
            removeAnimation: removeAnimation.value
          }),

          h(
            'div',
            {
              style:
                'text-align: center; margin-top: 4rem; font-size: 0.9rem; color: #666;'
            },
            [
              h(
                'a',
                {
                  href: 'https://github.com/Khoding/swiss-flag-vue',
                  target: '_blank',
                  style:
                    'color: inherit; text-decoration: none; border-bottom: 1px solid #ccc;'
                },
                'View on GitHub'
              )
            ]
          )
        ]
      )
    ];
  }
}).mount('#app');

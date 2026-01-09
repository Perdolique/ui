// oxlint-disable-next-line no-anonymous-default-export
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],

  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]*$'
  }
}

import { register } from 'node:module'

// @see https://nodejs.org/en/learn/test-runner/using-test-runner
// @see https://nodejs.org/docs/latest/api/module.html#hooks
register('./loader.mjs', import.meta.url)
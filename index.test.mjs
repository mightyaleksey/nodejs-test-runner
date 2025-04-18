import assert from 'node:assert'
import test from 'node:test'

import { sum } from './index.mjs'

test('simple test', () => {
  assert.strictEqual(sum(1, 2), 3)
})

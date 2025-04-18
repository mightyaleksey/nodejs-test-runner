import flowRemoveTypes from 'flow-remove-types'
import path from 'node:path'

// Uses current file location to get project root.
// Update it accordingly for your project.
const root = path.dirname(path.dirname(import.meta.url))

export async function resolve (specifier, context, nextResolve) {
  // Fallback to default resolver
  return nextResolve(specifier)
}

export async function load (url, context, nextLoad) {
  // Take a resolved URL and return the source code to be evaluated.
  const result = await nextLoad(url, context)

  // Transform only project files
  if (url.startsWith(root) && !url.includes('node_modules')) {
    const source = flowRemoveTypes(result.source)
    return Object.assign({}, result, { source: source.toString() })
  }

  return result
}

import universal from 'react-universal-component'

import { updateForKeys } from 'docs/src/hoc'
import ComponentExamplesError from './ComponentExamplesError'
import ComponentExamplesLoader from './ComponentExamplesLoader'

const ComponentExamples = universal(
  ({ displayName, type }) => import(`docs/src/examples/${type}s/${displayName}/index.js`),
  {
    loading: ComponentExamplesLoader,
    error: ComponentExamplesError,
  },
)

export const preloadMyComponent = () => ComponentExamples.preload()
export default updateForKeys(['displayName', 'type'])(ComponentExamples)
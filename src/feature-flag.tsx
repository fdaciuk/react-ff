import { createFeatureFlag } from '@fdaciuk/react-ff'

export type Flags = 
  | 'NEW_MENU'
  | 'NEW_HEADER'
  | 'NEW_FOOTER'

const { FFProvider, FF } = createFeatureFlag<Flags>()
export { FFProvider, FF }

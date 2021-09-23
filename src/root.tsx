import App from './app'
import { Flags, FFProvider } from './feature-flag'

export function Root () {
  const flags: Record<Flags, boolean> = { 
    NEW_MENU: true, 
    NEW_HEADER: false,
    NEW_FOOTER: false, 
  }

  return (
    <FFProvider flags={flags}>
      <App />
    </FFProvider>
  )
}

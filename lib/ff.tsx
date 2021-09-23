import { ReactNode, createContext, useContext } from 'react'

export function createFeatureFlag <Flags extends string> () {
  type PropsWithChildren = {
    children: ReactNode | ReactNode[]
  }

  type FlagsProps = {
    flags: Record<Flags, boolean>
  }

  const FFContext = createContext<FlagsProps | null>(null)

  type FFProviderProps = PropsWithChildren & FlagsProps
  function FFProvider ({ flags, children }: FFProviderProps) {
    return (
      <FFContext.Provider value={{ flags }}>
        {children}
      </FFContext.Provider>
    )
  }

  function useFF () {
    const context = useContext(FFContext)
    if (!context) {
      throw new Error('@fdaciuk/react-ff: You must wrap your app with <FFProvider /> component')
    }

    return context
  }

  type FFProps = Partial<PropsWithChildren> & {
    flag: Flags
    feature: ReactNode | ReactNode[]
  }

  function FF ({ flag, feature, children }: FFProps) {
    const ff = useFF()

    return (
      <>
        {ff.flags[flag] ? feature : children}
      </>
    )
  }

  return { FFProvider, FF }
}

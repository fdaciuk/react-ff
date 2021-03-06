<p align="center">
  <img src="https://raw.githubusercontent.com/fdaciuk/react-ff/main/src/feature-flag.svg" alt="React Feature Flag">
</p>

# Welcome to React Feature Flag 👋

<p>
  <img alt="Version" src="https://img.shields.io/github/package-json/v/fdaciuk/react-ff?color=blue&style=flat-square">
  <a href="https://github.com/fdaciuk/react-ff#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/fdaciuk/react-ff/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/fdaciuk/react-ff/blob/master/LICENSE.md" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/fdaciuk/react-ff?color=brightgreen&style=flat-square" />
  </a>
  <a href="https://twitter.com/fdaciuk" target="_blank">
    <img alt="Twitter: fdaciuk" src="https://img.shields.io/twitter/follow/fdaciuk.svg?style=social" />
  </a>
</p>

> Type safe Components to create Feature Flags (or Feature Toggle) with React.js

## Install

```sh
yarn add @fdaciuk/react-ff
```

## Usage

First of all, we have to create our componentes using `createFeatureFlag` function.
Create a new file (e.g. `src/feature-flag.tsx`) with this content:

```ts
import { createFeatureFlag } from '@fdaciuk/react-ff'

export type Flags = 
  | 'NEW_HEADER'
  | 'NEW_FOOTER'

const { FF, FFProvider } = createFeatureFlag<Flags>()
export { FF, FFProvider }
```

Now, on top of your app, import `FFProvider` from `src/feature-flag.tsx`, and pass all the flags your app will use, following the shape:

```ts
const flags = {
  NEW_HEADER: true,
  NEW_FOOTER: false,
}
```

In the above example, the user has access to something that should be rendered by the flag `NEW_HEADER`, but not by the flag `NEW_FOOTER`.

Usage of `FFProvider`:

```tsx
function App () {
  const flags = {
    NEW_HEADER: true,
    NEW_FOOTER: false,
  }

  return (
    <FFProvider flags={flags}>
      <TheRestOfMyApp />
    </FFProvider>
  )
}
```

Now, anywhere on your app, you can use the `FF` component to make the feature flag (or feature toggle):

```tsx
function TheRestOfMyApp () {
  return (
    <>
      <FF flag='NEW_HEADER' feature={<NewHeader />}>
        <OldHeader />
      </FF>

      <FF flag='NEW_FOOTER' feature={<NewFooter />} />
    </>
  )
}

function NewHeader () {
  return (
    <header>New header</header>
  )
}

function OldHeader () {
  return (
    <header>Old header</header>
  )
}

function NewFooter () {
  return (
    <footer>New footer</footer>
  )
}
```

The `flag` prop is type safe, and will only accept flags from type `Flags`, passed for `createFeatureFlag` function.

The `children` is optional. You can pass a children when you want to render a fallback component, whether flag is disabled (`false`).

## Author

👤 **Fernando Daciuk - @fdaciuk**

* Website: https://daciuk.dev
* Twitter: [@fdaciuk](https://twitter.com/fdaciuk)
* Github: [@fdaciuk](https://github.com/fdaciuk)
* LinkedIn: [@fdaciuk](https://linkedin.com/in/fdaciuk)

## Credits

Logo by [@vmarcosp](https://github.com/vmarcosp) ♥️

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fdaciuk/react-ff/issues). You can also take a look at the [contributing guide](https://github.com/fdaciuk/react-ff/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Fernando Daciuk - @fdaciuk](https://github.com/fdaciuk).<br />
This project is [MIT](https://github.com/fdaciuk/react-ff/blob/master/LICENSE.md) licensed.

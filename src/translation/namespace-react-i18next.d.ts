import { resources } from './locales/i18n'

declare module 'react-i18next' {
  type DefaultResources = typeof resources['fr']
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Resources extends DefaultResources {}
}

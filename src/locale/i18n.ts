import { init, register } from 'svelte-i18n'

register("en", () => import('./en.json'))
register("zh", () => import('./zh.json'))

function initLocale() {
  console.log('initLocale')
  init({
    fallbackLocale: 'zh',
    initialLocale: 'zh'
  })
}

initLocale()
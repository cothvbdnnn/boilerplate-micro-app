import { i18n } from '@bizfly/shared'

if(process.env.NODE_ENV !== 'test') {
  const localeMessages = () => {
    const locales = require.context('../lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach((key) => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
  }

  Object.keys(localeMessages()).forEach((locale) => {
    const messages = {
      ...i18n.messages[locale],
      ...localeMessages()[locale]
    }
    i18n.setLocaleMessage(
      locale, 
      messages
    );
  });
}

export default i18n

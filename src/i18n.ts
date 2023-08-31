import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import { I18nextPhraseBackend } from "@phrase/i18next-backend";

i18next
  .use(I18nextPhraseBackend)
  .init({
    lng: 'en-GB',
    interpolation: {
      escapeValue: false
    },
    debug: true,
    fallbackLng: 'en-GB',
    backend: {
      debug: true,
      distribution: 'DISTRIBUTION',
      secret: 'SECRET',
      appVersion: '1.0.0',
      cacheExpirationTime: 60 * 5, // time in seconds
    }
  });

export default function (app: any) {
  app.use(I18NextVue, { i18next })
  return app
}

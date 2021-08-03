import router from './router/index'
import { config } from '@bizfly/shared'

// eslint-disable-next-line space-before-function-paren
router.beforeEach(async (to, from, next) => {
  // set page title
  const title = config.service.baseTitle || 'BizFly Dashboard'
  if (to.meta.title) {
    document.title = `${to.meta.title} - ${title}`
  } else {
    document.title = title
  }
  // Handle auth logic here
  // ...
  next()
})

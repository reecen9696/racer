import { listen } from '@colyseus/tools'
import appConfig from './app.config'

// PORT env respected (2567 default); on Colyseus Cloud the transport binding
// is overridden by @colyseus/tools automatically.
listen(appConfig)

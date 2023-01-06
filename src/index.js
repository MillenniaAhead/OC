// ** React Imports
import { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

// css
import 'flatpickr/dist/flatpickr.css'
import "./views/mycss1/StepOne.css"
import "./views/mycss1/StepTwo.css"
import "./views/mycss1/StepThree.css"
import "./views/mycss1/Promote.css"
import './views/mycss1/SideMenu.css'
import "./views/mycss1/Integrations.css"
import "./views/mycss1/Deals.css"
import "./views/mycss1/FacebookAdd.css"
import './views/apps/san-report/mycss2/Dashboard.css'
import './views/apps/san-report/mycss2/Reports.css'
import './views/apps/san-report/mycss2/FinancesSummary.css'
import "./views/mycss/CheckOut.css"

// ** Redux Imports
import { Provider } from 'react-redux'
import { store } from './redux/store'

// ** Intl, CASL & ThemeColors Context
import ability from './configs/acl/ability'
import { ToastContainer } from 'react-toastify'
import { AbilityContext } from './utility/context/Can'
import { ThemeContext } from './utility/context/ThemeColors'

// ** i18n
import './configs/i18n'

// ** Spinner (Splash Screen)
import Spinner from './@core/components/spinner/Fallback-spinner'

// ** Ripple Button
import './@core/components/ripple-button'

// ** Fake Database
import './@fake-db'

// ** PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min'

// ** React Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** React Toastify
import '@styles/react/libs/toastify/toastify.scss'

// ** Core styles
import './@core/assets/fonts/feather/iconfont.css'
import './@core/scss/core.scss'
import './assets/scss/style.scss'

// ** Service Worker
import * as serviceWorker from './serviceWorker'

// ** Lazy load app
const LazyApp = lazy(() => import('./App'))

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Spinner />}>
      <AbilityContext.Provider value={ability}>
        <ThemeContext>
          <LazyApp />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </AbilityContext.Provider>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

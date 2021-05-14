import Vue from 'vue'
import App from './App.vue'

/* Vues */
import router from './router'
import store from './store'

/* Mint UI */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Lazyload } from 'mint-ui'

/* fontfont-awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faShoppingCart, faList, faInfo, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* Use Vue */
Vue.use(MintUI)
Vue.use(Lazyload)

/* import font-awesome lib */
library.add(faHome)
library.add(faShoppingCart)
library.add(faList)
library.add(faInfo)
library.add(faPlusCircle)
library.add(faMinusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')

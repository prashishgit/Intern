import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  reset CSS
import "normalize.css/normalize.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css"
import Chat from 'vue-beautiful-chat';
import '@/styles/index.scss' // global css
import VCalendar from 'v-calendar';
import '@/permission' // permission control
import VueResource from 'vue-resource';
import PortalVue from 'portal-vue';
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)


// const cors = require('cors');
//  //app.use(cors());
//  App.use(
//      cors({
//         origin: "https://localhost:5001",
//         credentials: false
//      })
//  );

Vue.use(PortalVue)
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(VCalendar);

Vue.use(Chat)
new Vue({
    router,
    store,
    render: h => h(App),
    components: { App }
    
}).$mount("#app");

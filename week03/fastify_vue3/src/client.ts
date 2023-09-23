// {"swagger":"2.0","info":{"title":"Test swagger","description":"Testing the Fastify swagger API","version":"0.1.0"},"definitions":{},"paths":{"/":{"get":{"responses":{"200":{"description":"Default Response","schema":{"type":"object","properties":{"hello":{"type":"string"}},"required":["hello"]}}}}}},"host":"localhost","schemes":["http"],"consumes":["application/json"],"produces":["application/json"],"externalDocs":{"url":"https://swagger.io","description":"Find more info here"}}
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App).use(VueQueryPlugin).mount('#app')

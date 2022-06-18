import { createRouter, createWebHashHistory } from "vue-router"
import HomeLayout from "./views/HomeLayout.vue";
import NotFound from "./views/error/NotFound.vue";
import Overview from "./views/status/Overview.vue";
import Appstore from "./views/system/Appstore.vue";
// import Home from "./components/HelloWorld.vue";
// const IstioLayout = {
//   template: '<router-view></router-view>',
// }
// import ResourceEditor from "./views/resource/Editor.vue";
// const ResourceTable = () => import("./views/resource/Table.vue")

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: '/status/overview' },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: '/status', component: HomeLayout, children: [
      { path: 'overview', meta: {}, component: Overview },
    ]
  },
  {
    path: '/system', component: HomeLayout, children: [
      { path: 'appstore', meta: {}, component: Appstore },
    ]
  },
  // {
  //   path: '/istio', component: IstioLayout, children: [
  //     // { path: 'gateway', meta: { kind: 'Gateway' }, component: ResourceTable },
  //     // { path: 'gateway/create', meta: { kind: 'Gateway' }, component: ResourceEditor },
  //     // { path: 'gateway/edit', meta: { kind: 'Gateway' }, component: ResourceEditor },
  //     // { path: 'virtual-service', meta: { kind: 'VirtualService' }, component: ResourceTable },
  //     // { path: 'virtual-service/edit', meta: { kind: 'VirtualService' }, component: ResourceEditor },
  //     // { path: 'destination-rule', meta: { kind: 'DestinationRule' }, component: ResourceTable },
  //     // { path: 'destination-rule/edit', meta: { kind: 'DestinationRule' }, component: ResourceEditor },
  //   ]
  // }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
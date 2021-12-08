
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import './bootstrap'

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) })
      .mixin({
        methods: { route: window.route }
      })
      .use(plugin)

    app.mount(el)
  }

})

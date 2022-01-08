<script> 
import { h } from 'vue'
import SearchPage from './pages/SearchPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
import CardDetailPage from './pages/CardDetailPage.vue'

const routes = {
  '/': SearchPage,
  '/card/:cardId': CardDetailPage
}

export default {
    name: "Router",
    data: () => ({
        currentRoute: window.location.pathname
    }),
    computed: {
        CurrentComponent() {
            return routes[this.currentRoute] || NotFoundPage
        }
    },
    render() {
        return h(this.CurrentComponent)
    }
}
</script>
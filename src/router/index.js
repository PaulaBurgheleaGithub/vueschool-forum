import PageHome from '@/components/PageHome.vue';
import PageThreadShow from '@/components/PageThreadShow.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome
	},
	{
		path: '/thread/:id',
		name: 'ThreadShow',
		component: PageThreadShow,
		props: true
	}
]

// exporting a new router instance
export default createRouter({
	history: createWebHistory(),
	routes
});

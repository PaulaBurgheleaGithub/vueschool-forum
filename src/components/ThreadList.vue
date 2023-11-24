<template>
	<div class="col-full">

		<div class="thread-list">
			<h2 class="list-title">Threads</h2>

			<div v-for="thread in threads" :key="thread.id" class="thread">
				<div>
						<p>
							<a href="thread.html">{{thread.title}}</a>
						</p>
						<p class="text-faded text-xsmall">
							By <a href="profile.html">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt }}.
						</p>
				</div>
				<div class="activity">
						<p class="replies-count">
							{{ thread.posts.length }} 
							{{ (thread.posts.length > 1 || thread.posts.length === 0) ? "replies" : "reply" }}
						</p>

						<img class="avatar-medium"
							:src="userById(thread.userId).avatar"
							alt="avatar image">

						<div>
							<p class="text-xsmall">
								<a href="#">{{ userById(thread.userId).name }}</a>
							</p>
							<p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
						</div>
				</div>
			</div>

		</div>
		<!-- <ThreadDetails :threads="threads"/> -->
	</div>
</template>
<script>
// import ThreadDetails from './ThreadDetails.vue';
import sourceData from '@/data.json';

export default {
	props: {
		threads: {
			type: Array,
			reqired: true
		}
	},
	components: {
		// ThreadDetails
	},
	data() {
		return {
			posts: sourceData.posts,
			users: sourceData.users,
			thread: this.threads.id
		}
	},
	methods: {
		postById(postId) {
			return this.posts.find(p => p.id === postId)
		},
		userById(userId) {
			return this.users.find(p => p.id === userId)
		}
	}
}
</script>

<style>
</style>

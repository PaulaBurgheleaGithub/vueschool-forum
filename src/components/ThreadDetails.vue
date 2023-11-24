<template>
	<div>
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
</template>
<script>
import sourceData from '@/data.json';

export default {
	props: {
		thread: {
			type: Object,
			reqired: true
		}
	},
	data() {
		return {
			posts: sourceData.posts,
			users: sourceData.users
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

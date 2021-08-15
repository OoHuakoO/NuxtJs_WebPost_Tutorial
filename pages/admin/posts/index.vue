<template>
  <div>
    <PostList isAdmin :posts="loadData" />
  </div>
</template>
<script>
import PostList from '@/components/posts/PostList'

export default {
  components: {
    PostList,
  },
  layout: 'coreLayout',
  computed: {
    loadData() {
      return this.$store.getters.getAllPosts
    },
  },
}
</script>

<template>
  <b-col md="3">
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ content }}
      </b-card-text>
      <nuxt-link :to="postLink" class="btn btn-success">อ่านบทความ</nuxt-link>
    </b-card>
  </b-col>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/posts/${this.id}` : `/posts/${this.id}`
    },
  },
}
</script>

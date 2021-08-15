<template>
  <AdminForm @sendData="onSubmitted" :post="singlePost" />
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
  components: {
    AdminForm,
  },
  layout: 'coreLayout',
  async asyncData(context) {
    const singlePost = await axios
      .get(
        `https://nuxtkongruksiam-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${context.params.id}.json`
      )
      .then((res) => {
        return {
          ...res.data,
          id: context.params.id,
        }
      })
      .catch((err) => {
        context.error(err)
      })
    return { singlePost }
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('editPost', postData).then(() => {
        this.$router.push('/admin/posts')
      })
    },
  },
}
</script>

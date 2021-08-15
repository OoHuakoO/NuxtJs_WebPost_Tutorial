<template>
  <AdminForm @sendData="onSubmitted" />
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'

export default {
  components: {
    AdminForm,
  },
  layout: 'coreLayout',
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch('addPost', postData).then(() => {
        this.$router.push('/admin/')
      })
    },
  },
}
</script>

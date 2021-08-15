<template>
  <b-container fluid="md" class="py-2">
    <h2 align="center">เขียนบทความ</h2>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <b-form-group label="ชื่อบทความ">
        <b-form-input
          type="text"
          placeholder="ระบุชื่อบทความ"
          v-model="form.title"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="รายละเอียดบทความ">
        <b-form-textarea
          placeholder="รายละเอียดบทความ"
          row="8"
          v-model="form.content"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group label="รูปภาพ (Url)">
        <b-form-input
          type="text"
          placeholder="ระบุรูปภาพบทความ"
          v-model="form.image"
        >
        </b-form-input>
      </b-form-group>
      <b-form-group label="ผู้เขียน">
        <b-form-input
          type="text"
          placeholder="ระบุนามปากกา"
          v-model="form.author"
        >
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">บันทึก</b-button>
      <b-button type="reset" variant="danger">ล้าง</b-button>
    </b-form>
    <b-card header="result" class="mt-3">
      {{ form }}
    </b-card>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      form: this.post
        ? { ...this.post }
        : {
            title: '',
            content: '',
            image: '',
            author: '',
          },
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
    },
  },
  methods: {
    onSubmit(evt) {
      this.$emit('sendData', this.form)
    },
    onReset(evt) {
      evt.preventDefault()
      this.form.title = ''
      this.form.content = ''
      this.form.image = ''
      this.form.author = ''
    },
  },
}
</script>

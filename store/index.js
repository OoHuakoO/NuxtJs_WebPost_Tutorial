import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      // ข้อมูล
      loadData: [],
    },
    mutations: {
      //จัดการข้อมูลใน state
      setPostState(state, posts) {
        state.loadData = posts
      },
      addPostState(state, post) {
        state.loadData.push(post)
      },
      editPostState(state, editpost) {
        const postIndex = state.loadData.findIndex(
          (post) => post.id === editpost.id
        )
        state.loadData[postIndex] = editpost
      },
    },
    actions: {
      // ทำงานร่วมกับ backend เรียกใช้ผ่าน component
      async nuxtServerInit(vuexContext, context) {
        return await axios
          .get(
            'https://nuxtkongruksiam-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
          )
          .then((res) => {
            const data = []
            for (const key in res.data) {
              data.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPostState', data)
          })
          .catch((err) => {
            context.error(err)
          })
      },
      async addPost(vuexContext, post) {
        // รับค่าส่งมาจากการใช้คำสั่ง dispatch
        const createPost = { ...post }
        await axios
          .post(
            'https://nuxtkongruksiam-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
            createPost
          )
          .then((res) => {
            vuexContext.commit('addPostState', {
              ...createPost,
              id: res.data.name,
            })
          })
      },
      async editPost(vuexContext, post) {
        await axios
          .put(
            `https://nuxtkongruksiam-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${post.id}.json`,
            post
          )
          .then(() => {
            vuexContext.commit('editPostState', {
              ...post,
            })
          })
      },
    },
    getters: {
      // นำ state ไปใช้งาน
      getAllPosts(state) {
        return state.loadData
      },
    },
  })
}
export default createStore

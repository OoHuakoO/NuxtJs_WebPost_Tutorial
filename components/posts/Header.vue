<template>
  <div>
    <b-carousel id="slider" indicators controls>
      <div v-for="item in items" :key="item.index">
        <b-carousel-slide
          :caption="item.caption"
          :text="item.text"
          :img-src="item.image"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          caption: 'A',
          image: require('@/assets/image/test1.jpg'),
          text: 'Nulla vitae',
        },
        {
          caption: 'B',
          image: 'https://picsum.photos/1024/480/?image=31',
          text: 'Nulla vitae',
        },
        {
          caption: 'C',
          image: 'https://picsum.photos/1024/480/?image=32',
          text: 'Nulla vitae',
        },
        {
          caption: 'D',
          image: 'https://picsum.photos/1024/480/?image=32',
          text: 'Nulla vitae',
        },
      ],
    }
  },
}
</script>

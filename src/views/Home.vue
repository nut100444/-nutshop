<template>
 <div class="home">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000 "
        fade
        indicators
        img-width="1024"
        img-height="250"
      >
        <b-carousel-slide
        style="height:30rem"
          
          img-src="https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/BLACKPACK-HP%20%281%29.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
        style="height:30rem"
          
          img-src="https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/COPA%20SENSE%20HP.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
        style="height:30rem"
         
          img-src="https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/SPECTRUM%20-HP.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- {{ShowSelect}} -->
    <div class="row">
      <HelloWorld
        class="col-3"
        v-for="(item, index) in Menu"
        :key="index"
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :index="index"
        @Order="menuorder"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
},
computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    ...mapGetters(["Menu","ShowSelect"]),
  },
}



</script>

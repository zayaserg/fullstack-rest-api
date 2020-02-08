<template>
  <div class="home container m-auto ">
    <div v-for="card in cards" :key="card.id" class="w-1/2 p-2">
      <ImageCard :data="card" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    ImageCard
  },
  computed: {
    ...mapState(["cards"])
  }
};
</script>
<style scoped>
.home {
  @apply py-10 flex flex-wrap;
}
</style>

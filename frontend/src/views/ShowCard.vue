<template>
  <div class="container mx-auto pt-4 flex justify-center">
    <!-- <h1>jfgjfghj {{ id }}</h1> -->
    <ImageCard :data="card" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ImageCard from "@/components/ImageCard";
export default {
  name: "ShowCard",
  props: ["id"],
  components: {
    ImageCard
  },
  created() {
    this.$store.dispatch("fetchCard", this.id);
    console.log(this.card);
  },
  computed: {
    ...mapState(["card"])
  }
};
</script>

<style lang="scss" scoped></style>

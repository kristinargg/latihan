<template>
  <v-container id="article">
    <article-display />
  </v-container>
</template>
<script>
import ArticleDisplay from "@/components/ArticleDisplay.vue";
export default {
  name: "ArticleNews",
  components: {
    ArticleDisplay,
  },
};
</script>
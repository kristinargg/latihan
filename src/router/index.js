import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue";
import ArticleNews from "@/views/ArticleNews.vue";
import DetailsNews from "@/views/DetailsNews.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "ArticleNews",
        component: ArticleNews,
      },
      {
        path: "/detail/:id",
        name: "DetailsNews",
        component: DetailsNews,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

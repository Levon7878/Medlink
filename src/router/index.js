import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home/Home.vue";
import CaseStudies from "../pages/Case Studies/CaseStudies.vue";
import BreastCancer from "../pages/Breast Cancer/BreastCancer.vue";
import VideoInterviewSessionPage from "../pages/Video Interview Session/VideoInterviewSessionPage.vue";
import ConditionPage from "../pages/Condition/ConditionPage.vue";
import About from "../pages/About/About.vue";
import InfoPage from "../pages/Info/InfoPage.vue";
import NotFound from "../components/Errors/NotFound.vue";
import { getConditionBySlug } from "../data/conditions";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
  { path: "/case-studies", component: CaseStudies },
  { path: "/breast-cancer", component: BreastCancer },
  { path: "/video-interview", component: VideoInterviewSessionPage },
  {
    path: "/contact",
    component: InfoPage,
    meta: { pageKey: "contact" },
  },
  {
    path: "/privacy",
    component: InfoPage,
    meta: { pageKey: "privacy" },
  },
  {
    path: "/terms",
    component: InfoPage,
    meta: { pageKey: "terms" },
  },
  {
    path: "/advertising",
    component: InfoPage,
    meta: { pageKey: "advertising" },
  },
  {
    path: "/do-not-sell",
    component: InfoPage,
    meta: { pageKey: "do-not-sell" },
  },
  {
    path: "/sitemap",
    component: InfoPage,
    meta: { pageKey: "sitemap" },
  },
  {
    path: "/conditions/:slug",
    component: ConditionPage,
    beforeEnter: (to) => {
      if (!getConditionBySlug(to.params.slug)) {
        return { path: "/not-found" };
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

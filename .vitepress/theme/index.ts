import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { useData, useRoute } from 'vitepress'
import CommentLayout from './layouts/CommentLayout.vue'

export default {
  extends: DefaultTheme,
  Layout: CommentLayout,
  enhanceApp({ app, router, siteData }) {},
  setup() {
    const { frontmatter } = useData()
    const route = useRoute()

    giscusTalk(
      {
        repo: 'OwenXu5/rlcn-solution-website',
        repoId: 'R_kgDORijT4Q',
        category: 'General',
        categoryId: 'DIC_kwDORijT4c4C4CLQ',
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
        darkTheme: 'dark_dimmed',
        theme: 'light',
        homePageShowComment: false,
        strict: false
      },
      { frontmatter, route }
    )
  }
} satisfies Theme

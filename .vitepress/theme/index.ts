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

    // Giscus Setup Instructions:
    // 1. Enable GitHub Discussions in repo Settings (Settings > General > Features > Discussions)
    // 2. Install Giscus app: https://github.com/apps/giscus
    // 3. Get repo/category IDs from: https://giscus.app/
    // 4. Replace PLACEHOLDER_REPO_ID and PLACEHOLDER_CATEGORY_ID with actual values
    giscusTalk(
      {
        repo: 'OwenXu5/rlcn-solution-website',
        repoId: 'PLACEHOLDER_REPO_ID',
        category: 'General',
        categoryId: 'PLACEHOLDER_CATEGORY_ID',
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
        darkTheme: 'dark_dimmed',
        theme: 'light',
        homePageShowComment: false,
        strict: true
      },
      { frontmatter, route }
    )
  }
} satisfies Theme

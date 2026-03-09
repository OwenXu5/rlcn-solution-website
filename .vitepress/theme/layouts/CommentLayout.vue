<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

// Show CTA on all pages except homepage
const showCTA = computed(() => {
  return route.path !== '/' && route.path !== '/index.html'
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <div v-if="showCTA" class="comment-cta">
        <h3>有疑问？</h3>
        <p>在评论区提问或加入我们的 QQ 群：<strong>552721789</strong></p>
        <p class="cta-hint">你的问题可能会成为下一篇文档的主题！</p>
      </div>
    </template>
  </Layout>
</template>

<style>
.comment-cta {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border-left: 4px solid var(--vp-c-brand);
}

.comment-cta h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.comment-cta p {
  margin: 0.5rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.comment-cta strong {
  color: var(--vp-c-brand);
  font-weight: 600;
}

.cta-hint {
  font-size: 0.9rem;
  font-style: italic;
  opacity: 0.8;
}

@media (max-width: 640px) {
  .comment-cta {
    padding: 1rem;
  }

  .comment-cta h3 {
    font-size: 1.1rem;
  }
}
</style>

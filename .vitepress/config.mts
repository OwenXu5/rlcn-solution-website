import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'RLCN 解忧杂货铺',
  description: '本仓库将提供在中国游玩火箭联盟（Rocket League）时可能遇到的问题的解决方案。内容持续补充中！',
  appearance: true,
  lang: 'zh-CN',
  lastUpdated: true,
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        outline: {
          label: '页面导航'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        sidebarMenuLabel: '菜单'
      }
    }
  },
  
  themeConfig: {
    logo: {
      src: '/logo.png',
      alt: 'RLCN Logo'
    },
    
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '解决方案', 
        items: [
          { text: '连接不上服务器', link: '/solutions/server-connection' },
          { text: '如何获取游戏', link: '/solutions/getting-game' }
        ] 
      }
    ],
    
    sidebar: [
      {
        text: '问题列表',
        items: [
          { text: '连接不上服务器', link: '/solutions/server-connection' },
          { text: '如何获取游戏', link: '/solutions/getting-game' }
        ]
      }
    ],
    
    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/OwenXu5/rlcn-solution-website' 
      },
      { 
        icon: 'discord', 
        link: 'https://qq.com', 
        ariaLabel: 'QQ 群：552721789' 
      }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026 RLCN 解忧杂货铺'
    },
    
    outline: {
      level: 'deep'
    },
    
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '清除查询',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})

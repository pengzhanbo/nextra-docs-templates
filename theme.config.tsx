import type { DocsThemeConfig } from 'nextra-theme-docs'
// import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 800 }}>Logo</span>,
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
  project: {
    link: 'https://github.com',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com',
  darkMode: true,
  primaryHue: 210,
  search: {
    placeholder: '文档搜索'
  },
  head: function useHead() {
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="zh-CN" />
        <meta
          name="description"
          content="Make beautiful websites with Next.js & MDX."
        />
      </>
    )
  },
  editLink: {
    text: '在GitHub中编辑此页面 →'
  },
  feedback: {
    content: '遇到问题？请给我反馈 →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <p className="text-xs">
        copyright © {new Date().getFullYear()}-present this project.
      </p>
    ),
  },
}

export default config

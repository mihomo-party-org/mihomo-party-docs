import React from "react";
import Logo from "./components/logo";
import { FaTelegramPlane } from "react-icons/fa";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({
    titleTemplate: "%s - Mihomo Party - 一个更易用的客户端",
  }),
  logo: <Logo style={{ height: "24px" }} />,
  docsRepositoryBase:
    "https://github.com/mihomo-party-org/mihomo-party-docs/edit/master",
  project: {
    link: "https://github.com/mihomo-party-org/mihomo-party",
  },
  feedback: {
    content: undefined,
  },
  editLink: {
    text: "在 GitHub 上编辑此页",
  },
  toc: {
    title: "目录",
  },
  search: {
    placeholder: "搜索文档",
  },
  themeSwitch: {
    useOptions: {
      system: "自动",
      light: "浅色",
      dark: "深色",
    },
  },
  darkMode: true,
  chat: {
    icon: <FaTelegramPlane style={{ fontSize: 24 }} />,
    link: "https://t.me/mihomo_party_group",
  },
  footer: {
    text: "GPL-3.0 © mihomo-party.",
  },
};

export default config;

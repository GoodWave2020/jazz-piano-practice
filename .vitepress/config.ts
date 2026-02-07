import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ジャズピアノ習得ロードマップ",
  description: "ピアノトリオでライブ演奏できるレベルを目指す3〜5年計画",
  lang: "ja-JP",

  themeConfig: {
    nav: [
      { text: "ホーム", link: "/" },
      { text: "ロードマップ", link: "/phases/phase-0-preparation" },
      { text: "ガイド", link: "/guides/lesson-strategy" },
    ],

    sidebar: [
      {
        text: "はじめに",
        items: [{ text: "概要", link: "/" }],
      },
      {
        text: "ロードマップ",
        items: [
          {
            text: "Phase 0 - レッスン開始準備",
            link: "/phases/phase-0-preparation",
          },
          {
            text: "Phase 1 - 鍵盤の基礎固め",
            link: "/phases/phase-1-foundations",
          },
          {
            text: "Phase 2 - ジャズの語彙を増やす",
            link: "/phases/phase-2-vocabulary",
          },
          {
            text: "Phase 3 - アドリブとコンピングの実践",
            link: "/phases/phase-3-improvisation",
          },
          {
            text: "Phase 4 - トリオ演奏の総合力",
            link: "/phases/phase-4-trio",
          },
        ],
      },
      {
        text: "ガイド",
        items: [
          { text: "レッスン戦略", link: "/guides/lesson-strategy" },
          { text: "練習ルール", link: "/guides/practice-rules" },
          { text: "推奨リソース", link: "/guides/resources" },
          { text: "楽器アップグレード計画", link: "/guides/equipment" },
        ],
      },
    ],

    outline: {
      label: "目次",
      level: [2, 3],
    },

    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },
  },
});

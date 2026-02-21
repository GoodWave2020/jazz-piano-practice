import { defineConfig } from "vitepress";

const BASE_PATH = process.env.VITEPRESS_BASE || "/";

const NAV_ITEMS = [
  { text: "ホーム", link: "/" },
  { text: "ロードマップ", link: "/phases/phase-0-preparation" },
  { text: "ガイド", link: "/guides/lesson-strategy" },
];

const ROADMAP_ITEMS = [
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
    text: "Phase 4 - セッションホスト運営力",
    link: "/phases/phase-4-trio",
  },
];

const GUIDE_LEARNING_ITEMS = [
  { text: "レッスン戦略", link: "/guides/lesson-strategy" },
  { text: "練習ルール", link: "/guides/practice-rules" },
  { text: "推奨リソース", link: "/guides/resources" },
  { text: "楽器アップグレード計画", link: "/guides/equipment" },
];

const GUIDE_HARMONY_ITEMS = [
  { text: "コード進行パターン", link: "/guides/chord-progressions" },
  { text: "ボイシングパターン", link: "/guides/voicing-patterns" },
  { text: "ピアニスト定番奏法", link: "/guides/pianistic-techniques" },
];

const GUIDE_IMPROVISATION_ITEMS = [
  { text: "即興フレーズ設計", link: "/guides/improvisation-phrasing" },
  { text: "アルペジオ練習", link: "/guides/arpeggio-practice" },
  { text: "スケール練習", link: "/guides/scale-practice" },
  { text: "ブルース・ダブルストップ", link: "/guides/blues-double-stops" },
  { text: "ビバップ特化練習", link: "/guides/bebop-practice" },
  { text: "ロバート・グラスパー奏法", link: "/guides/glasper-practice" },
];

const GUIDE_PRACTICE_ITEMS = [
  { text: "イヤートレーニング", link: "/guides/ear-training" },
  { text: "スタンダード一覧", link: "/guides/repertoire" },
];

const SONG_ANALYSIS_ITEMS = [
  { text: "分析一覧", link: "/song-analyses/" },
  { text: "Autumn Leaves", link: "/song-analyses/autumn-leaves" },
  { text: "Blue Bossa", link: "/song-analyses/blue-bossa" },
  { text: "Just Friends", link: "/song-analyses/just-friends" },
  { text: "Stablemates", link: "/song-analyses/stablemates" },
  { text: "Stella By Starlight", link: "/song-analyses/stella-by-starlight" },
  { text: "Wave", link: "/song-analyses/wave" },
  { text: "Oleo", link: "/song-analyses/oleo" },
];

const SEARCH_TRANSLATIONS = {
  button: {
    buttonText: "検索",
    buttonAriaLabel: "検索",
  },
  modal: {
    displayDetails: "詳細を表示",
    resetButtonTitle: "リセット",
    backButtonTitle: "戻る",
    noResultsText: "見つかりませんでした",
    footer: {
      selectText: "選択",
      navigateText: "移動",
      closeText: "閉じる",
    },
  },
};

export default defineConfig({
  title: "ジャズピアノ習得ロードマップ",
  description: "セッションホストとして演奏と進行を担えるレベルを目指す3〜5年計画",
  lang: "ja-JP",
  base: BASE_PATH,

  themeConfig: {
    nav: NAV_ITEMS,

    sidebar: [
      {
        text: "はじめに",
        items: [{ text: "概要", link: "/" }],
      },
      {
        text: "ロードマップ",
        items: ROADMAP_ITEMS,
      },
      {
        text: "ガイド: 学習設計",
        items: GUIDE_LEARNING_ITEMS,
      },
      {
        text: "ガイド: ハーモニー",
        items: GUIDE_HARMONY_ITEMS,
      },
      {
        text: "ガイド: 即興",
        items: GUIDE_IMPROVISATION_ITEMS,
      },
      {
        text: "ガイド: 実践",
        items: GUIDE_PRACTICE_ITEMS,
      },
      {
        text: "曲分析",
        items: SONG_ANALYSIS_ITEMS,
      },
    ],

    outline: {
      label: "目次",
      level: [2, 3],
    },

    search: {
      provider: "local",
      options: {
        translations: SEARCH_TRANSLATIONS,
      },
    },

    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },
  },
});

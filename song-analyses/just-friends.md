# Just Friends 分析

`Just Friends` を、メジャー標準曲の中でも「サブドミナントマイナーと循環接続」を学ぶ題材として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Just Friends.json`（Gキー表記）を、セッション想定のFキーへ移調して記述している。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Just Friends |
| Composer | John Klenner |
| Key | F |
| Rhythm | Medium Swing |
| Time Signature | 4/4 |
| Form | A（8小節）+ B（8小節）+ A（8小節）+ C（8小節） = 32小節（ABAC） |

メモ:
- JSONの原データは `G` だが、本ページでは実践上よく使う `F` で統一している。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A1（1-8） | Fメジャー（IV起点） | `Bbmaj7` から入り、`Bbm7-Eb7`（iv-♭VII7）でIへ戻す |
| B（9-16） | Fメジャー中心 + 循環接続 | `Gm7-C7-F` の基本終止と、次Aへ向かう `Cm7-F7` を配置 |
| A2（17-24） | Fメジャー（A1反復） | サブドミナントマイナーを再提示してフォームを固定 |
| C（25-32） | Fメジャー + Dマイナー局所化 | `Em7b5-A7b9-Dm7` でマイナーii-V-iを挿入し、最終的にFへ回帰 |

要点:
- メジャー標準曲だが、`Bbm7-Eb7` と `Abm7-Db7` のような借用・外側接続が多い。
- A終端/B終端の `ii-V` が、次セクションへ進めるための「橋」として機能する。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（iv-♭VII7-I を含む）

<AbcNotation abc='
X:1
T:Just Friends A (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Bbmaj7 (Ion-Lyd)"A4 | "Bbmaj7 (Ion-Lyd)"A4 | "Bbm7 (Dor)"_D4 | "Eb7 (Mix-Lydb7)"G4 |
"Fmaj7 (Ion-Lyd)"A4 | "Fmaj7 (Ion-Lyd)"A4 | "Abm7 (Dor)"B4 | "Db7 (Mix-Lydb7)"F4 |
' />

### Bセクション（ii-V-I + 循環接続）

<AbcNotation abc='
X:1
T:Just Friends B (Cycle Connection)
M:4/4
L:1/4
K:C
"Gm7 (Dor)"_B4 | "C7 (Mix-Alt)"E4 | "Fmaj7 (Ion-Lyd)"A4 | "Dm7 (Dor)"F4 |
"G7 (Mix-Alt)"B4 | "Gm7 (Dor)"_B2 "C7 (Mix-Alt)"E2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 |
' />

### Cセクション（マイナーiiø-V-i挿入）

<AbcNotation abc='
X:1
T:Just Friends C (Minor Insert)
M:4/4
L:1/4
K:C
"Gm7 (Dor)"_B4 | "C7 (Mix-Alt)"E4 | "Em7b5 (Loc)"G2 "A7b9 (PhryDom-Alt)"^C2 | "Dm7 (Dor)"F4 |
"G7 (Mix-Alt)"B2 "Gm7 (Dor)"_B2 | "C7 (Mix-Alt)"E2 "F6 (Ion)"A2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 | "Bbmaj7 (Ion-Lyd)"A4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Lydb7` = Lydian b7
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Loc` = Locrian
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A 前半 | `Bbmaj7 -> Bbm7 -> Eb7 -> Fmaj7` | IV開始 + バックドア終止 | Bb Ion-Lyd / Bb Dorian / Eb Mix or Lydb7 / F Ion-Lyd |
| A 後半 | `Abm7 -> Db7 -> Gm7` | 外側ii-V接続 | Ab Dorian / Db Mix or Lydb7 / G Dorian |
| B | `Gm7 -> C7 -> F` + `... -> Cm7,F7` | ii-V-I + 循環接続 | G Dorian / C Mix / F Ion-Lyd + C Dorian / F Mix |
| C | `Em7b5 -> A7b9 -> Dm7` | マイナーiiø-V-i挿入 | E Locrian / A PhryDom or Altered / D Dorian |

---

## セクション別コード機能

### A（8小節）

- `Bbmaj7 -> Bbmaj7`  
  Fメジャーに対する `IV`（安定した開始）
- `Bbm7 -> Eb7 -> Fmaj7`  
  `iv-♭VII7-I`（サブドミナントマイナー + バックドア）
- `Abm7 -> Db7`  
  次小節 `Gm7` へ向かうクロマチック接続（半音上からのii-V）

### B（8小節）

- `Gm7 -> C7 -> Fmaj7`  
  Fの `ii-V-I`
- `Dm7 -> G7`  
  C方面への `ii-V`（局所ドミナント化）
- `Gm7,C7 -> Cm7,F7`  
  F解決とBb解決をまたぐ循環接続

### C（8小節）

- `Gm7 -> C7`  
  まずFへの `ii-V`
- `Em7b5,A7b9 -> Dm7`  
  Dマイナーへの `iiø-V-i`
- `G7 -> Gm7,C7 -> F6`  
  ドミナント連結から最終トニックへ回帰
- `Cm7,F7`  
  次コーラス頭の `Bbmaj7` に向かうターン準備

---

## ガイドトーン接続（3rd/7th）

まずは各小節の `1拍目` だけを決めて、線を安定させる。

| 進行 | 着地候補（例） |
|------|----------------|
| Bbm7 -> Eb7 -> Fmaj7 | `Db -> G -> A`（3rd連結） |
| Gm7 -> C7 -> Fmaj7 | `Bb -> E -> A`（3rd連結） |
| Em7b5 -> A7b9 -> Dm7 | `G -> C# -> F`（3rd連結） |
| Cm7 -> F7 -> Bbmaj7 | `Eb -> A -> D`（次A導入の3rd連結） |

実践ルール:
1. 強拍は `3rd` か `7th` を固定
2. `Bbm7-Eb7` と `Abm7-Db7` は「外側接続」として音数を減らす
3. セクション末尾の `ii-V` は、次セクション頭の着地音まで含めて設計する

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Bbmaj7 | Bb Ionian / Lydian | 9th（C）, 13th（G） |
| Bbm7 | Bb Dorian | 9th（C）, 11th（Eb） |
| Eb7 | Eb Mixolydian / Lydian b7 | バックドアでは #11（A）を弱拍で使い、`Fmaj7` の3rd（A）へ接続 |
| Fmaj7 / F6 | F Ionian / Lydian | 9th（G）, 13th（D） |
| Abm7 | Ab Dorian | 9th（Bb）を短く使用 |
| Db7 | Db Mixolydian / Lydian b7 | 13th（Bb）か #11（G）を弱拍で使用 |
| Gm7 | G Dorian | 9th（A）, 11th（C） |
| C7 | C Mixolydian / Altered | b9（Db）を解決前に短く使用 |
| Em7b5 | E Locrian | 11th（A）中心 |
| A7b9 | A Phrygian Dominant / Altered | b9（Bb）, b13（F）でDmへ解決 |
| Dm7 | D Dorian | 9th（E）, 11th（G） |
| G7 | G Mixolydian / Altered | B（3rd）着地を優先 |
| Cm7,F7 | C Dorian / F Mixolydian | 次のBbmaj7への接続を最優先 |

優先順位:
1. Aセクションの `iv-♭VII7-I` をコードトーンで安定化
2. B/Cの `ii-V` 連鎖を3rd着地で統一
3. `A7b9` と `C7` のみテンションを強めてコントラストを作る

補足（Aセクションのバックドア）:
- `Bbm7 -> Eb7 -> Fmaj7` の `Eb7` は、標準の `Mixolydian` に加えて `Lydian b7` も有効。
- 特に `#11（A）` は次コード `Fmaj7` の `3rd（A）` と共通し、解決感を作りやすい。

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: Aの借用和音（`Bbm7-Eb7`）とF解決の差を耳で固定

### 2. 中級（ルートレスA/B）

- `Bbmaj7-Bbm7-Eb7-Fmaj7` を同ポジションで処理し、内声の半音移動を強調
- `Gm7-C7-Fmaj7-Dm7-G7` はトップノートの連続性を優先

### 3. 終端処理（B末尾 / C末尾）

- `Cm7-F7` は次の `Bbmaj7` までを1フレーズとして弾く
- 末尾だけ2フィール気味に整理すると、次頭が入りやすい

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | Aの `Bbmaj7-Bbm7-Eb7-Fmaj7` をガイドトーンのみで反復 |
| 3分 | A末尾 `Abm7-Db7 -> Gm7` の接続だけ反復 |
| 3分 | Bの `Gm7-C7-F` と `Dm7-G7` を分離して練習 |
| 3分 | Cの `Em7b5-A7b9-Dm7` を重点反復 |
| 3分 | 1コーラス通し（骨格→弱拍テンション） |

到達基準:
- ✅ Aのサブドミナントマイナー区間でフォームを見失わない
- ⭐ B/Cの `ii-V` 連鎖を強拍着地で1コーラス通せる
- 🔥 外側接続（`Abm7-Db7`）を含めてもテンポ維持して演奏できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)

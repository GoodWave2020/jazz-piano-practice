# Autumn Leaves 分析

`Autumn Leaves` を「暗譜対象」ではなく、**即興とコンピングに直結する構造**として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Autumn Leaves.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Autumn Leaves |
| Composer | Joseph Kosma |
| Key | Gm |
| Rhythm | Medium Swing |
| Time Signature | 4/4 |
| Form | A（8小節）×2 + B（8小節）+ C（8小節） = 32小節 |

メモ:
- JSONでは Aセクションに `Repeats: 1` があるため、実運用上はAが2回出る32小節として扱える。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A1（1-8） | B♭メジャー → Gマイナー | `ii-V-I-IV` から `iiø-V-i` へ接続する基本形 |
| A2（9-16） | B♭メジャー → Gマイナー | A1を反復してフォームを安定化 |
| B（17-24） | Gマイナー → B♭メジャー | 先にマイナー解決してからメジャーへ戻る対比 |
| C（25-32） | Gマイナー中心 | ii-V-i の再提示 + 終盤クロマチック接続 |

要点:
- 1コーラス内で **相対調（B♭メジャー / Gマイナー）を往復**する。
- まずは「4小節単位でキーセンターを切り替える」感覚を固定する。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（メジャーii-V-I-IV + マイナーiiø-V-i）

<AbcNotation abc='
X:1
T:Autumn Leaves A (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Cm7 (Dor)"_E4 | "F7 (Mix)"A4 | "Bbmaj7 (Ion-Lyd)"D4 | "Ebmaj7 (Lyd)"G4 |
"Am7b5 (Loc)"C4 | "D7b13 (Mixb13-Alt)"^F4 | "Gm6 (Dor)"_B4 | "Gm6 (Dor)"_B4 |
' />

### Bセクション（マイナー終止からメジャー回帰）

<AbcNotation abc='
X:1
T:Autumn Leaves B (Minor to Major Return)
M:4/4
L:1/4
K:C
"Am7b5 (Loc)"C4 | "D7b13 (Mixb13-Alt)"^F4 | "Gm6 (Dor)"_B4 | "Gm6 (Dor)"_B4 |
"Cm7 (Dor)"_E4 | "F7 (Mix)"A4 | "Bbmaj7 (Ion-Lyd)"D4 | "Ebmaj7 (Lyd)"G4 |
' />

### Cセクション（クロマチック挿入）

<AbcNotation abc='
X:1
T:Autumn Leaves C (Chromatic Insert)
M:4/4
L:1/4
K:C
"Am7b5 (Loc)"C2 "D7b13 (Mixb13-Alt)"^F2 | "Gm7 (Dor)"_B2 "Gb7 (Mix)"_B2 |
"Fm7 (Dor)"_A2 "E7 (Mix-Alt)"^G2 | "Am7b5 (Loc)"C2 "D7b13 (Mixb13-Alt)"^F2 |
"Gm6 (Dor)"_B4 | "Gm6 (Dor)"_B4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Loc` = Locrian
- `Alt` = Altered

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A 前半 | `Cm7 -> F7 -> Bbmaj7 -> Ebmaj7` | メジャーii-V-I-IV | C Dorian / F Mixolydian / Bb Ionian / Eb Lydian |
| A 後半 | `Am7b5 -> D7b13 -> Gm6` | マイナーiiø-V-i | A Locrian / D Mixolydian b13 or Altered / G Dorian |
| B | `iiø-V-i` から `ii-V-I-IV` | マイナー→メジャー回帰 | A Locrian / D系V7 / G Dorian → C Dorian / F Mix / Bb Ion |
| C | `Gm7,Gb7 -> Fm7,E7` | クロマチック挿入 | G Dorian / Gb Mixolydian / F Dorian / E Mixolydian or Altered |

---

## セクション別コード機能

### A（8小節）

- `Cm7 -> F7 -> Bbmaj7 -> Ebmaj7`  
  B♭メジャーでの `ii-V-I-IV`
- `Am7b5 -> D7b13 -> Gm6 -> Gm6`  
  Gマイナーでの `iiø-V-i`

### B（8小節）

- `Am7b5 -> D7b13 -> Gm6 -> Gm6`  
  先にマイナー終止を提示
- `Cm7 -> F7 -> Bbmaj7 -> Ebmaj7`  
  A前半へ回帰

### C（8小節）

- `Am7b5 -> D7b13`  
  まず通常の `iiø-V`
- `Gm7,Gb7 -> Fm7,E7`  
  半音下降の挿入。次の `Am7b5` へ向かうクロマチック接続として機能
- `Am7b5 -> D7b13 -> Gm6 -> Gm6`  
  最終のマイナー解決

---

## ガイドトーン接続（3rd/7th）

最初は「各小節の1拍目だけ」次の着地を固定する。

| 進行 | 着地候補（例） |
|------|----------------|
| Cm7 -> F7 -> Bbmaj7 | `Eb -> A -> D`（3rd連結） |
| Am7b5 -> D7 -> Gm6 | `C -> F# -> Bb`（3rd連結） |
| D7 -> Gm6 | `F# -> G` か `C -> Bb`（半音/全音解決） |

実践ルール:
1. 強拍は `3rd` か `7th` に固定
2. 弱拍だけ経過音やテンションを使う
3. 小節をまたぐ時は半音/全音の最短接続を優先

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Cm7 | C Dorian | 9th（D）, 11th（F） |
| F7 | F Mixolydian | 9th（G）, 13th（D） |
| Bbmaj7 | Bb Ionian / Lydian | 9th（C）, 13th（G） |
| Ebmaj7 | Eb Lydian | #11（A）で色付け可 |
| Am7b5 | A Locrian | 11th（D）中心 |
| D7b13 | D Mixolydian b13 / Altered | b9（Eb）, b13（Bb）を弱拍で使用 |
| Gm6 / Gm7 | G Dorian / Melodic minor文脈 | 9th（A）, 11th（C） |

優先順位:
1. まずコードトーンだけで1コーラス
2. 次に `D7` だけテンション強化
3. 最後に `Ebmaj7` の #11 など色彩音を追加

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: 進行の機能と解決方向を耳で固定

### 2. 中級（ルートレスA/B）

- `Cm7-F7-Bbmaj7` を同ポジションで接続
- `Am7b5-D7-Gm6` はトップノートの下降線を作る

### 3. Cセクション対策

- `Gm7-Gb7-Fm7-E7` はリズムを詰めすぎない
- 2拍ずつ短いヒットで「経過区間」として扱うと崩れにくい

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | A前半 `ii-V-I-IV` を3rd着地だけで反復 |
| 3分 | A後半 `iiø-V-i` を3rd/7th着地で反復 |
| 3分 | Bを「マイナー→メジャー回帰」として通す |
| 3分 | Cのクロマチック区間（`Gm7,Gb7 -> Fm7,E7`）のみ反復 |
| 3分 | 1コーラス通し（骨格のみ→弱拍テンション追加） |

到達基準:
- ✅ `ii-V-I` と `iiø-V-i` の切り替えで迷わない
- ⭐ 強拍3rd/7thを維持して1コーラス通せる
- 🔥 Cセクションを含めてテンポを上げてもフォームを見失わない

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)

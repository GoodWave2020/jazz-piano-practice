# Oleo 分析

`Oleo` を、セッションで最も呼ばれやすい Rhythm Changes 系の基準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Oleo.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Oleo |
| Composer | Sonny Rollins |
| Key | B♭ |
| Rhythm | Up Tempo Swing |
| Time Signature | 4/4 |
| Form | A（8小節）+ B（8小節）+ A（8小節） = 24小節（JSON記法） |

メモ:
- JSONは1つ目のAに `1番カッコ/2番カッコ` 相当のエンディングを持つ書き方になっている。
- 実セッションでは32小節AABAのRhythm Changes運用として扱われることが多い。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A1（1-8） | B♭メジャー中心 | ターンアラウンド連鎖 + 1番カッコで次Aへ接続 |
| B（9-16） | ドミナント連鎖 | `D7 -> G7 -> C7 -> F7` の4小節単位連鎖 |
| A2（17-24） | B♭メジャー中心 | A素材を再提示し、最終 `Bb6` で終止 |

要点:
- Aは「I-VI-ii-V」発想をベースに、ii-V連鎖を圧縮した語彙として覚える。
- Bは機能分析より、4つのドミナントを一定リズムで処理する実戦力が重要。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（1番カッコ接続）

<AbcNotation abc='
X:1
T:Oleo A (Guide-Tone Skeleton, 1st ending)
M:4/4
L:1/4
K:C
"Bbmaj7 (Ion)"D2 "G7 (Mix-Alt)"B2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 | "Dm7 (Dor)"F2 "G7 (Mix-Alt)"B2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 |
"Fm7 (Dor)"_A2 "Bb7 (Mix)"D2 | "Eb7 (Mix)"G2 "Ab7 (Mix)"C2 | "Dm7 (Dor)"F2 "G7 (Mix-Alt)"B2 | "Cm7 (Dor)"_E2 "F7 (Mix)"A2 |
' />

### Aセクション（2番カッコ終止）

<AbcNotation abc='
X:1
T:Oleo A (2nd ending to tonic)
M:4/4
L:1/4
K:C
"Cm7 (Dor)"_E2 "F7 (Mix)"A2 | "Bb6 (Ion)"D4 |
' />

### Bセクション（ドミナント連鎖）

<AbcNotation abc='
X:1
T:Oleo B (Dominant Chain Guide-Tones)
M:4/4
L:1/4
K:C
"D7 (Mix-Alt)"^F2 C2 | "D7 (Mix-Alt)"^F2 C2 | "G7 (Mix-Alt)"B2 F2 | "G7 (Mix-Alt)"B2 F2 |
"C7 (Mix-Alt)"=E2 _B2 | "C7 (Mix-Alt)"=E2 _B2 | "F7 (Mix-Alt)"A2 _E2 | "F7 (Mix-Alt)"A2 _E2 |
' />

略号:
- `Ion` = Ionian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Alt` = Altered

### 小節別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A1 前半 | `Bbmaj7,G7 -> Cm7,F7` | I→VI7→ii→V（ターンアラウンド核） | Bb Ionian / G Mixolydian / C Dorian / F Mixolydian |
| A1 中盤 | `Dm7,G7 -> Cm7,F7` | ii-V の反復接続 | D Dorian / G Mixolydian / C Dorian / F Mixolydian |
| A1 後半 | `Fm7,Bb7 -> Eb7,Ab7` | サブドミナント展開 + 外側接続 | F Dorian / Bb Mixolydian / Eb Mixolydian / Ab Mixolydian |
| A1 1番カッコ | `Dm7,G7 -> Cm7,F7` | 次Aに戻す接続終止 | D Dorian / G Mixolydian / C Dorian / F Mixolydian |
| B | `D7 -> G7 -> C7 -> F7` | ドミナント連鎖（4度進行） | 各ドミナントで Mixolydian（必要に応じて Altered） |
| A2 2番カッコ | `Cm7,F7 -> Bb6` | 最終終止（ii-V-I） | C Dorian / F Mixolydian / Bb Ionian |

---

## セクション別コード機能

### A（8小節）

- `Bbmaj7,G7 -> Cm7,F7 -> Dm7,G7 -> Cm7,F7`  
  Rhythm Changes のAで典型的なターンアラウンド系連鎖
- `Fm7,Bb7 -> Eb7,Ab7`  
  サブドミナント側への展開と次接続の準備
- 1番カッコ: `Dm7,G7 -> Cm7,F7`（次のAへ戻す）  
  2番カッコ: `Cm7,F7 -> Bb6`（最終終止）

### B（8小節）

- `D7 | D7 | G7 | G7 | C7 | C7 | F7 | F7`  
  4度進行のドミナント連鎖。各2小節を1塊として扱うと安定しやすい。

---

## ガイドトーン接続（3rd/7th）

最初はAとBで別々に設計し、最後に通して接続する。

| 進行 | 着地候補（例） |
|------|----------------|
| Bbmaj7 -> G7 -> Cm7 -> F7 | `D -> B -> Eb -> A`（3rd連結） |
| Dm7 -> G7 -> Cm7 -> F7 | `F -> B -> Eb -> A`（3rd連結） |
| Fm7 -> Bb7 -> Eb7 -> Ab7 | `Ab -> D -> G -> C`（3rd連結） |
| D7 -> G7 -> C7 -> F7 | `F# -> B -> E -> A`（Bセクション連鎖） |

実践ルール:
1. Aは `Cm7-F7` 着地を毎回安定させる
2. Bは2小節ごとに同じリズムモチーフを半音/4度移動で再利用
3. 最後の `Cm7,F7 -> Bb6` は1拍目 `D` or `Bb` を必ず固定

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Bbmaj7 / Bb6 | Bb Ionian / Lydian | 9th（C）, 13th（G） |
| G7 | G Mixolydian / Altered | b9（Ab）や #9（A#）は弱拍で短く使用 |
| Cm7,F7 | C Dorian / F Mixolydian | A終止の主軸。繰り返し語彙を作る |
| Dm7,G7 | D Dorian / G Mixolydian | `Cm7,F7` へ向かう橋渡し |
| Fm7,Bb7 | F Dorian / Bb Mixolydian | サブドミナント側の色付け |
| Eb7,Ab7 | Eb Mixolydian / Ab Mixolydian | 次の `Dm7,G7` へ接続を優先 |
| D7 | D Mixolydian / Altered | Bセクション先頭。強拍着地優先 |
| C7 | C Mixolydian / Altered | `F7` へ向けて緊張を段階的に上げる |
| F7 | F Mixolydian / Altered | A再突入前はテンションを詰めすぎない |

優先順位:
1. Aの `Cm7,F7` を軸に2小節語彙を先に固定
2. Bのドミナント連鎖を同じモチーフで4段処理
3. 最後に `G7`/`D7` のみオルタード色を足してコントラストを作る

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: Aの循環とBの連鎖を、音数最小で明確に分離して聴かせる

### 2. 中級（ルートレスA/B）

- Aは `Bbmaj7,G7 -> Cm7,F7` を1ユニットとして反復
- Bは `D7 -> G7 -> C7 -> F7` を同形ボイシングで順送り

### 3. アップテンポ対策

- 2フィール寄りでコンピング密度を下げる
- テーマ後半とソロ後半だけ4フィールへ上げると崩れにくい

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | A前半 `Bbmaj7,G7 -> Cm7,F7 -> Dm7,G7 -> Cm7,F7` を反復 |
| 3分 | A後半 `Fm7,Bb7 -> Eb7,Ab7 -> Dm7,G7 -> Cm7,F7` を反復 |
| 3分 | Bの `D7 -> G7 -> C7 -> F7` を2拍モチーフで反復 |
| 3分 | 2番カッコ終止 `Cm7,F7 -> Bb6` を重点反復 |
| 3分 | 通し（1コーラス） + テンポ段階アップ |

到達基準:
- ✅ A/B/Aのフォームを見失わず1コーラス通せる
- ⭐ Bのドミナント連鎖を一定のリズム密度で維持できる
- 🔥 1つの2小節リックをAの複数箇所で再利用できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)

# Tune Up 分析

`Tune Up` を、**メジャーii-V-Iを連続キーで処理する**ための基準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Tune Up.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Tune Up |
| Composer | Miles Davis |
| Key | B♭ |
| Rhythm | Up Tempo Swing |
| Time Signature | 4/4 |
| Form | A（12ユニット）+ Ending（4ユニット）= 16ユニット（JSON記法） |

メモ:
- A本体は `Em7-A7-Dmaj7 -> Dm7-G7-Cmaj7 -> Cm7-F7-Bbmaj7` の下降連結。
- Endingは1番/2番相当で、`D`へ戻す型と`B♭`で終止する型がある。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A 前半（1-6） | D→C | 2つのメジャーii-V-Iを連続処理 |
| A 後半（7-12） | C→B♭ | さらに全音下へ接続 |
| Ending（13-16） | B♭終止 or D再接続 | コーラス終止と次周準備を切替 |

要点:
- `ii-V-I` を単発で弾く練習から、**連結して運用する練習**へ進む曲。
- 12キー練習では、4小節単位ではなく3小節単位でキーが動く感覚が重要。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（12ユニット）

<AbcNotation abc='
X:1
T:Tune Up A (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Em7 (Dor)"G4 | "A7 (Mix-Alt)"^C4 | "Dmaj7 (Ion-Lyd)"^F4 | "Dmaj7 (Ion-Lyd)"^F4 |
"Dm7 (Dor)"F4 | "G7 (Mix-Alt)"B4 | "Cmaj7 (Ion-Lyd)"E4 | "Cmaj7 (Ion-Lyd)"E4 |
"Cm7 (Dor)"_E4 | "F7 (Mix)"A4 | "Bbmaj7 (Ion-Lyd)"D4 | "Gm7 (Dor)"_B4 |
' />

### Ending（終止/再接続）

<AbcNotation abc='
X:1
T:Tune Up Endings
M:4/4
L:1/4
K:C
"Ending 1: Em7"G4 | "F7"A4 | "Bbmaj7"D4 | "A7"^C4 |
"Ending 2: Em7"G4 | "A7"^C4 | "Dmaj7"^F4 | "Dmaj7"^F4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Alt` = Altered

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| 1-4 | `Em7-A7-Dmaj7` | メジャーii-V-I（D） | E Dorian / A Mix / D Ion-Lyd |
| 5-8 | `Dm7-G7-Cmaj7` | メジャーii-V-I（C） | D Dorian / G Mix / C Ion-Lyd |
| 9-12 | `Cm7-F7-Bbmaj7` | メジャーii-V-I（B♭） | C Dorian / F Mix / Bb Ion-Lyd |
| 13-16 | `Em7-F7-Bbmaj7-A7` or `Em7-A7-Dmaj7` | 終止/再接続 | 文脈に応じて切替 |

---

## セクション別コード機能

### A（12ユニット）

- `Em7 -> A7 -> Dmaj7`  
  1つ目のメジャーii-V-I
- `Dm7 -> G7 -> Cmaj7`  
  全音下へ移動した2つ目のii-V-I
- `Cm7 -> F7 -> Bbmaj7`  
  さらに全音下へ移動した3つ目のii-V-I
- `Gm7`  
  終止または次接続の準備点

### Ending（4ユニット）

- 1番相当: `Em7 -> F7 -> Bbmaj7 -> A7`  
  B♭へ触れてからA7で次周へ回す
- 2番相当: `Em7 -> A7 -> Dmaj7 -> Dmaj7`  
  Dへ再着地する終止型

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Em7 -> A7 -> Dmaj7 | `G -> C# -> F#`（3rd連結） |
| Dm7 -> G7 -> Cmaj7 | `F -> B -> E`（3rd連結） |
| Cm7 -> F7 -> Bbmaj7 | `Eb -> A -> D`（3rd連結） |
| Bbmaj7 -> A7 | `D -> C#`（半音接続） |

実践ルール:
1. 各ii-V-Iの3rd連結だけで1コーラス通す
2. `maj7` 着地後は1拍空けて次のiiへ入る
3. Endingは「終わる型」と「戻す型」を明確に分ける

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Em7 / Dm7 / Cm7 / Gm7 | Dorian | 9th, 11th |
| A7 / G7 / F7 | Mixolydian（必要時Altered） | 9th, 13th（Alteredは弱拍で短く） |
| Dmaj7 / Cmaj7 / Bbmaj7 | Ionian / Lydian | 9th, #11, 13 |

優先順位:
1. 3つのii-V-Iで同じ2小節語彙を移動再利用
2. V7だけスケール差し替え（Mix -> Alt）で比較
3. Endingごとにフレーズの終止語尾を変える

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: 連続ii-V-Iでもフォームを見失わない

### 2. 中級（ルートレス）

- `ii-V-I` を1ユニットとして同型で平行移動
- 各Iコードで音域を少し上げ下げしてセクション感を作る

### 3. アップテンポ対策

- 2拍4拍で薄く入れる
- V7だけ密度を上げ、Iで抜く

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | `Em7-A7-Dmaj7` を反復 |
| 3分 | `Dm7-G7-Cmaj7` を反復 |
| 3分 | `Cm7-F7-Bbmaj7` を反復 |
| 3分 | Ending 2種類を切替反復 |
| 3分 | 1コーラス通し（強拍3rd/7th固定） |

到達基準:
- ✅ 3つのii-V-Iを連続で迷わず弾ける
- ⭐ Endingを文脈で使い分けられる
- 🔥 12キーで同じ設計を維持できる

---

## 関連ガイド

- [12キー練習ガイド](/guides/twelve-keys-practice)
- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [スケール練習ガイド](/guides/scale-practice)

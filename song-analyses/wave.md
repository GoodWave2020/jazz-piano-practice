# Wave 分析

`Wave` を、ボサノバ文脈での**キーセンター移動とドミナント連鎖**を学ぶ曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Wave.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Wave |
| Composer | Antonio Carlos Jobim |
| Key | D |
| Rhythm | Bossa Nova |
| Time Signature | 4/4 |
| Form | 32ユニット（12 + 8 + 12, JSON記法） |

メモ:
- JSONは先頭セクションが `Label: B` になっているが、素材的には A素材として扱える。
- 分析上は **A1（12）-B（8）-A2（12）** で整理する。
- 譜例では機能把握を優先し、一部の slash bass は簡略化している。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A1（1-12） | D中心 → G側 → 循環接続 | `Dmaj7` 起点、後半はドミナント連鎖で推進 |
| B（13-20） | F系/E♭系の借用色 | slash bassで下降ベース感を作る対比区間 |
| A2（21-32） | A1再提示 | A素材を再提示し、次周接続も可能 |

要点:
- `Gmaj7 -> Gm6` の切替が、この曲の色彩変化の核。
- A後半の `... -> Dm7,G7` は次区間への接続を作る実戦ポイント。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（12ユニット）

<AbcNotation abc='
X:1
T:Wave A Section (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Dmaj7 (Ion-Lyd)"^F4 | "Bb07 (WHDim)"e4 | "Am7 (Dor)"c4 | "D7b9 (Alt-PhryDom)"^f4 |
"Gmaj7 (Ion-Lyd)"b4 | "Gm6 (Dor-MelMin)"_b4 | "F#13-F#7b13 (Mix-Alt)"^a2 a2 | "B9-B7b9 (Mix-Alt)"^d2 d2 |
"E9 (Mix)"^g4 | "Bb7-A7 (Mix-Alt)"d2 ^c2 | "Dm7-G7 (Dor-Mix)"f2 b2 | "Dm7-G7 (Dor-Mix)"f2 b2 |
' />

### Bセクション（8ユニット, slash bass簡略化）

<AbcNotation abc='
X:1
T:Wave B Section (Functional Simplification)
M:4/4
L:1/4
K:C
"Gm7 (Dor)"_b4 | "C7 (Mix)"e4 | "Fmaj7 (Ion-Lyd)"a4 | "Fmaj7 (Ion-Lyd)"a4 |
"Fm7 (Dor)"_a4 | "Bb7 (Mix)"d4 | "Ebmaj7 (Ion-Lyd)"g4 | "A7b9 (Alt-PhryDom)"^c4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `MelMin` = Melodic Minor
- `WHDim` = Whole-Half Diminished
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A 前半 | `Dmaj7 -> ... -> D7b9 -> Gmaj7` | 主調からIV方面への接続 | D Ion-Lyd / A Dorian / D系V7 |
| A 中盤 | `Gmaj7 -> Gm6` | 同主切替（明→暗） | G Ion-Lyd -> G Dorian or Melodic Minor |
| A 後半 | `F#13... -> B9... -> E9 -> Bb7,A7 -> Dm7,G7` | ドミナント連鎖 + 接続準備 | 各V7で Mix中心（必要に応じAlt） |
| B | `Gm7 -> C7 -> Fmaj7 ... -> A7b9` | 借用色 + 次A接続 | G Dorian / C Mix / F Ion-Lyd / A系V7 |

---

## セクション別コード機能

### A（12ユニット）

- `Dmaj7 -> Bb07 -> Am7 -> D7b9 -> Gmaj7`  
  主調DからG方面へ向かう導入
- `Gm6`  
  同主切替で色を暗くするポイント
- `F#13,F#7b13 -> B9,B7b9 -> E9 -> Bb7,A7 -> Dm7,G7`  
  ドミナント連鎖で推進力を作る

### B（8ユニット）

- `Gm7/Bb -> C7/Bb -> Fmaj7/A -> Fmaj7/A`  
  slash bassで下降感を作りつつ F方面へ
- `Fm7/Ab -> Bb7/Ab -> Ebmaj7/G -> A7b9`  
  借用色を経由し、A7b9で次Aへ戻す

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Am7 -> D7 -> Gmaj7 | `C -> F# -> B`（3rd連結） |
| Gmaj7 -> Gm6 | `B -> Bb`（半音下降） |
| Dm7 -> G7 -> C系解決 | `F -> B -> E`（3rd連結） |
| Bb7 -> A7 -> Dm7 | `D -> C# -> F`（半音接続） |

実践ルール:
1. `Gmaj7 -> Gm6` はトップノート半音下降を意識
2. A後半のドミナント連鎖は2ユニット単位で同じリズムを再利用
3. B末尾 `A7b9` から次A頭 `Dmaj7` への解決を先に設計する

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Dmaj7 | D Ionian / Lydian | 9th（E）, #11（G#） |
| Bb07 | Bb WH Diminished | 対称音型として短く使用 |
| Am7 | A Dorian | 9th（B）, 11th（D） |
| D7b9 | D Altered / PhryDom | b9（Eb）でGへ解決 |
| Gmaj7 | G Ionian / Lydian | 9th（A）, #11（C#） |
| Gm6 | G Dorian / Melodic Minor | 6th（E）を明確化 |
| F#13,F#7b13 | F# Mixolydian b13 / Altered | 13thとb13を比較使用 |
| B9,B7b9 | B Mixolydian / Altered | b9でEへ解決 |
| E9 | E Mixolydian | 9th（F#）, 13th（C#） |
| Bb7,A7 | Mixolydian / Altered | 連鎖区間は短く処理 |
| Dm7,G7 | D Dorian / G Mixolydian | 次接続へ向けた橋渡し |

優先順位:
1. まず `Gmaj7 -> Gm6` の切替を安定化
2. 次に A後半ドミナント連鎖を同一モチーフで処理
3. 最後に Bの slash bass 文脈へ語彙を移植

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th（slash bassはまず省略）
- RH: 3rd + 7th
- 目的: キーセンター移動を明確に聴かせる

### 2. 中級（ルートレス + slash bass）

- Bセクションのみ LHで下降ベースを再現
- RHはボサノバの裏拍配置を固定

### 3. 色彩区間対策

- `Gmaj7 -> Gm6` は同ポジションでトップのみ半音下降
- `F#13 -> ... -> A7` は密度を上げすぎず2拍ヒット中心

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | A前半（`Dmaj7 ... D7b9 -> Gmaj7`）を反復 |
| 3分 | `Gmaj7 -> Gm6` の切替だけ反復 |
| 3分 | A後半ドミナント連鎖を2拍モチーフで反復 |
| 3分 | Bセクション（slash bass簡略版）を反復 |
| 3分 | 全体通し（A-B-A） |

到達基準:
- ✅ 12+8+12 のフォームを崩さず通せる
- ⭐ `Gmaj7 -> Gm6` の色変化を意図して出せる
- 🔥 A後半の連鎖区間を別キーへ移調して運用できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)


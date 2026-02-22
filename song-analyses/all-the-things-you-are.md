# All The Things You Are 分析

`All The Things You Are` を、**多キーセンター移動**と**長いii-V接続**を学ぶ上級標準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/All The Things You Are.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | All The Things You Are |
| Composer | Jerome Kern |
| Key | A♭ |
| Rhythm | Medium Up Swing |
| Time Signature | 4/4 |
| Form | 8+8+8+12 = 36ユニット（JSON記法） |

メモ:
- JSONラベルは `B/C/D` + 無印セクションだが、実運用では36小節構造として扱う。
- `Dbm/maj7` や `Gm7b5,C7b9` など、借用・終止連結が多い。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| 1-8 | Fm→A♭→C | 4度進行でキーを押し広げる導入 |
| 9-16 | Cm→E♭→G | 前半を全音上に再展開 |
| 17-24 | G→E | メジャー着地からマイナーii-Vを挿入 |
| 25-36 | Fm→A♭終止 | 借用和音を含む最終回帰 |

要点:
- この曲は「単一キー」の発想ではなく、**セクションごとの着地点暗譜**が必須。
- 12キー練習では全曲移調より、まず8小節断片の移調から始めると安定する。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### 1-8小節

<AbcNotation abc='
X:1
T:All The Things You Are Bars 1-8
M:4/4
L:1/4
K:C
"Fm7 (Dor)"_A4 | "Bbm7 (Dor)"_D4 | "Eb7 (Mix)"G4 | "Abmaj7 (Ion-Lyd)"C4 |
"Dbmaj7 (Ion-Lyd)"F4 | "Dm7-G7 (Dor-Mix)"F2 B2 | "Cmaj7 (Ion-Lyd)"E4 | "Cmaj7 (Ion-Lyd)"E4 |
' />

### 9-16小節

<AbcNotation abc='
X:1
T:All The Things You Are Bars 9-16
M:4/4
L:1/4
K:C
"Cm7 (Dor)"_E4 | "Fm7 (Dor)"_A4 | "Bb7 (Mix)"D4 | "Ebmaj7 (Ion-Lyd)"G4 |
"Abmaj7 (Ion-Lyd)"C4 | "Am7-D7 (Dor-Mix)"C2 ^F2 | "Gmaj7 (Ion-Lyd)"B4 | "Gmaj7 (Ion-Lyd)"B4 |
' />

### 17-24小節

<AbcNotation abc='
X:1
T:All The Things You Are Bars 17-24
M:4/4
L:1/4
K:C
"Am7 (Dor)"C4 | "D7 (Mix-Alt)"^F4 | "Gmaj7 (Ion-Lyd)"B4 | "Gmaj7 (Ion-Lyd)"B4 |
"F#m7b5 (Loc)"A4 | "B7b9 (Alt-PhryDom)"^D4 | "Emaj7 (Ion-Lyd)"^G4 | "C7b13 (Mixb13-Alt)"=E4 |
' />

### 25-36小節

<AbcNotation abc='
X:1
T:All The Things You Are Bars 25-36
M:4/4
L:1/4
K:C
"Fm7 (Dor)"_A4 | "Bbm7 (Dor)"_D4 | "Eb7 (Mix)"G4 | "Abmaj7 (Ion-Lyd)"C4 |
"Dbmaj7 (Ion-Lyd)"F4 | "Dbm/maj7 (MelMin)"F4 | "Cm7 (Dor)"_E4 | "B07 (Dim)"D4 |
"Bbm7 (Dor)"_D4 | "Eb7 (Mix)"G4 | "Abmaj7 (Ion-Lyd)"C4 | "Gm7b5-C7b9 (Loc-Alt)"_B2 =E2 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Mixb13` = Mixolydian b13
- `Loc` = Locrian
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant
- `MelMin` = Melodic Minor

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| 1-8 | `Fm7-Bbm7-Eb7-Abmaj7-Dbmaj7-Dm7,G7-Cmaj7` | 4度進行 + キー移動導入 | Dor/Mix/Ion-Lyd連結 |
| 9-16 | `Cm7-Fm7-Bb7-Ebmaj7-Abmaj7-Am7,D7-Gmaj7` | 全音上の再展開 | 同型語彙の移植 |
| 17-24 | `Am7-D7-Gmaj7 ... F#m7b5-B7b9-Emaj7-C7b13` | メジャー着地 + マイナーii-V挿入 | Dor/Mix/Loc/Alt |
| 25-36 | `Fm7 ... Dbm/maj7 ... B07 ... Gm7b5,C7b9` | 借用和音を含む最終回帰 | Dor/Ion/Dim/Alt |

---

## セクション別コード機能

- 1-8: Fm起点でA♭系へ、さらにCへ接続
- 9-16: 構造を保ったまま別着地点へ移動
- 17-24: G着地後に `F#m7b5-B7b9-Emaj7` を挿入
- 25-36: A♭へ回帰しつつ借用/減七で色付け

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Fm7 -> Bbm7 -> Eb7 -> Abmaj7 | `Ab -> Db -> G -> C` |
| Dm7 -> G7 -> Cmaj7 | `F -> B -> E` |
| F#m7b5 -> B7b9 -> Emaj7 | `A -> D# -> G#` |
| Bbm7 -> Eb7 -> Abmaj7 | `Db -> G -> C` |

実践ルール:
1. 8小節ごとに「次の着地点」を声に出して確認
2. まず3rd連結だけで通す
3. 借用和音（`Dbm/maj7`, `B07`）は経過点として短く処理

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| m7 | Dorian | 9,11 |
| maj7 | Ionian / Lydian | 9,#11,13 |
| 7 / 7b13 | Mixolydian / Altered | 9,13 + b9/b13短期使用 |
| m7b5 / 7b9 | Locrian / Altered | 解決先3rdを先に決める |
| dim | Diminished | 経過的に使用 |

優先順位:
1. 8小節単位で語彙を分割
2. 17-24の `F#m7b5-B7b9-Emaj7` を重点強化
3. 最終12小節で借用和音の処理を追加

---

## コンピング設計

### 1. 初級（シェル）

- 小節頭の機能表示を優先
- セクション境界で音域を変えて区切る

### 2. 中級（ルートレス）

- `m7-7-maj7` の同型運指を平行移動
- 36小節終端は密度を落として終止感を作る

### 3. 実戦設計

- 前半は薄め、後半12小節で推進感を追加

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | 1-8小節を反復 |
| 3分 | 9-16小節を反復 |
| 3分 | 17-24小節（`F#m7b5-B7b9-Emaj7`）を反復 |
| 3分 | 25-36小節を反復 |
| 3分 | 36小節通し（8小節ごと着地点確認） |

到達基準:
- ✅ 36小節フォームを見失わない
- ⭐ 各セクションの着地点を説明しながら弾ける
- 🔥 8小節断片を12キーへ移調運用できる

---

## 関連ガイド

- [12キー練習ガイド](/guides/twelve-keys-practice)
- [コード進行パターン](/guides/chord-progressions)
- [リハーモナイズ](/guides/reharmonization)
- [即興フレーズ設計](/guides/improvisation-phrasing)

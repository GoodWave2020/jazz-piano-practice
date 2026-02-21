# Stella By Starlight 分析

`Stella By Starlight` を、**借用和音・マイナーii-V・ドミナント連鎖**を同時に扱う上級標準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Stella By Starlight.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Stella By Starlight |
| Composer | Victor Young |
| Key | B♭ |
| Rhythm | Medium Swing |
| Time Signature | 4/4 |
| Form | A（16ユニット）+ B（8ユニット）+ C（8ユニット） = 32ユニット（JSON記法） |

メモ:
- Aセクションには `Em7b5(Gm7),(C7)` のような代替記法が含まれる。
- 本ページの譜例は、**機能把握優先の骨格**として簡略化している。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A（1-16） | B♭中心 + E♭/F周辺 | 借用進行と ii-V 連鎖で長い緊張を作る |
| B（17-24） | G7起点の局所化 | ドミナント維持から Cm 方面へ解決 |
| C（25-32） | マイナーii-V連鎖 | `... -> Bbmaj7` へ段階的に収束 |

要点:
- Aは「トニック保持」より「連結処理」が主題。
- B/Cは短くても機能が明確で、着地音設計の精度が出る。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション（16ユニット）

<AbcNotation abc='
X:1
T:Stella A (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Em7b5 (Loc)"G4 | "A7b9 (Alt-PhryDom)"^C4 | "Cm7 (Dor)"_E4 | "F7 (Mix)"A4 |
"Fm7 (Dor)"_A4 | "Bb7 (Mix)"D4 | "Ebmaj7 (Ion-Lyd)"G4 | "Ab7 (Mix-Lydb7)"C4 |
"Bbmaj7 (Ion-Lyd)"D4 | "Em7b5-A7b9 (Loc-Alt)"G2 ^C2 | "Dm7 (Dor)"F4 | "Bbm7-Eb7 (Dor-Mix)"_D2 G2 |
"Fmaj7 (Ion-Lyd)"A4 | "Em7b5-C7 (Loc-Mix)"G2 E2 | "Ebmaj7#11 (Lyd)"G4 | "D7b9 (Alt-PhryDom)"^F4 |
' />

### Bセクション（8ユニット）

<AbcNotation abc='
X:1
T:Stella B (Dominant Hold to Resolution)
M:4/4
L:1/4
K:C
"G7b13 (Mixb13-Alt)"B4 | "G7b13 (Mixb13-Alt)"B4 | "Cm7 (Dor)"_E4 | "Cm7 (Dor)"_E4 |
"Ab7#11 (Lydb7)"C4 | "Ab7#11 (Lydb7)"C4 | "Bbmaj7 (Ion-Lyd)"D4 | "Bbmaj7 (Ion-Lyd)"D4 |
' />

### Cセクション（8ユニット）

<AbcNotation abc='
X:1
T:Stella C (Minor ii-V Chains)
M:4/4
L:1/4
K:C
"Em7b5 (Loc)"G4 | "A7b9 (Alt-PhryDom)"^C4 | "Dm7b5 (Loc)"F4 | "G7b9 (Alt-PhryDom)"B4 |
"Cm7b5 (Loc)"_E4 | "F7b9 (Alt-PhryDom)"A4 | "Bbmaj7 (Ion-Lyd)"D4 | "Bbmaj7 (Ion-Lyd)"D4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Lydb7` = Lydian b7
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Mixb13` = Mixolydian b13
- `Loc` = Locrian
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A 前半 | `Em7b5-A7b9 -> Cm7-F7 -> Fm7-Bb7 -> Ebmaj7-Ab7` | 借用 + ii-V連鎖 | Loc / Alt / Dor / Mix 系 |
| A 後半 | `Bbmaj7 ... D7b9` | トニック提示 + 次区間準備 | Bb Ion-Lyd と各ドミナント処理 |
| B | `G7b13保持 -> Cm7 -> Ab7#11 -> Bbmaj7` | ドミナント維持から収束 | G系V7 / C Dorian / Ab Lydb7 / Bb Ion-Lyd |
| C | `Em7b5-A7b9 -> Dm7b5-G7b9 -> Cm7b5-F7b9 -> Bbmaj7` | マイナーii-V連鎖終止 | 各 Loc + 各 Alt-PhryDom |

---

## セクション別コード機能

### A（16ユニット）

- `Em7b5 -> A7b9 -> Cm7 -> F7`  
  先頭からマイナーii-Vを含む緊張導入
- `Fm7 -> Bb7 -> Ebmaj7 -> Ab7`  
  サブドミナントマイナーとバックドア系の接続
- `... -> Bbmaj7 -> ... -> D7b9`  
  一時着地と次セクションへの再緊張化

### B（8ユニット）

- `G7b13` を保持して `Cm7` へ解決
- `Ab7#11` を経由して `Bbmaj7` に収束

### C（8ユニット）

- `Em7b5-A7b9`、`Dm7b5-G7b9`、`Cm7b5-F7b9`  
  半減-ドミナントの連鎖
- 最後 `Bbmaj7` で終止

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Em7b5 -> A7b9 -> Cm7 | `G -> C# -> Eb`（3rd連結） |
| Fm7 -> Bb7 -> Ebmaj7 | `Ab -> D -> G`（3rd連結） |
| Dm7b5 -> G7b9 -> Cm7b5 | `F -> B -> Eb`（3rd連結） |
| F7b9 -> Bbmaj7 | `A -> Bb` か `Eb -> D`（半音解決） |

実践ルール:
1. Aは8ユニットずつ分割して覚える
2. `b9` 系ドミナントは「次コードの3rd」へ解決を先に決める
3. Bは2ユニット単位、Cは1ユニット単位で着地を確認する

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Em7b5 / Dm7b5 / Cm7b5 | Locrian | 11th中心、弱拍で9th |
| A7b9 / G7b9 / F7b9 / D7b9 | Altered / PhryDom | b9, b13 を短く使う |
| Cm7 / Fm7 / Dm7 / Bbm7 | Dorian | 9th, 11th を基本 |
| F7 / Bb7 / Eb7 / Ab7 | Mixolydian / Lydb7 | 9th, 13th、必要時 #11 |
| Ebmaj7 / Bbmaj7 / Fmaj7 | Ionian / Lydian | 9th, #11, 13 |
| G7b13 | Mixolydian b13 / Altered | b13を保持しすぎず解決優先 |

優先順位:
1. Cセクションの `m7b5-7b9` 連鎖を先に固定
2. A前半の複合進行を2ユニット語彙で分割
3. Bでドミナント保持中のリズム変化を追加

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: 長いAセクションでフォームを見失わない

### 2. 中級（ルートレス）

- `Em7b5-A7b9-Cm7-F7` を1塊で反復
- `Fm7-Bb7-Ebmaj7-Ab7` を2塊目として反復

### 3. セクション別密度

- Aは薄め、Bは保持感、Cは推進感を意識
- C終端 `F7b9 -> Bbmaj7` は空白を作って解決感を出す

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | Cセクション連鎖（`m7b5-7b9`）を反復 |
| 3分 | A前半8ユニットを反復 |
| 3分 | A後半8ユニットを反復 |
| 3分 | Bセクションを2ユニット単位で反復 |
| 3分 | 全体通し（A-B-C） |

到達基準:
- ✅ A/B/C の切替でフォームを見失わない
- ⭐ Cの連鎖区間で強拍着地を維持できる
- 🔥 A全体で同一モチーフを変形再利用できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)


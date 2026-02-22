# Bolivia 分析

`Bolivia` を、**G7ヴァンプ運用**と**急速なキーセンター移動**を同時に扱う上級曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Bolivia.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Bolivia |
| Composer | Cedar Walton |
| Key | D |
| Rhythm | Up Tempo Swing |
| Time Signature | 4/4 |
| Form | i（8ユニット）+ A（16ユニット）+ B（8ユニット） = 32ユニット（JSON記法） |

メモ:
- `i` と `B` は `G7` ヴァンプ中心（末尾に `(E)` 注記あり）。
- Aは16ユニットの中で、メジャー着地点とオルタード系ドミナントが連続する。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| i（1-8） | G7中心 | ヴァンプでグルーヴと音色を固定 |
| A（9-24） | D中心 + 多点移動 | 着地点を短い周期で切替える本体 |
| B（25-32） | G7中心 | ヴァンプ再提示で終止/次コーラス接続 |

要点:
- この曲は「1つのダイアトニック」に収めるより、**区間ごとの機能切替**で捉える方が実戦的。
- Aで情報量が多い分、i/Bヴァンプで音数と密度を制御すると全体がまとまりやすい。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### iセクション（G7ヴァンプ）

<AbcNotation abc='
X:1
T:Bolivia i (G7 Vamp)
M:4/4
L:1/4
K:C
"G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 |
"G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-E)"B4 |
' />

### Aセクション（16ユニット）

<AbcNotation abc='
X:1
T:Bolivia A (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Ebmaj7-Bb7sus (Ion-Mixsus)"G2 _B2 | "A13 (Mix-Lydb7)"^C4 | "Dmaj7 (Ion-Lyd)"^F4 | "Ab13b9 (Alt-PhryDom)"C4 |
"Gmaj7 (Ion-Lyd)"B4 | "F#7b13 (Mixb13-Alt)"^A4 | "Bm7 (Dor-Aeo)"D4 | "Cmaj7#11 (Lyd)"E4 |
"Bm7 (Dor-Aeo)"D4 | "Bm7/A (A13sus)"D4 | "G#m7b5 (Loc)"B4 | "Gm7-C7 (Dor-Mix)"_B2 =E2 |
"Fmaj7 (Ion-Lyd)"A4 | "B7b9 (Alt-PhryDom)"^D4 | "Bbmaj7 (Ion-Lyd)"D4 | "A7#9 (Alt-HWDim)"^C4 |
' />

### Bセクション（G7ヴァンプ再提示）

<AbcNotation abc='
X:1
T:Bolivia B (G7 Vamp Return)
M:4/4
L:1/4
K:C
"G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 |
"G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-Alt)"B4 | "G7 (Mix-E)"B4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Mix` = Mixolydian
- `Mixsus` = Mixolydian sus
- `Mixb13` = Mixolydian b13
- `Dor` = Dorian
- `Aeo` = Aeolian
- `Loc` = Locrian
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant
- `HWDim` = Half-Whole Diminished

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| i | `G7` ヴァンプ | ドミナント固定グルーヴ | G Mixolydian / G Blues |
| A 前半 | `Ebmaj7 -> A13 -> Dmaj7 -> Ab13b9 -> Gmaj7` | 着地 + 外側ドミナント連結 | Maj系 + Alt系の交互処理 |
| A 中盤 | `F#7b13 -> Bm7 -> Cmaj7#11 -> Bm7 -> Bm7/A` | Bm周辺 + sus感拡張 | F# Alt / Bm Dor-Aeo / C Lyd |
| A 後半 | `G#m7b5 -> Gm7,C7 -> Fmaj7 -> B7b9 -> Bbmaj7 -> A7#9` | 半減 + ii-V + オルタード終止 | Loc / Dor-Mix / Maj / Alt |
| B | `G7` ヴァンプ | ループ終止・再突入準備 | G Mixolydian / Altered（密度可変） |

---

## セクション別コード機能

### i（8ユニット）

- `G7` を継続して土台を作る
- アプローチは「モード運用」と「ドミナント緊張運用」の2択で明確化すると崩れにくい

### A（16ユニット）

- `Ebmaj7,(Bb7sus) -> A13 -> Dmaj7`  
  遠隔着地を経由してD側へ解決
- `Ab13b9 -> Gmaj7 -> F#7b13 -> Bm7`  
  オルタード系からメジャー/マイナー着地へ接続
- `Cmaj7#11 -> Bm7 -> Bm7/A -> G#m7b5 -> Gm7,C7 -> Fmaj7`  
  サウンドの軸を下行方向で推移
- `B7b9 -> Bbmaj7 -> A7#9`  
  半音接近を含む終端処理。次のG7ヴァンプへ戻す推進力を作る

### B（8ユニット）

- `G7` ヴァンプ再提示  
  A終端の緊張を解放し、次周のiへ自然に再接続する

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| A13 -> Dmaj7 | `C# -> F#`（3rd連結） |
| Ab13b9 -> Gmaj7 | `C -> B`（半音下行） |
| F#7b13 -> Bm7 | `A# -> D`（3rd解決） |
| Gm7,C7 -> Fmaj7 | `Bb -> E -> A`（ii-V-I連結） |
| B7b9 -> Bbmaj7 -> A7#9 | `D# -> D -> C#`（半音連結） |

実践ルール:
1. i/Bヴァンプは `B（3rd）` と `F（7th）` を先に固定
2. Aは4ユニットごとに区切って着地音だけを暗譜
3. `...7b9 / ...7#9` は次コードの3rdに解決させる

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| G7（vamp） | G Mixolydian / G Blues | 9,13を基準に、必要時 b9/#9 |
| Ebmaj7 / Dmaj7 / Gmaj7 / Cmaj7#11 / Fmaj7 / Bbmaj7 | Ionian / Lydian | 9, #11, 13 |
| A13 / Ab13b9 / F#7b13 / B7b9 / A7#9 | Mixolydian系 / Altered / HWDim | b9,#9,b13 を短く使って解決優先 |
| Bm7 / Bm7/A | B Dorian / Aeolian（文脈で選択） | 9,11中心。Aベース時はsus感を優先 |
| G#m7b5 | Locrian | 11中心で次コードへ接続 |
| Gm7,C7 | G Dorian / C Mixolydian | ii-VとしてFmaj7へ着地 |

優先順位:
1. i/BのG7ヴァンプでリズム語彙を先に固定
2. A前半のドミナント着地（A13→Dmaj7、Ab13b9→Gmaj7）を安定化
3. A後半の `Gm7,C7 -> Fmaj7` を明確なii-V-Iとして処理

---

## コンピング設計

### 1. 初級（シェル）

- ヴァンプ区間: LH `G + F`、RH `B + F` 基準
- A区間: 3rd/7th優先で最小音数にする

### 2. 中級（ルートレス + 密度差）

- i/Bは同一ボイシングをリズムだけ変えて運用
- Aは4ユニット単位でボイシング色を切替

### 3. 形の作り分け

- i/B: 繰り返しでグルーヴ維持
- A前半: 和声変化を明確化
- A後半: 連結感を優先して音数を減らす

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | i/BのG7ヴァンプ（2拍4拍アクセント固定） |
| 3分 | A前半8ユニットを反復 |
| 3分 | A後半8ユニットを反復 |
| 3分 | `Gm7,C7 -> Fmaj7 -> B7b9 -> Bbmaj7 -> A7#9` を重点反復 |
| 3分 | 全体通し（i-A-B） |

到達基準:
- ✅ i/A/Bの切替でフォームを見失わない
- ⭐ Aで強拍着地（3rd/7th）を維持できる
- 🔥 i/BヴァンプとA本体でリズム密度を意図的に作り分けられる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)

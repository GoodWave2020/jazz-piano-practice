# アルペジオ練習ガイド

ジャズ即興でのアルペジオ練習を、**スタンダード用**と**ブルース用**に分けてまとめた実践ページ。  
「運指練習」ではなく、**和声の骨格を強拍に置く訓練**として扱う。

---

## 対象フェーズ

- 推奨開始: `Phase 2` 後半〜`Phase 3`
- 前提:
  - ii-V-I / ii-V-i の基本理解がある
  - コードトーン（1-3-5-7）で1コーラス程度のソロが取れる
  - [即興フレーズ設計](/guides/improvisation-phrasing) を読んでいる

---

## 基本ルール（最重要）

1. **強拍はコードトーン（特に3rd/7th）**
2. **弱拍で経過音・テンションを使う**
3. **小節線で止まらず、次コードへ接続する**
4. **まず骨格、次に色（テンション）を追加する**

---

## 運指の考え方（ジャズ実践）

ジャズのアルペジオは、クラシックのように「毎回同じ固定運指」を最優先にはしない。  
**次コードへ最短で接続できるか**を優先して、同じ和音でも運指を変える。

| 状況 | 実践ルール | 備考 |
|------|------|------|
| 4和音アルペジオ全般 | RHは `1-2-3-4`、LHは `5-4-3-2` を基本テンプレにする | 特に `dim7` は対称性が高く有効 |
| 黒鍵が多いキー（B / D♭ / E♭ など） | 親指を黒鍵に置きすぎず、`2-3-4` 中心で組む | 音型の安定性を優先 |
| ii-V-I連結 | 次コードの `3rd/7th` に着地しやすい指を優先 | 同じ `G7` でも前後で運指を変える |
| 長いフレーズ（2小節以上） | 拍頭の着地点を先に決め、そこへ向けて指替えする | 小節ごとの固定運指を避ける |

ミニドリル（3分）:
1. `Dm7 -> G7 -> Cmaj7` を1オクターブで弾き、毎回 `Cmaj7` の3rd（E）着地を固定
2. 同じ音列でも、前コードを `A7` に変えて運指を再設計
3. `B♭` と `E` に移調し、黒鍵比率が変わっても接続優先で維持

---

## コアドリル（ABC.js譜例）

### 1. コードタイプ別（1-3-5-7）

<AbcNotation abc='
X:1
T:Chord-type Arpeggios (C root)
M:4/4
L:1/8
K:C
"Cmaj7"C E G B c B G E | "Cm7"C _E G _B c _B G _E |
"C7"C E G _B c _B G E | "Cm7b5"C _E _G _B c _B _G _E |
' />

ルール:
1. まず `C` で固定
2. 同じ運指・同じリズムで全12キーへ移調
3. 音名でなく度数（1-3-5-7）を意識

### 2. 転回始まり（3rd / 5th / 7th）

<AbcNotation abc='
X:1
T:Inversion Starts on ii-V-I
M:4/4
L:1/8
K:C
"Dm7"F A c e d c A F | "G7"B d f a g f d B | "CMaj7"E G B d c B G E |
' />

目的:
- ルート始まり依存を外す
- 強拍で3rd/7thに着地しやすくする

### 3. ii-V-I 連結（コードチェンジを切らない）

<AbcNotation abc='
X:1
T:Connected Arpeggio Line
M:4/4
L:1/8
K:C
"Dm7"F A c e d c A F | "G7"B d f a g f d B | "CMaj7"E G B d c B G E | "CMaj7"D E G B c B G E |
' />

ルール:
1. 各小節の `1拍目` は必ずコードトーン
2. 小節線をまたいで最短接続
3. 4キー連続で崩れなければテンポを `+5`

### 4. 強拍=コードトーン / 弱拍=テンション

<AbcNotation abc='
X:1
T:Arpeggio + Tensions (ii-V-I)
M:4/4
L:1/8
K:C
"Dm7"F E A G F E D C | "G7"B _A d e f e d B | "CMaj7"E D G A G E D C |
' />

見方:
- `Dm7`：E（9th）を弱拍に配置
- `G7`：A♭（♭9）で緊張を作る
- `CMaj7`：D（9th）とA（13th）で解決後の色を作る

---

## ブルース用ドリル

### 5. Fブルース骨格（12小節アルペジオ）

<AbcNotation abc='
X:1
T:F Blues Arpeggio Skeleton (12 bars)
M:4/4
L:1/4
K:F
"F7"A c e _E | "Bb7"d f a c | "F7"A c e _E | "F7"c A F _E |
"Bb7"d f a c | "Bb7"c a f d | "F7"A c e _E | "D7"^F a c e |
"Gm7"B d g f | "C7"c e g B | "F7"A c e _E | "C7"g e c B |
' />

ルール:
1. 骨格だけを暗譜（テンションなし）
2. `B♭` と `C` のブルースへ移調
3. 9-12小節（`D7 -> Gm7 -> C7`）を重点反復

### 6. ブルース終端（9-12小節）テンション運用

<AbcNotation abc='
X:1
T:Blues Turnaround Tension Practice
M:4/4
L:1/8
K:F
"Gm7"B A d c B A g f | "C7"e d g a B a g e |
"F7"A G c d _E d c A | "C7"e _D g a B a g e |
' />

見方:
- `Gm7`：A（9th）
- `C7`：D（9th）/ A（13th）/ D♭（♭9）
- `F7`：G（9th）/ D（13th）

---

## 一般的スタンダード向け（AABA想定）

1. 1コーラスをコードトーンのみ（4分音符）で通す  
2. 強拍を `3rd/7th` 固定  
3. 小節またぎを最短接続（半音/全音）  
4. 転回始まり（3rd/5th/7th）で同進行を弾く  
5. 2コーラス目で弱拍テンション（9th中心）を追加  
6. 3コーラス目でリズムだけ変えて再利用

<AbcNotation abc='
X:1
T:Standard A-section Arpeggio Workflow
M:4/4
L:1/8
K:C
"Dm7"F A c e d c A F | "G7"B d f a g f d B |
"CMaj7"E G B d c B G E | "A7"^C E G B A G E ^C |
"Dm7"F E A G F E D C | "G7"B _A d e f e d B |
"CMaj7"E D G A G E D C | "C7"E D G A _B A G E |
' />

使い方:
- 前半4小節は骨格優先
- 後半4小節で弱拍テンションを追加
- Aセクションをループし、次にBセクションへ展開

---

## 20分ルーティン（毎日）

| 時間 | 内容 |
|------|------|
| 4分 | コードタイプ別アルペジオ（1キー） |
| 4分 | ii-V-I連結（4キー） |
| 4分 | 強拍/弱拍ルールでテンション追加 |
| 4分 | ブルース終端（9-12小節）反復 |
| 4分 | 曲適用（Autumn Leaves / Blue Bossa / Now's the Time） |

---

## 到達基準

| 基準 | 条件 |
|------|------|
| ✅ 最低ライン | ii-V-I とブルースで、強拍着地を崩さず1コーラス通せる |
| ⭐ 実用レベル | スタンダード1曲 + ブルース1曲で、テンションを混ぜて2コーラス安定 |
| 🔥 自動化レベル | キーや曲が変わっても同じ設計手順で即興に変換できる |

---

## 関連ガイド

- [即興フレーズ設計](/guides/improvisation-phrasing)
- [コード進行パターン](/guides/chord-progressions)
- [ビバップ特化練習](/guides/bebop-practice)
- [スタンダード一覧](/guides/repertoire)

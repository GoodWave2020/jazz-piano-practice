# スケール練習ガイド

ジャズ即興でのスケール練習を、**スタンダード用**と**ブルース用**に分けて整理した実践ページ。  
「指が動く」だけで終わらせず、**コード進行の中で使える状態**まで持っていくことを目標にする。

---

## 対象フェーズ

- 推奨開始: `Phase 2` 前半〜`Phase 3`
- 前提:
  - メジャー/マイナーの基本スケールが弾ける
  - ii-V-I / ii-V-i の基本理解がある
  - [コード進行パターン](/guides/chord-progressions) を読んでいる

---

## 基本ルール（最重要）

1. **スケールは単体でなく進行上で練習する**
2. **強拍はコードトーン、弱拍は経過音/テンション**
3. **まず4キー、次に12キーへ拡張する**
4. **V7のスケールだけ差し替えて比較する**
5. **同じ音素材でリズムだけ変える**

---

## コアドリル（ABC.js譜例）

### 1. ii-V-I スケール接続（ドリアン→ミクソ→イオニアン）

<AbcNotation abc='
X:1
T:ii-V-I Scale Connection
M:4/4
L:1/8
K:C
"Dm7"D E F G A G F E | "G7"G A B c d c B A | "CMaj7"C D E G A G E D |
' />

ルール:
1. 各小節の `1拍目` をコードトーンで開始
2. まず上行/下行を固定
3. 慣れたら開始音を `3rd` または `7th` に変更

### 2. マイナー ii-V-i 接続（ロクリアン→オルタード→ドリアン）

<AbcNotation abc='
X:1
T:Minor ii-V-i Scale Connection
M:4/4
L:1/8
K:C
"Dm7b5"D _E F G _A _B C _B | "G7alt"G _A _B B _D _E F _E | "Cm7"C D _E F G _B A G |
' />

ポイント:
- `V7` はオルタードで緊張を作る
- `i` でコードトーンに着地して解決感を出す

### 3. V7 スケール差し替え（ミクソ/オルタード/コンディミ）

<AbcNotation abc='
X:1
T:G7 Scale Swap Drill
M:4/4
L:1/8
K:C
"G7 Mixolydian"G A B c d e f g | "G7 Altered"G _A _B B _D _E F _E |
"G7 H-W Dim"G _A _B B ^C ^D E F | "CMaj7"E D C B G E D C |
' />

使い方:
1. `G7` の1小節だけを3種類で差し替え
2. 直後の `CMaj7` で必ず解決
3. どの差し替えが耳に合うか録音で比較

### 4. ビバップドミナント（拍頭を揃える）

<AbcNotation abc='
X:1
T:C Bebop Dominant
M:4/4
L:1/8
K:C
"C7"C D E F G A _B B | c B _B A G F E D |
' />

目的:
- 8分音符で弾いたとき、コードトーンが拍頭に来る感覚を作る
- 速いテンポでも和声感を維持する

---

## メロディックマイナー追加ドリル

`m6` の着地（例: `Gm6`）では、エオリアンよりメロディックマイナー/ドリアンが噛み合う場面が多い。  
ここでは「使える状態」にするための最小ドリルを追加する。

### 5. Gメロディックマイナー基礎（m6着地用）

<AbcNotation abc='
X:1
T:G Melodic Minor for Gm6
M:4/4
L:1/8
K:C
"Gm6"G A _B c d e ^f g | g ^f e d c _B A G |
' />

ポイント:
- `Gm6` の構成音 `G-Bb-D-E` を含むため、終止で濁りにくい
- まずは「上行/下行固定」で形を覚える

### 6. マイナー ii-V-i（iをメロディックマイナーで解決）

<AbcNotation abc='
X:1
T:Minor ii-V-i with Melodic Minor Resolution
M:4/4
L:1/8
K:C
"Am7b5"A B c d _e f g _e | "D7alt"d _e f ^f _a _b c _b | "Gm6"g a _b c d e ^f g |
' />

ルール:
1. `ii` はロクリアン系、`V` はオルタード、`i` はメロディックマイナーで固定して比較
2. `i` の `E（6th）` を拍頭に置く練習を追加する
3. `Autumn Leaves` の `Am7b5-D7-Gm6` にそのまま適用する

### 補助ドリル: ナチュラルマイナー（エオリアン）を使う場面

ナチュラルマイナー（エオリアン）は「使わない」のではなく、**`m7` と `b6` を強調したい場面**で使う。  
一方 `m6` コードでは、ドリアン/メロディックマイナーの方がコードトーン一致しやすい。

<AbcNotation abc='
X:1
T:Aeolian vs Dorian-Melodic Minor (G minor context)
M:4/4
L:1/8
K:C
"Gm7 (Aeolian)"G A _B c d _e f g | "Gm6 (Dorian)"g f e d c _B A G |
"Gm(maj line)"G A _B c d e ^f g | "Gm6"g e d c _B A G2 |
' />

使い分けの目安:
1. `Gm7` が長く続く: `G Aeolian` を候補にする
2. `Gm6` が明示される: `G Dorian` または `G melodic minor` を優先
3. 同じ小節内で `Eb` と `E` を混ぜる場合は、弱拍で短く処理して濁りを管理する

---

## ブルース用ドリル

### 7. I-IV-V のドミナントスケール運用

<AbcNotation abc='
X:1
T:Blues Dominant Scale Drill (C Blues)
M:4/4
L:1/8
K:C
"C7"C D E F G A _B c | "F7"F G A _B c d _e f |
"G7"G A B c d e f g | "C7"c _B A G E D C2 |
' />

ルール:
1. I7/IV7/V7 でミクソリディアンを即切替
2. 小節頭は3rdか7thで開始
3. `12小節` を止まらず通す

### 8. ブルーススケール + コードトーン着地

<AbcNotation abc='
X:1
T:C Blues Scale with Target Notes
M:4/4
L:1/8
K:C
"C7"C _E F ^F G _B G E | "F7"F _A _B B c _B A F |
"C7"C _E F ^F G _B G E | "G7"B d f a b a f d |
' />

見方:
- フレーズ本体はブルーススケール
- 各小節の着地はそのコードの3rd/7thを優先

---

## 一般的スタンダード向け（AABA想定）

1. 1コーラス目: スケール接続を固定（ミスを減らす）  
2. 2コーラス目: 弱拍テンション（9th中心）を追加  
3. 3コーラス目: 同素材のままリズムを変える  
4. Aセクション単位で反復してからBセクションへ進む

<AbcNotation abc='
X:1
T:Standard A-section Scale Workflow
M:4/4
L:1/8
K:C
"Dm7"D E F G A G F E | "G7"G A B c d c B A |
"CMaj7"C D E G A G E D | "A7"A B ^c d e d ^c B |
"Dm7"F E D C D E F A | "G7"B A G F G A B d |
"CMaj7"c B A G E D C B | "C7"C D E G A G E D |
' />

使い方:
- 前半4小節: 骨格優先で音を絞る
- 後半4小節: 弱拍テンションを追加
- まず `Autumn Leaves` か `There Will Never Be Another You` で適用

---

## 20分ルーティン（毎日）

| 時間 | 内容 |
|------|------|
| 4分 | ii-V-I スケール接続（4キー） |
| 4分 | ii-V-i スケール接続（4キー） |
| 4分 | V7差し替え + マイナー終止比較（エオリアン/ドリアン/メロディック） |
| 4分 | ブルースドリル（I-IV-V切替 + ブルーススケール） |
| 4分 | 曲適用（Autumn Leaves / Blue Bossa / Now's the Time） |

---

## 到達基準

| 基準 | 条件 |
|------|------|
| ✅ 最低ライン | ii-V-I / ii-V-i を主要4キーで止まらず切替できる |
| ⭐ 実用レベル | 12キーでスケール切替しつつ、強拍コードトーンを維持できる |
| 🔥 自動化レベル | 曲上でスケール選択を意識せず、テンションまで自然に運用できる |

---

## 関連ガイド

- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習](/guides/arpeggio-practice)
- [コード進行パターン](/guides/chord-progressions)
- [スタンダード一覧](/guides/repertoire)

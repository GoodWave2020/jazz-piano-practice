# There Will Never Be Another You 分析

`There Will Never Be Another You` を、**メジャー/マイナーii-Vとサブドミナントマイナー接続**を学ぶ基準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/There Will Never Be Another You.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | There Will Never Be Another You |
| Composer | Harry Warren |
| Key | E♭ |
| Rhythm | Medium Up Swing |
| Time Signature | 4/4 |
| Form | ABAC（8+8+8+8 = 32ユニット） |

メモ:
- Aセクションで `Dm7b5-G7b9-Cm7` のマイナーii-V-iが明示される。
- Cセクション終盤に `Gm7,C7 -> Fm7,Bb7 -> Eb6` の終止連結がある。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A（1-8） | E♭中心 + Cmin局所化 | メジャー土台にマイナーii-V-iを挿入 |
| B（9-16） | A♭→E♭ | サブドミナント側から回帰 |
| A（17-24） | E♭中心 | A再提示で安定化 |
| C（25-32） | E♭中心 + 二次ドミナント連鎖 | 終止へ向けて接続密度を上げる |

要点:
- 「メジャー曲の中でマイナーii-Vをどう扱うか」の実戦教材。
- Cの終盤2小節は、2拍単位のii-V処理がそのまま12キー練習素材になる。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション

<AbcNotation abc='
X:1
T:There Will Never Be Another You A
M:4/4
L:1/4
K:C
"Ebmaj7 (Ion-Lyd)"G4 | "Ebmaj7 (Ion-Lyd)"G4 | "Dm7b5 (Loc)"F4 | "G7b9 (Alt-PhryDom)"B4 |
"Cm7 (Dor)"_E4 | "Cm7 (Dor)"_E4 | "Bbm7 (Dor)"_D4 | "Eb7 (Mix-Lydb7)"G4 |
' />

### Bセクション

<AbcNotation abc='
X:1
T:There Will Never Be Another You B
M:4/4
L:1/4
K:C
"Abmaj7 (Ion-Lyd)"C4 | "Db7#11 (Lydb7)"F4 | "Ebmaj7 (Ion-Lyd)"G4 | "Cm7 (Dor)"_E4 |
"F7 (Mix)"A4 | "F7 (Mix)"A4 | "Fm7 (Dor)"_A4 | "Bb7 (Mix)"D4 |
' />

### Cセクション

<AbcNotation abc='
X:1
T:There Will Never Be Another You C
M:4/4
L:1/4
K:C
"Abmaj7 (Ion-Lyd)"C4 | "Db7#11 (Lydb7)"F4 | "Ebmaj7 (Ion-Lyd)"G4 | "Am7b5-D7 (Loc-Mix)"C2 ^F2 |
"Ebmaj7-Ab7 (Ion-Mix)"G2 C2 | "Gm7-C7 (Dor-Mix)"_B2 =E2 | "Fm7-Bb7 (Dor-Mix)"_A2 D2 | "Eb6-Bb7 (Ion-Mix)"G2 D2 |
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
| A 前半 | `Ebmaj7 ... Dm7b5-G7b9-Cm7` | メジャー内のマイナーii-V-i挿入 | Eb Ion-Lyd / D Loc / G Alt / C Dor |
| A 後半 | `Bbm7-Eb7` | サブドミナント接続 | Bb Dor / Eb Mix |
| B | `Abmaj7-Db7#11-Ebmaj7` | IV系回帰 + ii-V準備 | Ab Ion-Lyd / Db Lydb7 / Eb Ion |
| C | `... Am7b5,D7 ... Gm7,C7 -> Fm7,Bb7 -> Eb6` | 二次ii-V連鎖終止 | 各Dor/Loc/Mixの連結処理 |

---

## セクション別コード機能

### A（8ユニット）

- `Ebmaj7` でトニック提示
- `Dm7b5 -> G7b9 -> Cm7` で局所マイナー終止
- `Bbm7 -> Eb7` でサブドミナント側へ接続

### B（8ユニット）

- `Abmaj7 -> Db7#11 -> Ebmaj7` で回帰
- 後半 `F7 -> Fm7 -> Bb7` は色彩変化を含む終止準備

### C（8ユニット）

- `Am7b5,D7` を経由して終盤の連鎖へ
- `Gm7,C7 -> Fm7,Bb7 -> Eb6` が最終着地の核

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Dm7b5 -> G7b9 -> Cm7 | `F -> B -> Eb`（3rd連結） |
| Abmaj7 -> Db7 -> Ebmaj7 | `C -> F -> G`（3rd連結） |
| Gm7 -> C7 -> Fm7 -> Bb7 -> Eb6 | `Bb -> E -> Ab -> D -> G`（3rd連鎖） |

実践ルール:
1. Aで `Dm7b5-G7b9-Cm7` を固定語彙化
2. Bは2小節単位で音型再利用
3. C終盤は2拍ごとの着地だけ先に決める

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Ebmaj7 / Abmaj7 | Ionian / Lydian | 9, #11, 13 |
| Dm7b5 / Am7b5 | Locrian | 11中心 |
| G7b9 / D7 | Altered or Mix | b9/#9は短く解決 |
| Cm7 / Bbm7 / Fm7 / Gm7 | Dorian | 9,11 |
| Eb7 / Bb7 / C7 / F7 | Mixolydian / Lydb7 | 9,13（必要時#11） |

優先順位:
1. Aのマイナーii-V-iを先に固める
2. Bの `Abmaj7-Db7-Ebmaj7` で回帰感を作る
3. C終盤で2拍ii-Vを崩さず処理する

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: ABACの切替を明確化

### 2. 中級（ルートレス）

- `Dm7b5-G7b9-Cm7` と `Gm7-C7-Fm7-Bb7` を2塊で反復
- C終盤は音数を減らして終止感を出す

### 3. 密度設計

- A/Bは薄め、C終盤だけ推進感を強める

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | Aの `Dm7b5-G7b9-Cm7` を反復 |
| 3分 | Bの `Abmaj7-Db7-Ebmaj7` を反復 |
| 3分 | C終盤 `Gm7,C7 -> Fm7,Bb7 -> Eb6` を反復 |
| 3分 | ABAC通し（強拍3rd/7th固定） |
| 3分 | 2コーラス目でV7のみテンション追加 |

到達基準:
- ✅ ABACフォームを見失わない
- ⭐ C終盤の2拍連鎖を崩さず処理できる
- 🔥 12キーでAとCの連結語彙を再利用できる

---

## 関連ガイド

- [12キー練習ガイド](/guides/twelve-keys-practice)
- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [スケール練習ガイド](/guides/scale-practice)

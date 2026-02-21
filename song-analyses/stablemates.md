# Stablemates 分析

`Stablemates` を、メジャー中心の曲で「外側ii-V」と「ドミナント連鎖」を扱う練習曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Stablemates.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Stablemates |
| Composer | Benny Golson |
| Key | D♭ |
| Rhythm | Medium Swing |
| Time Signature | 4/4 |
| Form | A（14ユニット）+ B（8ユニット）+ A（14ユニット） = 36ユニット（ABA, JSON記法） |

メモ:
- `Em7,A7` のような表記は、1小節内の2コード（2拍ずつ）として扱う。
- 実譜では小節解釈に差が出ることがあるため、ここではJSON記法を優先する。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| A1（1-14） | D♭中心 + G♭領域 | 外側ii-Vで導入し、中盤で `Abm7-Db7-Gbmaj7` へ展開 |
| B（15-22） | ドミナント連鎖 | `Gb7 -> G7#5 -> C7 -> B7 -> Bb7 -> A7 -> Ab7` の半音下降中心 |
| A2（23-36） | D♭中心 + G♭領域 | A1を再提示し、終止の精度を確認する区間 |

要点:
- Aは `ii-V-I` をベースに、外側接続を挟みながらキーセンターを移動する。
- Bは「和声の安定」より「緊張の連続」を作る区間。リズムと着地管理が優先。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### Aセクション導入（外側ii-Vから主調へ）

<AbcNotation abc='
X:1
T:Stablemates A Intro (Outside ii-V to I)
M:4/4
L:1/4
K:C
"Em7 (Dor)"G2 "A7 (Mix)"^C2 | "Ebm7 (Dor)"_G2 "Ab7 (Mix)"C2 | "Dbmaj7 (Ion-Lyd)"F4 | "C7#5 (WT-Alt)"E4 |
"Abm7 (Dor)"B4 | "Db7 (Mix)"F4 | "Gbmaj7 (Ion-Lyd)"_B4 | "Gm7b5 (Loc)"_B2 "C7b9 (Alt)"E2 |
' />

### Aセクション終盤（終止連鎖）

<AbcNotation abc='
X:1
T:Stablemates A Cadential Chain
M:4/4
L:1/4
K:C
"Fm7 (Dor)"_A4 | "Bb7 (Mix)"D4 | "Ebm7 (Dor)"_G4 | "Ab7#5 (WT-Alt)"C4 |
"Dbmaj7 (Ion-Lyd)"F4 | "Dbmaj7 (Ion-Lyd)"F4 |
' />

### Bセクション（ドミナント連鎖）

<AbcNotation abc='
X:1
T:Stablemates B (Dominant Chain)
M:4/4
L:1/4
K:C
"Fm7 (Dor)"_A4 | "Gb7 (Mix-Alt)"_B4 | "G7#5 (WT-Alt)"B4 | "C7 (Mix-Alt)"E4 |
"B7 (Mix-Alt)"^D4 | "Bb7 (Mix-Alt)"D4 | "A7 (Mix-Alt)"^C4 | "Ab7 (Mix-Alt)"C4 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Dor` = Dorian
- `Mix` = Mixolydian
- `Loc` = Locrian
- `Alt` = Altered
- `WT` = Whole Tone

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| A 導入 | `Em7,A7 -> Ebm7,Ab7 -> Dbmaj7` | 外側ii-V接近 + I解決 | E Dorian / A Mix + Eb Dorian / Ab Mix / Db Ion-Lyd |
| A 中盤 | `C7#5 -> Abm7 -> Db7 -> Gbmaj7` | 外側ドミナント + Gb側ii-V-I | C WholeTone or Alt / Ab Dorian / Db Mix / Gb Ion-Lyd |
| A 終盤 | `Gm7b5,C7b9 -> ... -> Dbmaj7` | マイナーii-Vを含む終止連鎖 | G Locrian / C Altered -> F Dorian -> Bb Mix -> Eb Dorian -> Ab系V7 |
| B | `Gb7 -> G7#5 -> C7 -> B7 -> Bb7 -> A7 -> Ab7` | ドミナント連鎖 | 各ドミナントで Mix or Altered（#5はWholeTone優先） |

---

## セクション別コード機能

### A（14ユニット）

- `Em7,A7 -> Ebm7,Ab7 -> Dbmaj7`  
  半音で近づく外側ii-Vから主調Iへ解決
- `C7#5 -> Abm7 -> Db7 -> Gbmaj7`  
  外側ドミナントを経由して、G♭側の `ii-V-I` へ接続
- `Gm7b5,C7b9 -> Fm7 -> Bb7 -> Ebm7 -> Ab7#5 -> Dbmaj7`  
  マイナーii-Vを含む連鎖で終止を強化

### B（8ユニット）

- `Fm7 -> Gb7 -> G7#5 -> C7 -> B7 -> Bb7 -> A7 -> Ab7`  
  m7導入からドミナントが連続する、クロマチック志向のブリッジ

---

## ガイドトーン接続（3rd/7th）

最初は「各ユニットの先頭音」を固定して、解決の方向だけを耳で掴む。

| 進行 | 着地候補（例） |
|------|----------------|
| Ebm7 -> Ab7 -> Dbmaj7 | `Gb -> C -> F`（3rd連結） |
| Abm7 -> Db7 -> Gbmaj7 | `Cb -> F -> Bb`（3rd連結） |
| Gm7b5 -> C7b9 -> Fm7 | `Bb -> E -> Ab`（3rd連結） |
| Bb7 -> Ebm7 -> Ab7 -> Dbmaj7 | `D -> Gb -> C -> F`（3rd連結） |

実践ルール:
1. Aは `ii-V-I` の各I着地を必ず固定する
2. `C7#5` と `Ab7#5` はテンションより着地優先で短く扱う
3. Bのドミナント連鎖は1ユニット2拍感でリズムを均一化する

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Dbmaj7 | Db Ionian / Lydian | 9th（Eb）, 13th（Bb） |
| Em7,A7 | E Dorian / A Mixolydian | 外側導入は音数を減らして処理 |
| Ebm7,Ab7 | Eb Dorian / Ab Mixolydian | 9th中心で安定化 |
| C7#5 | C Whole Tone / Altered | #5（G#）を短く使い次へ解決 |
| Abm7,Db7 | Ab Dorian / Db Mixolydian | `Gbmaj7` への着地音を先に決める |
| Gbmaj7 | Gb Ionian / Lydian | 9th（Ab）, #11（C）で色付け可 |
| Gm7b5,C7b9 | G Locrian / C Altered | b9で緊張を作り `Fm7` に解決 |
| Fm7,Bb7 | F Dorian / Bb Mixolydian | 次の `Ebm7` への橋渡し |
| Ab7#5 | Ab Whole Tone / Altered | #5を使う場合は解決先を固定 |
| Bridge Dominants（Gb7〜Ab7） | 各ドミナントで Mixolydian or Altered | 連鎖区間は1音型を半音移動で再利用 |

優先順位:
1. Aの終止ポイント（`Dbmaj7`, `Gbmaj7`, `Dbmaj7`）を先に固定
2. 次に `Gm7b5-C7b9-Fm7` の処理を安定化
3. 最後にBのドミナント連鎖へ同一リズムモチーフを適用

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: Aの終止地点とBの連鎖を明確に分離して聴かせる

### 2. 中級（ルートレスA/B）

- `Ebm7-Ab7-Dbmaj7` と `Abm7-Db7-Gbmaj7` の2塊を反復
- `Gm7b5-C7b9-Fm7-Bb7-Ebm7-Ab7#5-Dbmaj7` は内声の半音進行を重視

### 3. ブリッジ対策

- `Gb7 -> G7#5 -> C7 -> B7 -> Bb7 -> A7 -> Ab7` は2拍ヒット中心
- 左手はルート、右手は3rd/7thだけに絞ると崩れにくい

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | A導入 `Em7,A7 -> Ebm7,Ab7 -> Dbmaj7` を反復 |
| 3分 | A中盤 `Abm7-Db7-Gbmaj7` の終止を反復 |
| 3分 | A終盤 `Gm7b5,C7b9 -> Fm7 -> Bb7 -> Ebm7 -> Ab7#5 -> Dbmaj7` を反復 |
| 3分 | Bのドミナント連鎖を2拍感で反復 |
| 3分 | 全体通し（強拍3rd/7th固定） |

到達基準:
- ✅ Aの主要終止（Db/Gb/Db）を見失わない
- ⭐ Bのドミナント連鎖をテンポ維持して通せる
- 🔥 外側ii-Vを含めても、同じ設計で別キーへ移調できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)

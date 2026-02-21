# Blue Bossa 分析

`Blue Bossa` を、**16小節でマイナーii-V-iと一時転調を学ぶ**ための基準曲として整理する。  
本ページの進行は `JazzStandards/JazzStandards/Blue Bossa.json` の記述を基準にしている。

---

## 基本情報

| 項目 | 内容 |
|------|------|
| 曲名 | Blue Bossa |
| Composer | Kenny Dorham |
| Key | Cmin |
| Rhythm | Bossa Nova |
| Time Signature | 4/4 |
| Form | 16小節（JSON記法: 1セクション） |

メモ:
- セッションでは1コーラス16小節で回すことが多い。
- 終盤の `Dm7b5,G7b9` は次コーラス頭へ戻すターン準備として扱える。

---

## フォームとキーセンター

| 区間 | キーセンター | 役割 |
|------|--------------|------|
| 1-4 | Cマイナー中心 | `Cm7` と `Fm7` でトニック感を固定 |
| 5-8 | Cマイナー終止 | `Dm7b5-G7b9-Cm7` の iiø-V-i |
| 9-12 | D♭メジャー側 | `Ebm7-Ab7-Dbmaj7` で一時転調 |
| 13-16 | Cマイナー回帰 | `Dm7b5-G7b9-Cm7` で戻し、最後は次周準備 |

要点:
- 16小節の短いフォームだが、**マイナー終止とメジャーii-V-Iが両方入る**。
- まず 5-8 と 13-16 の `iiø-V-i` を同一語彙で処理できる状態を作る。

---

## 視覚マップ（譜例 + 進行 + スケール）

以下はテーマ譜ではなく、**分析用のガイドトーン骨格**。

### 前半8小節（Cマイナー軸）

<AbcNotation abc='
X:1
T:Blue Bossa Bars 1-8 (Guide-Tone Skeleton)
M:4/4
L:1/4
K:C
"Cm7 (Dor-Aeo)"_E4 | "Cm7 (Dor-Aeo)"_E4 | "Fm7 (Dor)"_A4 | "Fm7 (Dor)"_A4 |
"Dm7b5 (Loc)"F4 | "G7b9 (Alt-PhryDom)"B4 | "Cm7 (Dor-Aeo)"_E4 | "Cm7 (Dor-Aeo)"_E4 |
' />

### 後半8小節（D♭転調 + 回帰）

<AbcNotation abc='
X:1
T:Blue Bossa Bars 9-16 (Modulation and Return)
M:4/4
L:1/4
K:C
"Ebm7 (Dor)"_G4 | "Ab7 (Mix-Lydb7)"C4 | "Dbmaj7 (Ion-Lyd)"F4 | "Dbmaj7 (Ion-Lyd)"F4 |
"Dm7b5 (Loc)"F4 | "G7b9 (Alt-PhryDom)"B4 | "Cm7 (Dor-Aeo)"_E4 | "Dm7b5-G7b9 (Loc-Alt)"F2 B2 |
' />

略号:
- `Ion` = Ionian
- `Lyd` = Lydian
- `Lydb7` = Lydian b7
- `Dor` = Dorian
- `Aeo` = Aeolian
- `Loc` = Locrian
- `Alt` = Altered
- `PhryDom` = Phrygian Dominant

### 区間別ラベル（目安）

| 区間 | 主な進行 | 進行ラベル | 推奨スケール（第一候補） |
|------|----------|------------|--------------------------|
| 1-4 | `Cm7 -> Fm7` | マイナー・トニック固定 | C Dorian or Aeolian / F Dorian |
| 5-8 | `Dm7b5 -> G7b9 -> Cm7` | マイナーiiø-V-i | D Locrian / G Altered / C Dorian |
| 9-12 | `Ebm7 -> Ab7 -> Dbmaj7` | メジャーii-V-I（一時転調） | Eb Dorian / Ab Mix / Db Ion-Lyd |
| 13-16 | `Dm7b5 -> G7b9 -> Cm7` | Cマイナー回帰 + ターン準備 | D Locrian / G Alt / C Dorian-Aeolian |

---

## セクション別コード機能

### 1-8（Cマイナー）

- `Cm7 -> Cm7 -> Fm7 -> Fm7`  
  トニック/サブドミナントで土台を作る
- `Dm7b5 -> G7b9 -> Cm7 -> Cm7`  
  マイナーiiø-V-iで終止

### 9-16（D♭側→Cマイナー回帰）

- `Ebm7 -> Ab7 -> Dbmaj7 -> Dbmaj7`  
  D♭メジャーへの短い転調
- `Dm7b5 -> G7b9 -> Cm7 -> Dm7b5,G7b9`  
  Cマイナー回帰 + 次周準備

---

## ガイドトーン接続（3rd/7th）

| 進行 | 着地候補（例） |
|------|----------------|
| Dm7b5 -> G7b9 -> Cm7 | `F -> B -> Eb`（3rd連結） |
| Ebm7 -> Ab7 -> Dbmaj7 | `Gb -> C -> F`（3rd連結） |
| G7b9 -> Cm7 | `B -> C` か `F -> Eb`（半音解決） |

実践ルール:
1. 5-8 と 13-16 は同じ着地設計で再利用する
2. 9-12 だけ「別キーのii-V-I」として切り替える
3. 各4小節の1小節目だけでも拍頭着地を固定する

---

## 即興設計（スケール / テンション）

| コード | 第一候補 | テンション運用 |
|-------|----------|----------------|
| Cm7 | C Dorian / Aeolian | 9th（D）, 11th（F） |
| Fm7 | F Dorian | 9th（G）, 11th（Bb） |
| Dm7b5 | D Locrian | 11th（G）中心 |
| G7b9 | G Altered / PhryDom | b9（Ab）, b13（Eb）で解決 |
| Ebm7 | Eb Dorian | 9th（F）, 11th（Ab） |
| Ab7 | Ab Mixolydian / Lydb7 | 13th（F）か #11（D）を弱拍で使用 |
| Dbmaj7 | Db Ionian / Lydian | 9th（Eb）, #11（G） |

優先順位:
1. まず `Dm7b5-G7b9-Cm7` の処理を固定
2. 次に `Ebm7-Ab7-Dbmaj7` を別塊として定着
3. 最後に `Cm7` で Dorian/Aeolian を使い分けて色を比較

---

## コンピング設計

### 1. 初級（シェル）

- LH: Root + 7th
- RH: 3rd + 7th
- 目的: 16小節フォームを崩さず回す

### 2. 中級（ルートレス）

- `Dm7b5-G7b9-Cm7` を2パターン固定
- 9-12 のみボイシングを少し開いて転調感を明確化

### 3. ボサノバ対策

- 左手は2フィール寄りで安定
- 右手は裏拍に短く置いて密度を均一化

---

## 15分練習メニュー

| 時間 | 内容 |
|------|------|
| 3分 | 5-8 の `Dm7b5-G7b9-Cm7` を反復 |
| 3分 | 9-12 の `Ebm7-Ab7-Dbmaj7` を反復 |
| 3分 | 13-16 の回帰 + 次周接続を反復 |
| 3分 | 16小節通し（強拍3rd/7th固定） |
| 3分 | 1コーラス目Dorian固定、2コーラス目Aeolian混在で比較 |

到達基準:
- ✅ 16小節をフォーム迷いなく通せる
- ⭐ 9-12 の転調でスケールを切替できる
- 🔥 `iiø-V-i` を別キーへ移調して同じ設計で運用できる

---

## 関連ガイド

- [コード進行パターン](/guides/chord-progressions)
- [即興フレーズ設計](/guides/improvisation-phrasing)
- [アルペジオ練習ガイド](/guides/arpeggio-practice)
- [スケール練習ガイド](/guides/scale-practice)


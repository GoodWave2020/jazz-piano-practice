# 1001 Jazz Licks フレーズ解析ノート

`1001 Jazz Licks.pdf`（プロジェクト直下）を対象に、実譜面ベースでフレーズ傾向を整理したメモ。  
用途は「どのリックを先に語彙化するか」の判断材料。

---

## 解析条件

- 解析日: 2026-02-23
- 対象: `1001 Jazz Licks.pdf`（113ページ、画像スキャンPDF）
- 手法:
  - 目次ページをOCRして章構成を抽出
  - 各章開始ページのコード進行をOCRで抽出
  - 代表リック（例: 121, 221, 541, 601, 761, 911, 941, 991）を目視分析

注意:
- 本PDFはテキスト抽出不可（楽譜画像）なので、進行名はOCR誤読を手で補正している。
- 音高を完全機械抽出した解析ではなく、練習設計向けの実用分析。

---

## 章構成（目次ベース）

### Essential Licks

| セクション | 開始ページ | 代表進行（抽出） |
|---|---:|---|
| Major 7th | 6 | `Cmaj7` |
| Minor 7th | 10 | `Cm7` |
| Dominant 7th | 14 | `C7` |
| ii-V-I | 18 | `Dm7 - G7 - Cmaj7` |
| ii-V-i | 28 | `Dm7b5 - G7 - Cm7` |
| ii-V-I-VI | 36 | `Dm7 - G7 - Cmaj7 - A7` |
| ii-V-i-VI | 40 | `Dm7b5 - G7 - Cm7 - A7` |
| I-VI-ii-V | 44 | `Cmaj7 - A7 - Dm7 - G7` |
| i-VI-ii-V | 48 | `Cm - A7 - Dm7b5 - G7` |
| Dorian | 52 | `Cm7`（モーダル） |
| Lydian | 54 | `Cmaj7#11`（モーダル） |
| Phrygian | 56 | `Cm7`（モーダル） |
| Aeolian | 58 | `Cm7`（モーダル） |
| ii-V-I with Coltrane Substitutions | 60 | `Dm7 - Eb7 - Abmaj7 - B7 - Emaj7 - G7 - Cmaj7` |

### Stylistic Licks

| セクション | 開始ページ | 代表進行（抽出） |
|---|---:|---|
| Swing Progression #1 | 62 | `C6 - Eb°7 - Dm7 - G7 - C6` |
| Swing Progression #2 | 64 | `G6 - C6 - G6 - Bm7 - E7 - Am7` |
| Bebop Progression #1 | 66 | `Gmaj7 - Gm7 - C7 - Fmaj7` |
| Bebop Progression #2 | 68 | `Fmaj7 - Dm7 - Gm7 - C7 ...` |
| Hard Bop Progression #1 | 70 | `Ebmaj7 - G7 - Ab7 - G7 / Cm - Cm/Bb - Am7b5 - D7 - Gm7` |
| Hard Bop Progression #2 | 73 | `Cm - Db7 - Cm` |
| Post Bop Progression #1 | 75 | `Cm - Db7 ...` |
| Post Bop Progression #2 | 77 | `Dm7 ... / Bbmaj7#11 - Am7 ...` |
| Non-Harmonic | 79 | `Bbmaj7#11 - Am7` など |
| Fusion/Funk Progression #1 | 83 | `D7`（ワンコード） |
| Fusion/Funk Progression #2 | 86 | `D7`（ワンコード） |

### Licks over Standard-Type Progressions

| 開始ページ | セクション名（目次） | 先頭進行の骨格（抽出） |
|---:|---|---|
| 90 | I Hear Polyphony | `Cm7 - Fm7 - Bb7 - Ebmaj7 - C7` |
| 91 | Two Weeks Notice | `Em7 - A7 / Fm7 - Bb7 / Ebmaj7 ...` |
| 92 | Autumn Left | `Cm7 - F7 - Bbmaj7 - Ebmaj7 ...` |
| 93 | You are all the Things | `Fm7 - Bbm7 - Eb7 - Abmaj7` |
| 94 | Loudly, as in the Morning Alarm Clock | `Cm - Dm7b5 - G7 ...` |
| 95 | Bobby and Joel | `Ebm - Bb7 - Ebm7 - Ab7 - Dbmaj7 - Gb7 - Fm7 - E°7` |
| 96 | How Inflexible | `Dm - C#°7 - Cm7` |
| 97 | Lunar | `Cm6/9 - Gm7 - C7 - Fmaj7` |
| 98 | Some Days I Mince a Plum | `Bbmaj7 - D7 - Ebmaj7 - G7 - Cm7` |
| 99 | Blues in F | `F7 - Bb7 - F7 ...` |
| 100 | New Bossa | `Cm7 - Fm7 - Dm7b5 ...` |
| 101 | Purple Porpoise Path | `Cmaj7 - Cm7 - D/C` |
| 102 | Take the Third Plane | `Cmaj7 - D7 - Dm7 ...` |
| 103 | Skip Steps | `Bmaj7 - D7 - Gmaj7 - Bb7 - Ebmaj7 ...` |
| 104 | Is there Greater Love? | `Bbmaj7 - Eb7 - Ab7 - G7 - C7` |
| 105 | Shaman | `Bbmaj7 - Fm7 - Bb7 - Ebmaj7` |
| 106 | Dickenson | `Cmaj7 - Am7 - Dm7 - G7 - Gm7` |
| 107 | Bootprints | `Cm7 - C7 - Fm7`（p108継続） |
| 109 | Night under Anesthesia | `Eb7 - Dm ...` |
| 110 | You Stepped on a Dream | `Cmaj7 - Dbmaj7 - Bbm7 ...` |

---

## フレーズ語彙の傾向（実譜面観察）

1. 8分音符主体 + 局所3連
- ほぼ全章で「連続8分」が基本文法。
- 3連符は終止前・小節跨ぎでアクセントとして挿入される。

2. 強拍ターゲットのガイドトーン志向
- ii-V-I / ii-V-i 系は、コードチェンジで `3rd`/`7th` に着地するラインが中心。
- 速い運動でも解決点が明瞭なので、語彙化しやすい。

3. ドミナントでのクロマチック処理
- `G7`, `D7`, `F7` 系で半音アプローチが頻出。
- 典型は「上/下隣接音 -> ターゲット音」の短いエンクロージャー。

4. 同型モチーフのシーケンス展開
- 同じリズム型を和音ごとに移置して進行を通過する書法が多い。
- 覚える時は音名丸暗記より「型 + 着地音」で管理した方が早い。

5. モーダル章は「和声情報を減らし、リズムと音価を増やす」
- Dorian/Lydian/Phrygian/Aeolian はワンコード前提。
- 音域跳躍より、反復・休符・音価コントロールが中心。

6. Coltrane Sub 章は「キーセンター急移動への接続訓練」
- `Dm7 -> Eb7 -> Abmaj7 -> B7 -> Emaj7 ...` のように短周期で調性感が切り替わる。
- 1小節1和音で追うより、2和音ずつの塊で見る方が実戦で使いやすい。

---

## 代表リックの観察メモ

| リック | 進行 | 観察ポイント | 練習変形の例 |
|---:|---|---|---|
| 121 | `Dm7-G7-Cmaj7` | 前半は順次進行中心、終止で3連を入れて解決感を強化 | 末尾3連だけ別キーに移植 |
| 221 | `Dm7b5-G7-Cm7` | マイナーii-V-iでクロマチック接続が濃い | `G7` 部分を `alt` 音で差し替え |
| 541 | Coltrane Sub | 短い順次型を転調ごとに接続する対称感 | 2和音ずつ分解して12キー化 |
| 601 | `Gmaj7-Gm7-C7-Fmaj7` | メジャー->マイナー同主移行の滑りが特徴 | 前半2拍を休符化してリズム変形 |
| 761 | `D7` | ワンコードで休符を活かした反復モチーフ | 同音反復回数を変えてA/B化 |
| 911 | `Cmaj7-Cm7-D/C` | 音数少なめ、間を使うメロディ設計 | 音価そのまま着地音のみ差し替え |
| 941 | `Bbmaj7-Eb7-Ab7-G7-C7` | 連鎖ドミナント上で3連の差し込みが効く | `Ab7-G7-C7` だけ切り出し循環 |
| 991 | `Cmaj7-Dbmaj7-Bbm7...` | 半音上へのサイドスリップ感が強い | 2拍前倒し/後ろ倒しでタイム練習 |

---

## 実践への落とし込み（最短ルート）

1. まず 8本だけ固定で語彙化
- `121, 221, 541, 601, 761, 911, 941, 991`

2. 覚え方は「4レイヤー」
- `進行名` -> `リズム型` -> `着地音` -> `装飾音` の順に分解して覚える。

3. 12キー展開の優先順位
- 優先: `ii-V-I`, `ii-V-i`, `I-VI-ii-V`, `Blues in F` 系
- 後回し: Coltrane Sub、標準進行章の長尺ライン

4. 1リックの完成条件
- 原キーでテンポ `♩=120` で2回連続ノーミス
- 4キー移調で同じリズムを維持
- 別進行に「前半だけ」「後半だけ」を移植できる

---

## 次にやると効果が高いこと

- このノートの8本を `guides/twelve-keys-practice.md` の週ローテーションに組み込む
- `ii-V-I` と `ii-V-i` だけ、同一リズムで新規自作リックを毎週2本作る

## 関連ページ

- [1001 Jazz Licks 厳選フレーズ集](/guides/1001-jazz-licks-picked-phrases)

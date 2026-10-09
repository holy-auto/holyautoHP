# HOLY AUTO ホームページ

Wix サイト（holy0918.wixsite.com/holy-auto）を、Wix に依存しない静的 HTML/CSS で再現したものです。
ビルド不要で、各 HTML をブラウザで開けばそのまま表示できます。

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | ホーム（ヒーロー / サービス / パッケージ / 実績 / レビュー / 予約） |
| `coating.html` | コーティング（4ブランド / 工程 / プラン） |
| `electronics.html` | 電装・カスタム取付（カテゴリ / 説明 / FAQ） |
| `brands.html` | 取扱ブランド（カーケア / カスタム） |
| `blog.html` | ブログ一覧 |
| `assets/css/style.css` | 共通スタイル |
| `assets/js/main.js` | ハンバーガーメニュー・外部リンク設定 |
| `assets/img/` | 画像 |

## 公開前に差し替えが必要なもの

1. **外部リンク**：`assets/js/main.js` 冒頭の `LINKS` に URL を入れる
   - `book`（Square 予約） / `line`（公式LINE） / `x` / `instagram` / `mitsumoa`
2. **画像**：`assets/img/` の写真はスクリーンショットから切り出した仮画像（低解像度）です。元画像に差し替えてください。
   - ホームの施工実績ギャラリー、コーティングページの施工写真、ブログ記事画像（2件）はプレースホルダーです。
3. **料金**：パッケージ料金は Wix 版と同じく `¥XXX,XXX` の仮表記です。

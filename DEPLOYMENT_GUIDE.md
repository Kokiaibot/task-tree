# Task Tree - デプロイガイド

## 🎯 現在の状態

✅ **アプリケーションは完成しており、ローカルで動作中です**

- **開発サーバーURL**: https://3000-is9ij6wahmu24bnuowvvf-c07dda5e.sandbox.novita.ai
- **プロジェクトディレクトリ**: `/home/user/webapp`
- **バックアップURL**: https://www.genspark.ai/api/files/s/Ci3qja8n

## 📦 デプロイ可能なファイル

`dist/` フォルダには以下のファイルが含まれています：
- `index.html` - メインHTMLファイル
- `app.js` - Reactアプリケーションコード
- `_worker.js` - Cloudflare Workers用のエッジ関数
- `_routes.json` - ルーティング設定

これらのファイルは**そのまま任意の静的ホスティングサービスにデプロイ可能**です。

## 🚀 Cloudflare Pagesへのデプロイ方法

### 前提条件
1. Cloudflareアカウント（無料プランで可）
2. Cloudflare API Token
3. GitHubアカウント（オプション）

### 方法1: Wranglerを使った直接デプロイ（推奨）

#### ステップ1: Cloudflare API Tokenの作成

1. [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)にアクセス
2. "Create Token"をクリック
3. "Edit Cloudflare Workers"テンプレートを選択
4. 以下の権限を追加：
   - `Account.Cloudflare Pages` - Edit
   - `Account.Account Settings` - Read
5. "Continue to summary" → "Create Token"
6. トークンをコピーして保存

#### ステップ2: Sandboxでの設定

```bash
# Deployタブを開いてAPI Tokenを設定
# または、環境変数として直接設定
export CLOUDFLARE_API_TOKEN="your-api-token-here"

# Wrangler認証を確認
npx wrangler whoami
```

#### ステップ3: プロジェクトの作成とデプロイ

```bash
cd /home/user/webapp

# プロジェクトを作成（初回のみ）
npx wrangler pages project create task-tree --production-branch main

# ビルド
npm run build

# デプロイ
npx wrangler pages deploy dist --project-name task-tree

# デプロイ後のURL例: https://task-tree.pages.dev
```

### 方法2: Cloudflare Dashboardからの手動デプロイ

#### ステップ1: ファイルの準備

```bash
cd /home/user/webapp
npm run build

# dist/ フォルダをダウンロードまたはZIP化
tar -czf task-tree-dist.tar.gz dist/
```

#### ステップ2: Cloudflare Dashboardでのアップロード

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログイン
2. "Workers & Pages" → "Create application"を選択
3. "Pages" → "Upload assets"を選択
4. プロジェクト名を入力: `task-tree`
5. `dist/` フォルダの内容をアップロード
6. "Deploy site"をクリック

### 方法3: GitHubリポジトリ経由のデプロイ（CI/CD）

#### ステップ1: GitHubリポジトリの作成

```bash
# GitHub認証を設定（Sandboxの#githubタブから）
cd /home/user/webapp

# リモートリポジトリを追加
git remote add origin https://github.com/YOUR_USERNAME/task-tree.git
git push -u origin main
```

#### ステップ2: Cloudflare PagesとGitHubの連携

1. Cloudflare Dashboard → "Workers & Pages"
2. "Create application" → "Pages" → "Connect to Git"
3. GitHubアカウントを連携
4. `task-tree` リポジトリを選択
5. ビルド設定：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
6. "Save and Deploy"をクリック

以降、`git push`するたびに自動デプロイされます。

## 🌐 他のホスティングサービスでのデプロイ

### Vercel

```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
cd /home/user/webapp
vercel --prod
```

### Netlify

```bash
# Netlify CLIをインストール
npm i -g netlify-cli

# デプロイ
cd /home/user/webapp
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# gh-pagesブランチにデプロイ
npm install -g gh-pages

# デプロイ
cd /home/user/webapp
npm run build
gh-pages -d dist
```

## 🔧 トラブルシューティング

### エラー: "Unauthorized"

```bash
# API Tokenを再設定
export CLOUDFLARE_API_TOKEN="your-new-token"
npx wrangler whoami
```

### エラー: "Project already exists"

```bash
# 既存プロジェクトにデプロイ
npx wrangler pages deploy dist --project-name task-tree
```

### ビルドエラー

```bash
# 依存関係を再インストール
cd /home/user/webapp
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 デプロイ後の確認

デプロイが成功したら、以下を確認してください：

1. ✅ アプリケーションが正常に表示される
2. ✅ タスクの作成・編集が機能する
3. ✅ LocalStorageでデータが保存される
4. ✅ 週間ビューとガントチャートが動作する
5. ✅ チームメンバー管理が機能する

## 🔐 環境変数（オプション）

将来的にAPIを追加する場合：

```bash
# Cloudflare Pagesの環境変数設定
npx wrangler pages secret put API_KEY --project-name task-tree
```

## 📝 注意事項

- **LocalStorage使用**: データはブラウザに保存されるため、異なるデバイスやブラウザでは共有されません
- **HTTPS必須**: 本番環境では必ずHTTPSを使用してください（Cloudflare Pagesは自動的にHTTPS化）
- **カスタムドメイン**: Cloudflare Dashboardから独自ドメインを設定できます

## 🎉 デプロイ完了後

デプロイが完了したら、以下のURLでアクセスできます：

- **Cloudflare Pages**: `https://task-tree.pages.dev`
- **カスタムドメイン**: 設定後に利用可能

---

**作成日**: 2026-01-04  
**バージョン**: 1.0.0

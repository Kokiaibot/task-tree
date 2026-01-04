# 🚀 Vercel デプロイ完全ガイド

このガイドに従って、Task TreeアプリをVercelにデプロイしてください。

---

## 📦 ステップ1: プロジェクトをダウンロード

以下のリンクからプロジェクトのバックアップをダウンロードしてください：

**ダウンロードURL**: https://www.genspark.ai/api/files/s/otqyFU4j

---

## 💻 ステップ2: ローカルで解凍

### Windowsの場合:
```bash
# ダウンロードしたファイルを右クリック → 「すべて展開」
# または7-Zip, WinRARなどで解凍
```

### Mac/Linuxの場合:
```bash
tar -xzf task-tree-vite-react-final.tar.gz
cd home/user/webapp
```

---

## 🌐 ステップ3: GitHubリポジトリを作成

### オプションA: GitHub Webサイトで作成（推奨）

1. https://github.com/new にアクセス
2. **Repository name**: `task-tree`
3. **Public** を選択
4. **Create repository** をクリック

### オプションB: GitHub CLI（コマンドライン）
```bash
cd home/user/webapp
gh auth login
gh repo create task-tree --public --source=. --remote=origin
```

---

## 📤 ステップ4: コードをGitHubにプッシュ

```bash
cd home/user/webapp

# Gitリポジトリを初期化（まだの場合）
git init

# GitHubリポジトリをリモートに追加（YOUR_USERNAMEを自分のGitHubユーザー名に変更）
git remote add origin https://github.com/YOUR_USERNAME/task-tree.git

# すべてのファイルをコミット
git add .
git commit -m "Initial commit: Task Tree application"

# mainブランチにプッシュ
git branch -M main
git push -u origin main
```

---

## 🎯 ステップ5: VercelでデプロイRun

### 5-1. Vercelアカウントにログイン

https://vercel.com にアクセスしてログイン（GitHubアカウントで連携推奨）

### 5-2. 新規プロジェクトを作成

1. **「Add New...」** ボタンをクリック
2. **「Project」** を選択

### 5-3. GitHubリポジトリをインポート

1. **「Import Git Repository」** セクションで `task-tree` を検索
2. **「Import」** をクリック

### 5-4. プロジェクト設定（自動検出）

Vercelが自動的に以下を検出します：
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

→ **「Deploy」** をクリック

### 5-5. デプロイ完了！

約1〜2分でデプロイが完了します。以下のURLが発行されます：
- **Production**: `https://task-tree.vercel.app`
- **または**: `https://task-tree-your-username.vercel.app`

---

## 🔧 ステップ6: 独自ドメインの設定（オプション）

1. Vercelダッシュボードで **「Settings」** → **「Domains」**
2. **「Add」** をクリック
3. 独自ドメイン（例: `mytasktree.com`）を入力
4. DNS設定を更新（VercelのCNAMEレコードを追加）

---

## 📊 デプロイ後の確認事項

### ✅ チェックリスト
- [ ] アプリが正常に表示される
- [ ] タスクの作成・編集・削除が動作する
- [ ] 週間ビュー・ガントチャートが表示される
- [ ] localStorageにデータが保存される
- [ ] レスポンシブデザインが機能する

---

## 🆘 トラブルシューティング

### ビルドエラーが発生する場合

```bash
# ローカルで動作確認
cd home/user/webapp
npm install
npm run build
npm run preview
```

### Vercelでビルドが失敗する場合

1. Vercel ダッシュボード → **「Settings」** → **「Environment Variables」**
2. `NODE_VERSION` を `18` に設定
3. **「Redeploy」** をクリック

### ページが表示されない場合

- Vercelの **「Deployments」** タブでログを確認
- `dist/` フォルダが正しく生成されているか確認

---

## 🎉 成功！

デプロイが完了したら、以下のURLでアクセスできます：

**あなたのアプリURL**: `https://task-tree-[your-username].vercel.app`

---

## 📱 次のステップ

### 機能拡張のアイデア:
1. **バックエンドDB**: Supabase連携でデータ永続化
2. **認証機能**: ユーザーログイン追加
3. **チーム共有**: 複数人での共同作業
4. **通知機能**: 期限リマインダー
5. **PWA化**: オフライン対応

---

## 📞 サポート

デプロイに問題がある場合は、以下を確認してください：
- Vercel公式ドキュメント: https://vercel.com/docs
- Viteドキュメント: https://vitejs.dev/guide/

---

**Good luck! 🚀**

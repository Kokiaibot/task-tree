# Task Tree - タスク管理アプリケーション

階層的なタスク管理システムで、プロジェクトと課題を視覚的に整理できます。

## 🚀 デプロイ済みURL

- **Sandbox開発環境**: https://3000-is9ij6wahmu24bnuowvvf-c07dda5e.sandbox.novita.ai

## ✨ 主な機能

### タスク管理機能
- ✅ 階層的なタスクツリー構造（プロジェクト/課題/タスク）
- ✅ ドラッグ&ドロップによる期限設定
- ✅ 担当者の割り当て（色分け）
- ✅ 完了状態の管理
- ✅ 説明文の追加

### 表示モード（3種類）
1. **ツリービュー** - 階層構造を確認
2. **週間ビュー** - 7日間のタイムライン（今日から1週間）
3. **ガントチャート** - 6ヶ月の長期計画

### チーム機能
- メンバーの追加・編集・削除
- 7色のカラーテーマ
- タスクへの担当者割り当て

### UI/UX
- レスポンシブデザイン
- ドラッグ&ドロップ対応
- キーボードショートカット完備
- スムーズなアニメーション
- ヘルプモーダル

## 🛠 技術スタック

- **フロントエンド**: React 19
- **ビルドツール**: Vite 5
- **スタイリング**: Tailwind CSS 3
- **アイコン**: Lucide React
- **デプロイ**: Vercel対応

## 📦 ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## 🌐 Vercelへのデプロイ手順

### 1. Vercel CLIのインストール（初回のみ）
```bash
npm install -g vercel
```

### 2. GitHubリポジトリの作成
```bash
# GitHub認証（初回のみ）
gh auth login

# 新しいリポジトリを作成
gh repo create task-tree --public --source=. --remote=origin --push
```

### 3. Vercelにデプロイ
```bash
# Vercelにログイン（初回のみ）
vercel login

# 本番環境にデプロイ
vercel --prod
```

### または: Vercel Webダッシュボードから

1. https://vercel.com にアクセス
2. "New Project" をクリック
3. GitHubリポジトリをインポート
4. 自動的に設定が検出されます
5. "Deploy" をクリック

## ⌨️ キーボードショートカット

- **Enter**: 同じ階層に新規タスク追加
- **Ctrl + Enter**: 子タスクを追加
- **Shift + Enter**: 新規プロジェクトを追加
- **Delete / Backspace**: タスクを削除
- **Space**: 完了状態をトグル
- **?**: ヘルプを表示

## 📋 データの永続化

- ブラウザのlocalStorageを使用
- ページをリロードしてもデータは保持されます
- キー: `task_tree_app_data_v1` と `task_tree_team_data_v1`

## 🎯 使い方

1. **プロジェクトを作成**: `Shift + Enter`を押す
2. **タスクを追加**: プロジェクトを選択して `Enter`
3. **期限を設定**: 週間ビューでタスクをドラッグ
4. **担当者を割り当て**: タスクをクリックして詳細画面から設定
5. **ビューを切り替え**: 左サイドバーのアイコンをクリック

## 📁 プロジェクト構造

```
webapp/
├── src/
│   ├── App.jsx          # メインアプリケーション
│   ├── main.jsx         # エントリーポイント
│   └── index.css        # グローバルスタイル
├── dist/                # ビルド成果物
├── public/              # 静的ファイル
├── index.html           # HTMLテンプレート
├── vite.config.js       # Vite設定
├── tailwind.config.js   # Tailwind設定
├── postcss.config.js    # PostCSS設定
└── package.json         # 依存関係
```

## 🔧 トラブルシューティング

### ビルドエラーが発生する場合
```bash
# node_modulesとdistを削除して再インストール
rm -rf node_modules dist
npm install
npm run build
```

### Tailwind CSSが適用されない場合
- `tailwind.config.js`のcontentパスを確認
- `postcss.config.js`が存在するか確認

## 📝 バージョン履歴

- **v1.0.0** (2026-01-04): 初回リリース
  - React + Vite + Tailwind CSSによる実装
  - 3つの表示モード（ツリー、週間、ガントチャート）
  - チーム管理機能
  - キーボードショートカット
  - Vercelデプロイ対応

## 📄 ライセンス

MIT License

## 🙏 謝辞

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

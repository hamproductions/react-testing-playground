# React Testing Playground

テスティングにまつわる、テンプレート的なレポジトリです。

## スタック

- React (19), Next.js
- park-ui, pandacss
- Storybook, Vitest

## コマンド

詳しく`./package.json`に参照してください。

- インストール：`bun i` 
- Next.jsアプリを立ち上がる：`bun dev`
- テストを開発する: `bun test:ui`
- テストを実行する： `bun run test`
- Coverage付きテスト: `bun run test:ci`
- Storybook: `bun storybook`

- lint: `bun lint`
- type-check: `bun type-check`
- 全部チェックする: `bun check`

## 参考できるところ (?)
- package.json
- Github Actions
- vitest.config.ts
- vitest-setup.ts
- msw設定
- eslint
- prettier
  
## リンク集
- テストにまつわる知識：
  - https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
  - https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications
- テストを導入する法方：
  - https://nextjs.org/docs/app/building-your-application/testing/vitest
  - https://testing-library.com/docs/react-testing-library/setup
- msw: 
  - https://mswjs.io/docs/getting-started
  - https://github.com/mswjs/examples
  
## やること
- [x] Setup Test（設定）
- [x] Basic Test
- [x] Unit Test（ユニットテスト）
- [x] UI Test（UIテスト）
- [x] Integration Testing（統合テスト）
- [x] Mocking Package
- [x] Mocking Requests
- [x] Storybook 
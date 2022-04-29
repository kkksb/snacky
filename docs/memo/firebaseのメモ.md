# firebaseのメモ

Firebaseの使い方 – プロジェクト作成からVue.jsでデプロイするまで | devsakaso https://devsakaso.com/firebase-basics/#

Firebaseで作るWebアプリケーション - APIを作成する - Qiita https://qiita.com/sfjwr/items/ac8c623b17e0e92f5632

## firebaseでAPI作成

アプリから関数を呼び出す  |  Firebase Documentation https://firebase.google.com/docs/functions/callable?hl=ja

HTTP リクエスト経由で関数を呼び出す  |  Firebase Documentation https://firebase.google.com/docs/functions/http-events?hl=ja

### 実際に呼び出す

Vue.jsでFirebase Functionsを使う - Qiita https://qiita.com/cslf-fh/items/a384c00b78d1086b5b81

## Webアプリのデプロイ

VueアプリをFirebaseに爆速デプロイ! - Qiita https://qiita.com/kmtym1998/items/118090f83902371c3715

### 部分デプロイ

* APIサーバのみ
関数のデプロイとランタイム オプションを管理する  |  Firebase Documentation https://firebase.google.com/docs/functions/manage-functions

## トラブルシューティング

* バージョンによるエラー
firebase - Error: HTTP Error: 400, Invalid JSON payload received. Unknown name "skipLog": Cannot find field - Stack Overflow https://stackoverflow.com/questions/71937121/error-http-error-400-invalid-json-payload-received-unknown-name-skiplog-c

* デプロイターゲット
デプロイ ターゲット  |  Firebase Documentation https://firebase.google.com/docs/cli/targets?hl=ja

firebase.jsonの外部にあるファイルへはアクセスできないようだ。
つまり、今回で言うとvue.js/distに対し、
vuejs
firebase
┗firebase.json
という構図はいけないようだ。

* CORSポリシー
Vue.jsでFirebase Functionsを使う - Qiita https://qiita.com/cslf-fh/items/a384c00b78d1086b5b81

functionのリージョンを合わせること、関数名を間違えないこと。
corsは要調査。
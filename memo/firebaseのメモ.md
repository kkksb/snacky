# firebaseのメモ

Firebaseの使い方 – プロジェクト作成からVue.jsでデプロイするまで | devsakaso https://devsakaso.com/firebase-basics/#

Firebaseで作るWebアプリケーション - APIを作成する - Qiita https://qiita.com/sfjwr/items/ac8c623b17e0e92f5632

## firebaseでAPI作成

アプリから関数を呼び出す  |  Firebase Documentation https://firebase.google.com/docs/functions/callable?hl=ja

## Webアプリのデプロイ

VueアプリをFirebaseに爆速デプロイ! - Qiita https://qiita.com/kmtym1998/items/118090f83902371c3715

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
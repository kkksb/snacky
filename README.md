# Snacy

## このリポジトリについて

近所のおすすめのお菓子屋さんをみんなでオススメしあうサービスです。

## 開発者向け

### ローカルで画面だけを起動

画面の起動は
```
$ cd vuejs
$ npm install
$ npm run dev
```
で行えます。

nodeがない場合は適宜インストールしてください。

Linterでエラーが出ている場合は、
```
$ npm run fixlint
```
を試してみてください。

### コンテナ起動

```
$ docker-compose up --build -d
```
にて起動して、

http://localhost:8080/
から確認してみてください。

buildオプションは初回時のみで問題ないです。

### firebase

```
$ npm install
$ firebase login
```

### APIサーバのみ起動

'''
$ cd functions
$ npm install
$ firebase deploy --only functions
'''

エラーが出る場合は、
```
$ cd functions
$ npm run fixlint
```
を試してみてください

#### 止める場合

```
$ firebase hosting:disable
```

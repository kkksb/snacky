<template>
    <v-app-bar app clipped-left class="pr-1">
        <v-row>
            <v-col cols="12" md="3" class="header-title">
                <h1>Snacky</h1>
            </v-col>
            <v-spacer></v-spacer>
            <v-col md="2" cols="12" class="header-buttons">
                <v-btn class="left-button">投稿</v-btn>
                <v-btn>アカウント作成</v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<style>
.header-title {
    text-align: left;
}
.header-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
}

.left-button {
    margin-right: 10px;
}
</style>

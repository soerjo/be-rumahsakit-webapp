# WEB APP "Puskesmas Balai Bersama"

Simple hospital web app systems. the main think of this app is to simplify the flow of the hospital where it fills seamlessly

## Deploy

| aplikasi sudah di up ke server local dengan bantuan ngrok. dokumentasi dan akses swagger dapat di akses malalui: https://6010-180-252-165-0.ngrok-free.app/api

## Tech

- nestjs
- jwt
- bcrypt
- docker
- postgresql
- swagger

## Endpoint

| /auth ✅

- sign ✅

| /admin ✅

- crud admin ✅
- registrasi pasien ✅
- get list passien ✅
- get tagihan passien

| /dokter ✅

- crud dokter ✅
- get list passien ✅
- input praktek dokter ✅
- input resep obat ✅
- update data passien ["diagnosa", "tinggi", "berat", "dll"] ✅

| /praktek ✅

- crud praktek ✅
- get list praktek ✅

| /apoteker ✅

- crud apoteker ✅
- get list req resep obat ✅
- approve resep obat ✅
- input obat_keluar

| /obat✅

- crud obat ✅
- get list obat ✅

| /obatkeluar ✅

- crud obatkeluar ✅
- get list obatkeluar ✅

## how to run

- pastikan tidak ada yang berjalan di port 3000(untuk server be)
- sudah terinstal docker di komputer

```
$ docker compose up -d
```

- app backend akan berjalan di port 3000, database postgre berjalan di atas docker dengan networking antar container.

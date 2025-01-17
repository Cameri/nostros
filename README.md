[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a3db59f4a45a43159cb129386b937a2a)](https://www.codacy.com/gh/KoalaSat/nostros/dashboard?utm_source=github.com&utm_medium=referral&utm_content=KoalaSat/nostros&utm_campaign=Badge_Grade)
[![Frontend Build](https://github.com/KoalaSat/nostros/actions/workflows/android-build.yml/badge.svg?branch=main)](https://github.com/KoalaSat/nostros/actions/workflows/android-build.yml)
[![release](https://img.shields.io/github/v/release/KoalaSat/nostros)](https://github.com/KoalaSat/nostros/releases)
[![Apache 2 license](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/KoalaSat/nostros/blob/main/LICENSE)

![nostros_logo](https://user-images.githubusercontent.com/111684255/197865267-1701b33b-2eb9-4704-86eb-a6ea8861fe1e.png)

Wellcome to the Nostros project, a NOSTR mobile client.

Chanel Id:

```
8d37308d97356600f67a28039d598a52b8c4fa1b73ef6f2e7b7d40197c3afa56
```

# Getting Started

What is Nostr: https://github.com/nostr-protocol/nostr

## Required Libraries and Frameworks

- Node 16.x
- JDK 17.0.x
- (Android) Android Studio SKD
- yarn

# Running

- Open a virtual device
- Install

```
yarn install
```

- Run Metro

```
yarn start
```

# Some Features to Work On

### Bugs

- [x] User info missing on first start
- [x] i18n not loading
- [x] Logging out and in again does not work
- [ ] Clipboard library not working
- [ ] Some user images are not loading
- [ ] Websocket connections closed when the app goes to background for too long

### Basics

- [ ] Infinite Load
- [x] Go to replied event
- [ ] Relays management (add, remove and recomend)
- [ ] Random Key Generator
- [ ] Watch only mode

### Home

- [ ] Public Room
- [ ] Other Rooms

### Profile

- [ ] Verify NIP-05 https://github.com/nostr-protocol/nips/blob/master/05.md
- [ ] Verify LNURL https://github.com/andrerfneves/lightning-address

### Contacts

- [ ] Followers list
- [ ] Direct Messages https://github.com/nostr-protocol/nips/blob/master/04.md

### Note

- [ ] Autoscroll to reply
- [ ] Mentions https://github.com/nostr-protocol/nips/blob/master/08.md
- [ ] Reactions https://github.com/nostr-protocol/nips/blob/master/25.md
- [ ] Deletion https://github.com/nostr-protocol/nips/blob/master/09.md
- [ ] Tag Users https://github.com/nostr-protocol/nips/blob/master/10.md
- [ ] Load entire thread

### Send

- [ ] Mentions https://github.com/nostr-protocol/nips/blob/master/08.md

### Config

- [ ] Private Key download

# Kudos

- Inspired on https://github.com/jb55/nostr-js and https://github.com/fiatjaf/nostr-tools
- Discovered thanks to https://lunaticoin.com

---

Made with 🐨 by https://getalby.com/p/koalasat

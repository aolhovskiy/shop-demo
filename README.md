![Travis CI Status](https://travis-ci.org/aolhovskiy/shop-demo.svg?branch=master)

[Demo](https://aolhovskiy.github.io/shop-demo/)

# Known Issues/Questions*

• Currency formatting - designs do not include decimal points, but it would confuse end users (wrong total calculations, product price mismatch, etc).

• Font - it's cumbersome to guess font from picture. `Source Sans Pro` is used, but it doesn't support stretching as shown on picture.

• Mobile - considered as not in scope (at least for now). Would require additional time.

• Browser support - tested in latest Chrome and FF, shouldn't work in IE < 10.

# Getting started

## Prerequisites
Node 8 or higher is installed. Might work with older/later versions, but tested only with node 8.

## Start

```
npm i
npm start
```

## Build

```
npm run build
```

## Test

```
npm test
```

# What's included

- [x] CI
- [ ] Docker
- [x] Unit Tests
- [ ] E2E Tests
- [x] [Demo App](https://aolhovskiy.github.io/shop-demo/)
- [ ] Legacy browser support
- [ ] Mobile layout
- [x] Localization
- [ ] Pixel perfect layout

Some of the items above have been considered as "not in scope". Implementing them would require additional time.

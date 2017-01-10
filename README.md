# monobrow-cmz-pack

A monobrow config pack with some common cmz dependencies and build config.

## Usage

To include in your project:

- `npm install -S monobrow-cmz-pack`
- add the pack to your monobrow config, eg:

```js
// monobrow/config.js

module.exports = {
  entry: 'src/index.js',
  packs: [
    require('monobrow-cmz-pack')
  ]
}
```

## Development

If you want to try making changes or forking this, remember to run `npm run build` to rebundle the vendor files.

## License

MIT

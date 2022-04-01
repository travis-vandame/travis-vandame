# Travis VanDame

Hi, thanks for having an interest in my Vue framework personal project. This project is intended for employer's clients or anyone interested in Vue.

The theme of this project is going to be organic and will surly change as time passes for right now it's focused on exploring Vue features and serving as a portfolio for myself and a place for others to explore a pure vue application.

You will notice that there are no UI frameworks as the intention is to focus on building applications with just Vue tools for the most part. So yep I'm re-inventing some component wheel's just for the sake of knowledge.

Ok so let's get on with setting things up. Oh and the following is just default vue stuff for now. It should work if not ping me and I'll help you out.

Travis

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Preview locally before deployment
```sh
npm run preview
```

### GitHub Pages Deployment

Set the correct base in vite.config.js
https://<USERNAME>.github.io/ 
    base: Omit base it's not needed
https://<USERNAME>.github.io/<REPO> 
    base: '/<REPO>/'

TODO: creating deploy sh instructions...

```sh
git subtree push --prefix dist origin gh-pages
```
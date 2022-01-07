# hello-vue3-vite

## 安装依赖

```bash
yarn install
```

## 开发环境运行

```bash
yarn dev
```

## 生产环境运行

```bash
yarn build
```

## 更新依赖版本

```bash
# 可查看到最新版本间的变更大小（绿橙红），以及手动选择是否更新该依赖
yarn upgrade-interactive --latest
```

## vue3指南

ref, reactive, computed, watch, watchEffect使用：

- [高阶指南-响应性](https://v3.cn.vuejs.org/guide/reactivity.html#%E4%BB%80%E4%B9%88%E6%98%AF%E5%93%8D%E5%BA%94%E6%80%A7)
- [响应性API](https://v3.cn.vuejs.org/api/reactivity-api.html)

组合式API使用场所setup()

- [组合式API](https://v3.cn.vuejs.org/api/composition-api.html)

`<script setup>`用法：(components, props, emit在此模式下使用方式)

- [单文件组件<script setup>](https://v3.cn.vuejs.org/api/sfc-script-setup.html)

## TypeScript入门指南

- [TypeScript用法入门](./docs/typescript.md)

## 开发助力不可少的工具

VSCode插件：

- `AutoImport`（当你打ref时，若未引入帮你引入，不用自己写）
- `Volar` (使用时 disabled Vetur, 用vue2项目时再开回去吧，目前是会影响)

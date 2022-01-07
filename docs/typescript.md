# TypeScript用法入门

## 入门

基本类型：boolean, number, string, null, undefined, enum

type 定义字符串的可选值限制

```typescript
type chartTypes = 'BAR' | 'LINE' | 'BAR_LINE_GROUP' | 'ELEVATION'
let chartBar1:chartTypes = 'BAR'
```

interface 定义对象的类型限制

```typescript
interface course {
  name:string,
  price:number,
  teacherName:string,
  teacherImg?:string|boolean,
  readonly address:string
}
```

函数的类型限制

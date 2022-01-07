<template>
<div>
  <AutoCount />
</div>
</template>

<script setup lang="ts">
import AutoCount from '../../components/AutoCount.vue'

let courseName:string = '玩转Vue3'
let price:number = 129
// price = '89'
let isOnline:boolean = true
let courseSales:undefined
let timer:null = null
let me:[string, number] = ['Grace', 18]
// me[0] = 1

let anyThing
let anyCourse:any = 1
anyCourse = 'xx'

let course1:string|number = '玩转Vue3'
course1 = 1
// course1 = true

type chartTypes = 'BAR' | 'LINE' | 'BAR_LINE_GROUP' | 'ELEVATION'
let chartBar1:chartTypes = 'BAR'
// let chartBar2:chartTypes = 'PIE'

interface course {
  name:string,
  price:number,
  teacherName:string,
  teacherImg?:string|boolean,
  readonly address:string
}

</script>
<script setup>
import OutputChat1 from "./chat/OutputChat1.vue";
import ELDefectChat01 from "./chat/ELDefectChat01.vue";
import DefectChart01 from "./chat/DefectChart01.vue";

const productivityStr = [
    'input: 2线早班贴条码：550W',
    'SCE2230001977P2F0',
    'SCE2230002420P2F0',
    '共444件',
    'finished goods: 419',
    'input: 2线晚班贴条码：550W',
    'SCF2230002421P2F0',
    'SCF2230002930P2F0',
    '共510件',
    'finished goods: 438',
    'input: 2线晚班贴条码：550W',
    'SCF2230002931P2F0',
    'SCF2230002935P2F0',
    '共5件',
    'finished goods: 267',
]
const elDefectStr = [
    '前道EL产量459，不良83，不良率: 18.08%',
    '前道EL产量66，不良13，不良率: 19.69%',
    '前道EL产量530，不良97，不良率: 18.30%'
]
</script>


<template>
    <a-row>
        <a-col :span="24">
            <div style='font-size:50px'>06/07/2023 Wednesday Productivity</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="16">
            <OutputChat1/>
        </a-col>
        <a-col :span="8">
            <div v-for="pStr in productivityStr"
                 style="margin-bottom: 0;font-size: 16px">{{ pStr }}</div>
        </a-col>
    </a-row>
    <a-row>
        <a-col :span="24">
            <div style='font-size:50px'>Individual Station Defect Rate</div>
            <div style='font-size:50px'>1st Defect Rate</div>
        </a-col>
    </a-row>
    <a-row a-row type="flex">
        <a-col :span="24">
            <DefectChart01/>
        </a-col>

    </a-row>
    <a-row>
        <a-col :span="24">
            <div style='font-size:50px'>EL1 Defect</div>
        </a-col>
    </a-row>
    <a-row a-row type="flex" justify="space-around">
        <a-col :span="16">
            <ELDefectChat01/>
        </a-col>
        <a-col :span="8">
            <div v-for="elStr in elDefectStr" style="margin-bottom: 0;font-size: 16px">{{ elStr }}</div>
        </a-col>
    </a-row>


</template>


<style scoped>

</style>
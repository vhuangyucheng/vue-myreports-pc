<script setup>
import CellDefectChat1 from "./chat/CellDefectChat1.vue";
import CellDefectChat2 from "./chat/CellDefectChat2.vue";
import CellDefectChat3 from "./chat/CellDefectChat3.vue";
import FirstELChat from "./chat/FirstELChat.vue";
import TargetFulfillment from "./chat/TargetFulfillment.vue";
import InputAndFinishedGoods from "./chat/InputAndFinishedGoods.vue";
</script>
<template>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="2">
      <a-image
          :width="1100"
          src="src/assets/Image_20230531231724.png"
      />
    </a-col>
    <a-col :span="8" :style="{ fontSize: '30px'}" push="1">
      <div> 2线晚班贴条码：550W
        <br/>
        SCE22300001038P2F0
        <br/>
        SCE2230001310P2F0
        <br/>
        Input: 273件
        <br/>
        finished goods: xxx
      </div>

    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="2">
      <a-image
          :width="1100"
          src="src/assets/Image_20230531231724.png"
      />
    </a-col>
    <a-col :span="8" :style="{ fontSize: '30px'}" push="1">
      2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      Input: 共273件
      <br/>
      finished goods: xxx
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="2">
      <a-image
          :width="1100"
          src="src/assets/Image_20230531231724.png"
      />
    </a-col>
    <a-col :span="8" :style="{ fontSize: '30px'}" push="1">
      2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      Input: 共273件
      <br/>
      finished goods: xxx
    </a-col>
  </a-row>
  <a-row type="flex" justify="space-around" align="middle">
    <a-col :span="10" :offset="2">
      <a-image
          :width="1100"
          src="src/assets/Image_20230531231724.png"
      />
    </a-col>
    <a-col :span="8" :style="{ fontSize: '30px'}" push="1">
      wip: 2线晚班贴条码：550W
      <br/>
      SCE22300001038P2F0
      <br/>
      SCE2230001310P2F0
      <br/>
      共273件
      <br/>
      finished goods: xxx
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6" :offset="3">
      <a-image
          src="src/assets/Image_20230601003059.png"
      />
      <div>前道EL产量487，不良110，不良率: 22.58%</div>
    </a-col>
    <a-col :span="6" :offset="1">
      <a-image
          src="src/assets/Image_20230601003059.png"
      />
      <div>前道EL产量487，不良110，不良率: 22.58%</div>
    </a-col>
    <a-col :span="6" :offset="1">
      <a-image
          src="src/assets/Image_20230601003059.png"
      />
      <div>前道EL产量487，不良110，不良率: 22.58%</div>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="6" :offset="3">
      <a-image
          src="src/assets/Image_20230601004044.png"
      />
      <div>后道不良分布</div>
    </a-col>
    <a-col :span="6" :offset="1">
      <a-image
          src="src/assets/Image_20230601004044.png"
      />
      <div>后道不良分布</div>
    </a-col>
    <a-col :span="6" :offset="1">
      <a-image
          src="src/assets/Image_20230601004044.png"
      />
      <div>后道不良分布</div>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="7" :offset="3">
      <cell-defect-chat1></cell-defect-chat1>
      <div>电池片来料合格</div>
    </a-col>
    <a-col :span="7">
      <CellDefectChat2/>
      <div>电池片制程合格</div>
    </a-col>
    <a-col :span="7">
      <cell-defect-chat3></cell-defect-chat3>

      <div>电池串来料合格</div>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="7" :offset="3">
      <FirstELChat/>
      <div>前道不良率对比</div>
    </a-col>
    <a-col :span="7">
      <TargetFulfillment/>
      <div>目标达成率</div>
    </a-col>
    <a-col :span="7">
      <InputAndFinishedGoods/>

      <div>input and finished goods</div>
    </a-col>
  </a-row>


</template>


<style scoped>

</style>
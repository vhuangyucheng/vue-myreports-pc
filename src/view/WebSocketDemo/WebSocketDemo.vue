<template>
 <div> hi</div>
</template>

<script setup>
// 1.建立链接 -- 携带cookie参数
var ws = new WebSocket(
    `ws://10.10.131.94:8080/webSocketDemo1`
);

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

// 4.卸载前, 关闭链接
onUnmounted(() => {
  ws.close();
});
</script>

<style scoped>

</style>
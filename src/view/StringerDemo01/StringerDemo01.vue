<template>
 <div> hi</div>
</template>

<script>
import axios from "axios";
var data1 = axios({
  url: "/apiStringer/stringer/getString21",
  method: "POST",
  data: {

  },
  contentType: "json",
  processData: false,
  dataType: "json",
}).then(function (response) {
  console.log(response.data)
});
</script>

<style scoped>

</style>
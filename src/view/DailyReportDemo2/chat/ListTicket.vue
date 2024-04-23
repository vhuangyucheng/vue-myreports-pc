<script setup>
import axios from "axios";
const dataList = ref([]);
const getDataList = (ticketStatus, ticketDuration) => {
  axios(
      {
        url: "/apiStringer/ticket/listTicket",
        method: "POST",
        data: {
          "ticketStatus": ticketStatus,
          "ticketDuration": ticketDuration,
        },
        contentType: "json",
        processData: false,
        dataType: "json"
      }
  ).then(function (response) {
    dataList.value = []
    response.data.data.forEach(item =>{
      item.priority = returnMapper("priority", item.ticketPriority)
      item.date = returnMapper("time", item.createTime) + " " +  returnMapper("line", item.ticketLine) + " " + returnMapper("shift", item.ticketShiftId%10)
      item.status = returnMapper("status", item.ticketStatus)
      item.duration = returnMapper("duration", item.ticketDuration)
      item.direction = returnMapper("issuer", item.ticketIssuer) + " to " + returnMapper("responder", item.ticketResponder)
      item.message =  item.ticketMessage
      item.reply =  item.ticketReply
      dataList.value.push(item)
    })
  });
}

const returnMapper = (name, value) => {
  switch (name) {
    case "time":
      return new Date(value).toLocaleString()
    case "priority":
      switch (value) {
        case 1:
          return "Crit";
        case 2:
          return " Major ";
        case 3:
          return " Minor ";
      }
    case "line":
      switch (value) {
        case 1:
          return "line#1";
        case 2:
          return "line#2";
      }
    case "status":
      switch (value) {
        case 1:
          return "Open";
        case 2:
          return "Close";
      }
    case "issuer":
      switch (value) {
        case 1:
          return "Prod";
        case 2:
          return "QC";
        case 3:
          return "Equip";
      }
    case "responder":
      switch (value) {
        case 1:
          return "Prod";
        case 2:
          return "QC";
        case 3:
          return "Equip";
      }
    case "duration":
      switch (value) {
        case 1:
          return "thatDay";
        case 2:
          return "permanent";
      }
    case "shift":
      switch (value) {
        case 1:
          return "Day";
        case 2:
          return "Night";
      }
  }
}

const data = [
  {
    priority: "mo001",
    status: "2/5/100",
    date:"550w",
    duration:"关闭",
    direction:"common",
    message:"common",
    reply:"common",
  },
]
self.setInterval(() => {getDataList(1,0)},  30*1000)

const columns = [
  {
    title: '优先度Priority',
    dataIndex: 'priority',
    width: '8%',
  },
  {
    title: '状态Status',
    dataIndex: 'status',
    width: '8%',
  },
  {
    title: '时间Date',
    dataIndex: 'date',
    width: '10%',
  },
  {
    title: '持续时长Duration',
    dataIndex: 'duration',
    width: '9%',
  },
  {
    title: '方向Direction',
    dataIndex: 'direction',
    width: '10%',
  },
  {
    title: '信息Message',
    dataIndex: 'message',
    width: '30%',
  },
  {
    title: '回复Reply',
    dataIndex: 'reply',
    width: '30%',
  },
];

</script>

<template>
  <a-table
      :columns="columns"
      :data-source="dataList"
      :pagination="false"
      :scroll="{ y: 1000 }"
  />
</template>



<style scoped>

</style>
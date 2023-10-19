<script setup>
let variables ={
  a1lp : ref(0), a2lp : ref(0), a3lp : ref(0), a4lp : ref(0), a5lp : ref(0), a6lp : ref(0), a7lp : ref(0), a8lp : ref(0), a9lp : ref(0), a10lp : ref(0), a11lp : ref(0), a12lp : ref(0),
  b1lp : ref(0), b2lp : ref(0), b3lp : ref(0), b4lp : ref(0), b5lp : ref(0), b6lp : ref(0), b7lp : ref(0), b8lp : ref(0), b9lp : ref(0), b10lp : ref(0), b11lp : ref(0), b12lp : ref(0),
  c1lp : ref(0), c2lp : ref(0), c3lp : ref(0), c4lp : ref(0), c5lp : ref(0), c6lp : ref(0), c7lp : ref(0), c8lp : ref(0), c9lp : ref(0), c10lp : ref(0), c11lp : ref(0), c12lp : ref(0),
  d1lp : ref(0), d2lp : ref(0), d3lp : ref(0), d4lp : ref(0), d5lp : ref(0), d6lp : ref(0), d7lp : ref(0), d8lp : ref(0), d9lp : ref(0), d10lp : ref(0), d11lp : ref(0), d12lp : ref(0),
  e1lp : ref(0), e2lp : ref(0), e3lp : ref(0), e4lp : ref(0), e5lp : ref(0), e6lp : ref(0), e7lp : ref(0), e8lp : ref(0), e9lp : ref(0), e10lp : ref(0), e11lp : ref(0), e12lp : ref(0),
  f1lp : ref(0), f2lp : ref(0), f3lp : ref(0), f4lp : ref(0), f5lp : ref(0), f6lp : ref(0), f7lp : ref(0), f8lp : ref(0), f9lp : ref(0), f10lp : ref(0), f11lp : ref(0), f12lp : ref(0),
  a1yl : ref(0), a2yl : ref(0), a3yl : ref(0), a4yl : ref(0), a5yl : ref(0), a6yl : ref(0), a7yl : ref(0), a8yl : ref(0), a9yl : ref(0), a10yl : ref(0), a11yl : ref(0), a12yl : ref(0),
  b1yl : ref(0), b2yl : ref(0), b3yl : ref(0), b4yl : ref(0), b5yl : ref(0), b6yl : ref(0), b7yl : ref(0), b8yl : ref(0), b9yl : ref(0), b10yl : ref(0), b11yl : ref(0), b12yl : ref(0),
  c1yl : ref(0), c2yl : ref(0), c3yl : ref(0), c4yl : ref(0), c5yl : ref(0), c6yl : ref(0), c7yl : ref(0), c8yl : ref(0), c9yl : ref(0), c10yl : ref(0), c11yl : ref(0), c12yl : ref(0),
  d1yl : ref(0), d2yl : ref(0), d3yl : ref(0), d4yl : ref(0), d5yl : ref(0), d6yl : ref(0), d7yl : ref(0), d8yl : ref(0), d9yl : ref(0), d10yl : ref(0), d11yl : ref(0), d12yl : ref(0),
  e1yl : ref(0), e2yl : ref(0), e3yl : ref(0), e4yl : ref(0), e5yl : ref(0), e6yl : ref(0), e7yl : ref(0), e8yl : ref(0), e9yl : ref(0), e10yl : ref(0), e11yl : ref(0), e12yl : ref(0),
  f1yl : ref(0), f2yl : ref(0), f3yl : ref(0), f4yl : ref(0), f5yl : ref(0), f6yl : ref(0), f7yl : ref(0), f8yl : ref(0), f9yl : ref(0), f10yl : ref(0), f11yl : ref(0), f12yl : ref(0),
  a1qj : ref(0), a2qj : ref(0), a3qj : ref(0), a4qj : ref(0), a5qj : ref(0), a6qj : ref(0), a7qj : ref(0), a8qj : ref(0), a9qj : ref(0), a10qj : ref(0), a11qj : ref(0), a12qj : ref(0),
  b1qj : ref(0), b2qj : ref(0), b3qj : ref(0), b4qj : ref(0), b5qj : ref(0), b6qj : ref(0), b7qj : ref(0), b8qj : ref(0), b9qj : ref(0), b10qj : ref(0), b11qj : ref(0), b12qj : ref(0),
  c1qj : ref(0), c2qj : ref(0), c3qj : ref(0), c4qj : ref(0), c5qj : ref(0), c6qj : ref(0), c7qj : ref(0), c8qj : ref(0), c9qj : ref(0), c10qj : ref(0), c11qj : ref(0), c12qj : ref(0),
  d1qj : ref(0), d2qj : ref(0), d3qj : ref(0), d4qj : ref(0), d5qj : ref(0), d6qj : ref(0), d7qj : ref(0), d8qj : ref(0), d9qj : ref(0), d10qj : ref(0), d11qj : ref(0), d12qj : ref(0),
  e1qj : ref(0), e2qj : ref(0), e3qj : ref(0), e4qj : ref(0), e5qj : ref(0), e6qj : ref(0), e7qj : ref(0), e8qj : ref(0), e9qj : ref(0), e10qj : ref(0), e11qj : ref(0), e12qj : ref(0),
  f1qj : ref(0), f2qj : ref(0), f3qj : ref(0), f4qj : ref(0), f5qj : ref(0), f6qj : ref(0), f7qj : ref(0), f8qj : ref(0), f9qj : ref(0), f10qj : ref(0), f11qj : ref(0), f12qj : ref(0),
}

let sum1=ref(0);
let sum2=ref(0);
let sum3=ref(0);
let sum4=ref(0);
let sum5=ref(0);
let sum6=ref(0);
let sum7=ref(0);
let sum8=ref(0);
let sum9=ref(0);
let sum10=ref(0);
let sum11=ref(0);
let sum12=ref(0);
let sum=ref(0);
let pen1=ref(0.0);
let pen2=ref(0.0);
let pen3=ref(0.0);
let pen4=ref(0.0);
let pen5=ref(0.0);
let pen6=ref(0.0);
let pen7=ref(0.0);
let pen8=ref(0.0);
let pen9=ref(0.0);
let pen10=ref(0.0);
let pen11=ref(0.0);
let pen12=ref(0.0);

const updateData = ()=>{
  sum1.value = variables.a1lp.value + variables.b1lp.value + variables.c1lp.value + variables.d1lp.value + variables.e1lp.value + variables.f1lp.value + variables.a1yl.value + variables.b1yl.value + variables.c1yl.value + variables.d1yl.value + variables.e1yl.value + variables.f1yl.value + variables.a1qj.value + variables.b1qj.value + variables.c1qj.value + variables.d1qj.value + variables.e1qj.value + variables.f1qj.value
  sum2.value = variables.a2lp.value + variables.b2lp.value + variables.c2lp.value + variables.d2lp.value + variables.e2lp.value + variables.f2lp.value + variables.a2yl.value + variables.b2yl.value + variables.c2yl.value + variables.d2yl.value + variables.e2yl.value + variables.f2yl.value + variables.a2qj.value + variables.b2qj.value + variables.c2qj.value + variables.d2qj.value + variables.e2qj.value + variables.f2qj.value
  sum3.value = variables.a3lp.value + variables.b3lp.value + variables.c3lp.value + variables.d3lp.value + variables.e3lp.value + variables.f3lp.value + variables.a3yl.value + variables.b3yl.value + variables.c3yl.value + variables.d3yl.value + variables.e3yl.value + variables.f3yl.value + variables.a3qj.value + variables.b3qj.value + variables.c3qj.value + variables.d3qj.value + variables.e3qj.value + variables.f3qj.value
  sum4.value = variables.a4lp.value + variables.b4lp.value + variables.c4lp.value + variables.d4lp.value + variables.e4lp.value + variables.f4lp.value + variables.a4yl.value + variables.b4yl.value + variables.c4yl.value + variables.d4yl.value + variables.e4yl.value + variables.f4yl.value + variables.a4qj.value + variables.b4qj.value + variables.c4qj.value + variables.d4qj.value + variables.e4qj.value + variables.f4qj.value
  sum5.value = variables.a5lp.value + variables.b5lp.value + variables.c5lp.value + variables.d5lp.value + variables.e5lp.value + variables.f5lp.value + variables.a5yl.value + variables.b5yl.value + variables.c5yl.value + variables.d5yl.value + variables.e5yl.value + variables.f5yl.value + variables.a5qj.value + variables.b5qj.value + variables.c5qj.value + variables.d5qj.value + variables.e5qj.value + variables.f5qj.value
  sum6.value = variables.a6lp.value + variables.b6lp.value + variables.c6lp.value + variables.d6lp.value + variables.e6lp.value + variables.f6lp.value + variables.a6yl.value + variables.b6yl.value + variables.c6yl.value + variables.d6yl.value + variables.e6yl.value + variables.f6yl.value + variables.a6qj.value + variables.b6qj.value + variables.c6qj.value + variables.d6qj.value + variables.e6qj.value + variables.f6qj.value
  sum7.value = variables.a7lp.value + variables.b7lp.value + variables.c7lp.value + variables.d7lp.value + variables.e7lp.value + variables.f7lp.value + variables.a7yl.value + variables.b7yl.value + variables.c7yl.value + variables.d7yl.value + variables.e7yl.value + variables.f7yl.value + variables.a7qj.value + variables.b7qj.value + variables.c7qj.value + variables.d7qj.value + variables.e7qj.value + variables.f7qj.value
  sum8.value = variables.a8lp.value + variables.b8lp.value + variables.c8lp.value + variables.d8lp.value + variables.e8lp.value + variables.f8lp.value + variables.a7yl.value + variables.b8yl.value + variables.c8yl.value + variables.d8yl.value + variables.e8yl.value + variables.f8yl.value + variables.a8qj.value + variables.b8qj.value + variables.c8qj.value + variables.d8qj.value + variables.e8qj.value + variables.f8qj.value
  sum9.value = variables.a9lp.value + variables.b9lp.value + variables.c9lp.value + variables.d9lp.value + variables.e9lp.value + variables.f9lp.value + variables.a8yl.value + variables.b9yl.value + variables.c9yl.value + variables.d9yl.value + variables.e9yl.value + variables.f9yl.value + variables.a9qj.value + variables.b9qj.value + variables.c9qj.value + variables.d9qj.value + variables.e9qj.value + variables.f9qj.value
  sum10.value = variables.a10lp.value + variables.b10lp.value + variables.c10lp.value + variables.d10lp.value + variables.e10lp.value + variables.f10lp.value + variables.a10yl.value + variables.b10yl.value + variables.c10yl.value + variables.d10yl.value + variables.e10yl.value + variables.f10yl.value + variables.a10qj.value + variables.b10qj.value + variables.c10qj.value + variables.d10qj.value + variables.e10qj.value + variables.f10qj.value
  sum11.value = variables.a11lp.value + variables.b11lp.value + variables.c11lp.value + variables.d11lp.value + variables.e11lp.value + variables.f11lp.value + variables.a11yl.value + variables.b11yl.value + variables.c11yl.value + variables.d11yl.value + variables.e11yl.value + variables.f11yl.value + variables.a11qj.value + variables.b11qj.value + variables.c11qj.value + variables.d11qj.value + variables.e11qj.value + variables.f11qj.value
  sum12.value = variables.a12lp.value + variables.b12lp.value + variables.c12lp.value + variables.d12lp.value + variables.e12lp.value + variables.f12lp.value + variables.a12yl.value + variables.b12yl.value + variables.c12yl.value + variables.d12yl.value + variables.e12yl.value + variables.f12yl.value + variables.a12qj.value + variables.b12qj.value + variables.c12qj.value + variables.d12qj.value + variables.e12qj.value + variables.f12qj.value

  sum.value = sum1.value + sum2.value + sum3.value + sum4.value + sum5.value + sum6.value + sum7.value + sum8.value + sum9.value + sum10.value + sum11.value + sum12.value
  pen1.value = ((sum1.value / sum.value) * 100).toFixed(2)
  pen2.value = ((sum2.value / sum.value) * 100).toFixed(2)
  pen3.value = ((sum3.value / sum.value) * 100).toFixed(2)
  pen4.value = ((sum4.value / sum.value) * 100).toFixed(2)
  pen5.value = ((sum5.value / sum.value) * 100).toFixed(2)
  pen6.value = ((sum6.value / sum.value) * 100).toFixed(2)
  pen7.value = ((sum7.value / sum.value) * 100).toFixed(2)
  pen8.value = ((sum8.value / sum.value) * 100).toFixed(2)
  pen9.value = ((sum9.value / sum.value) * 100).toFixed(2)
  pen10.value = ((sum10.value / sum.value) * 100).toFixed(2)
  pen11.value = ((sum11.value / sum.value) * 100).toFixed(2)
  pen12.value = ((sum12.value / sum.value) * 100).toFixed(2)
}
const plusOne = (variableName)=>{
  variables[variableName].value = variables[variableName].value +1
  updateData()

}

const minusOne = (variableName)=>{
  variables[variableName].value = variables[variableName].value -1
  updateData()
}


</script>

<template >
<div id="back">
  <table class="tg">
    <thead>
    <tr>
      <th class="tg-6o9b">位置</th>
      <th class="tg-6o9b">1</th>
      <th class="tg-6o9b">2</th>
      <th class="tg-6o9b">3</th>
      <th class="tg-6o9b">4</th>
      <th class="tg-6o9b">5</th>
      <th class="tg-6o9b">6</th>
      <th class="tg-6o9b">7</th>
      <th class="tg-6o9b">8</th>
      <th class="tg-6o9b">9</th>
      <th class="tg-6o9b">10</th>
      <th class="tg-6o9b">11</th>
      <th class="tg-6o9b">12</th>
      <th class="tg-cly1"></th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td class="tg-6o9b">A</td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a1lp')"  >裂片:{{ variables['a1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a1yl')"  >隐裂:{{ variables['a1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a1qj')"  >缺角:{{ variables['a1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a2lp')"  >裂片:{{ variables['a2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a2yl')"  >隐裂:{{ variables['a2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a2qj')"  >缺角:{{ variables['a2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a3lp')"  >裂片:{{ variables['a3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a3yl')"  >隐裂:{{ variables['a3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a3qj')"  >缺角:{{ variables['a3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a4lp')"  >裂片:{{ variables['a4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a4yl')"  >隐裂:{{ variables['a4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a4qj')"  >缺角:{{ variables['a4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a5lp')"  >裂片:{{ variables['a5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a5yl')"  >隐裂:{{ variables['a5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a5qj')"  >缺角:{{ variables['a5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a6lp')"  >裂片:{{ variables['a6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a6yl')"  >隐裂:{{ variables['a6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a6qj')"  >缺角:{{ variables['a6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a7lp')"  >裂片:{{ variables['a7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a7yl')"  >隐裂:{{ variables['a7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a7qj')"  >缺角:{{ variables['a7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a8lp')"  >裂片:{{ variables['a8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a8yl')"  >隐裂:{{ variables['a8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a8qj')"  >缺角:{{ variables['a8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a9lp')"  >裂片:{{ variables['a9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a9yl')"  >隐裂:{{ variables['a9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a9qj')"  >缺角:{{ variables['a9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a10lp')"  >裂片:{{ variables['a10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a10yl')"  >隐裂:{{ variables['a10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a10qj')"  >缺角:{{ variables['a10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a11lp')"  >裂片:{{ variables['a11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a11yl')"  >隐裂:{{ variables['a11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a11qj')"  >缺角:{{ variables['a11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('a12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a12lp')"  >裂片:{{ variables['a12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a12yl')"  >隐裂:{{ variables['a12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('a12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('a12qj')"  >缺角:{{ variables['a12qj'] }}</a-button>
      </td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">B</td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b1lp')"  >裂片:{{ variables['b1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b1yl')"  >隐裂:{{ variables['b1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b1qj')"  >缺角:{{ variables['b1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b2lp')"  >裂片:{{ variables['b2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b2yl')"  >隐裂:{{ variables['b2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b2qj')"  >缺角:{{ variables['b2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b3lp')"  >裂片:{{ variables['b3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b3yl')"  >隐裂:{{ variables['b3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b3qj')"  >缺角:{{ variables['b3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b4lp')"  >裂片:{{ variables['b4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b4yl')"  >隐裂:{{ variables['b4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b4qj')"  >缺角:{{ variables['b4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b5lp')"  >裂片:{{ variables['b5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b5yl')"  >隐裂:{{ variables['b5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b5qj')"  >缺角:{{ variables['b5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b6lp')"  >裂片:{{ variables['b6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b6yl')"  >隐裂:{{ variables['b6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b6qj')"  >缺角:{{ variables['b6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b7lp')"  >裂片:{{ variables['b7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b7yl')"  >隐裂:{{ variables['b7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b7qj')"  >缺角:{{ variables['b7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b8lp')"  >裂片:{{ variables['b8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b8yl')"  >隐裂:{{ variables['b8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b8qj')"  >缺角:{{ variables['b8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b9lp')"  >裂片:{{ variables['b9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b9yl')"  >隐裂:{{ variables['b9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b9qj')"  >缺角:{{ variables['b9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b10lp')"  >裂片:{{ variables['b10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b10yl')"  >隐裂:{{ variables['b10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b10qj')"  >缺角:{{ variables['b10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b11lp')"  >裂片:{{ variables['b11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b11yl')"  >隐裂:{{ variables['b11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b11qj')"  >缺角:{{ variables['b11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
            <a-button class="custom-button" @click="minusOne('b12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b12lp')"  >裂片:{{ variables['b12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b12yl')"  >隐裂:{{ variables['b12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('b12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('b12qj')"  >缺角:{{ variables['b12qj'] }}</a-button>
      </td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">C</td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c1lp')"  >裂片:{{ variables['c1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c1yl')"  >隐裂:{{ variables['c1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c1qj')"  >缺角:{{ variables['c1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c2lp')"  >裂片:{{ variables['c2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c2yl')"  >隐裂:{{ variables['c2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c2qj')"  >缺角:{{ variables['c2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c3lp')"  >裂片:{{ variables['c3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c3yl')"  >隐裂:{{ variables['c3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c3qj')"  >缺角:{{ variables['c3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c4lp')"  >裂片:{{ variables['c4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c4yl')"  >隐裂:{{ variables['c4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c4qj')"  >缺角:{{ variables['c4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c5lp')"  >裂片:{{ variables['c5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c5yl')"  >隐裂:{{ variables['c5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c5qj')"  >缺角:{{ variables['c5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c6lp')"  >裂片:{{ variables['c6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c6yl')"  >隐裂:{{ variables['c6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c6qj')"  >缺角:{{ variables['c6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c7lp')"  >裂片:{{ variables['c7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c7yl')"  >隐裂:{{ variables['c7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c7qj')"  >缺角:{{ variables['c7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c8lp')"  >裂片:{{ variables['c8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c8yl')"  >隐裂:{{ variables['c8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c8qj')"  >缺角:{{ variables['c8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c9lp')"  >裂片:{{ variables['c9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c9yl')"  >隐裂:{{ variables['c9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c9qj')"  >缺角:{{ variables['c9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c10lp')"  >裂片:{{ variables['c10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c10yl')"  >隐裂:{{ variables['c10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c10qj')"  >缺角:{{ variables['c10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c11lp')"  >裂片:{{ variables['c11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c11yl')"  >隐裂:{{ variables['c11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c11qj')"  >缺角:{{ variables['c11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('c12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c12lp')"  >裂片:{{ variables['c12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c12yl')"  >隐裂:{{ variables['c12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('c12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('c12qj')"  >缺角:{{ variables['c12qj'] }}</a-button>
      </td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">D</td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d1lp')"  >裂片:{{ variables['d1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d1yl')"  >隐裂:{{ variables['d1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d1qj')"  >缺角:{{ variables['d1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d2lp')"  >裂片:{{ variables['d2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d2yl')"  >隐裂:{{ variables['d2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d2qj')"  >缺角:{{ variables['d2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d3lp')"  >裂片:{{ variables['d3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d3yl')"  >隐裂:{{ variables['d3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d3qj')"  >缺角:{{ variables['d3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d4lp')"  >裂片:{{ variables['d4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d4yl')"  >隐裂:{{ variables['d4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d4qj')"  >缺角:{{ variables['d4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d5lp')"  >裂片:{{ variables['d5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d5yl')"  >隐裂:{{ variables['d5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d5qj')"  >缺角:{{ variables['d5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d6lp')"  >裂片:{{ variables['d6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d6yl')"  >隐裂:{{ variables['d6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d6qj')"  >缺角:{{ variables['d6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d7lp')"  >裂片:{{ variables['d7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d7yl')"  >隐裂:{{ variables['d7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d7qj')"  >缺角:{{ variables['d7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d8lp')"  >裂片:{{ variables['d8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d8yl')"  >隐裂:{{ variables['d8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d8qj')"  >缺角:{{ variables['d8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d9lp')"  >裂片:{{ variables['d9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d9yl')"  >隐裂:{{ variables['d9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d9qj')"  >缺角:{{ variables['d9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d10lp')"  >裂片:{{ variables['d10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d10yl')"  >隐裂:{{ variables['d10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d10qj')"  >缺角:{{ variables['d10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d11lp')"  >裂片:{{ variables['d11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d11yl')"  >隐裂:{{ variables['d11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d11qj')"  >缺角:{{ variables['d11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('d12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d12lp')"  >裂片:{{ variables['d12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d12yl')"  >隐裂:{{ variables['d12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('d12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('d12qj')"  >缺角:{{ variables['d12qj'] }}</a-button>
      </td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">E</td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e1lp')"  >裂片:{{ variables['e1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e1yl')"  >隐裂:{{ variables['e1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e1qj')"  >缺角:{{ variables['e1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e2lp')"  >裂片:{{ variables['e2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e2yl')"  >隐裂:{{ variables['e2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e2qj')"  >缺角:{{ variables['e2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e3lp')"  >裂片:{{ variables['e3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e3yl')"  >隐裂:{{ variables['e3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e3qj')"  >缺角:{{ variables['e3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e4lp')"  >裂片:{{ variables['e4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e4yl')"  >隐裂:{{ variables['e4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e4qj')"  >缺角:{{ variables['e4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e5lp')"  >裂片:{{ variables['e5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e5yl')"  >隐裂:{{ variables['e5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e5qj')"  >缺角:{{ variables['e5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e6lp')"  >裂片:{{ variables['e6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e6yl')"  >隐裂:{{ variables['e6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e6qj')"  >缺角:{{ variables['e6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e7lp')"  >裂片:{{ variables['e7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e7yl')"  >隐裂:{{ variables['e7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e7qj')"  >缺角:{{ variables['e7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e8lp')"  >裂片:{{ variables['e8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e8yl')"  >隐裂:{{ variables['e8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e8qj')"  >缺角:{{ variables['e8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e9lp')"  >裂片:{{ variables['e9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e9yl')"  >隐裂:{{ variables['e9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e9qj')"  >缺角:{{ variables['e9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e10lp')"  >裂片:{{ variables['e10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e10yl')"  >隐裂:{{ variables['e10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e10qj')"  >缺角:{{ variables['e10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e11lp')"  >裂片:{{ variables['e11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e11yl')"  >隐裂:{{ variables['e11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e11qj')"  >缺角:{{ variables['e11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('e12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e12lp')"  >裂片:{{ variables['e12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e12yl')"  >隐裂:{{ variables['e12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('e12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('e12qj')"  >缺角:{{ variables['e12qj'] }}</a-button>
      </td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">F</td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f1lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f1lp')"  >裂片:{{ variables['f1lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f1yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f1yl')"  >隐裂:{{ variables['f1yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f1qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f1qj')"  >缺角:{{ variables['f1qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f2lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f2lp')"  >裂片:{{ variables['f2lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f2yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f2yl')"  >隐裂:{{ variables['f2yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f2qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f2qj')"  >缺角:{{ variables['f2qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f3lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f3lp')"  >裂片:{{ variables['f3lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f3yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f3yl')"  >隐裂:{{ variables['f3yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f3qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f3qj')"  >缺角:{{ variables['f3qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f4lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f4lp')"  >裂片:{{ variables['f4lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f4yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f4yl')"  >隐裂:{{ variables['f4yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f4qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f4qj')"  >缺角:{{ variables['f4qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f5lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f5lp')"  >裂片:{{ variables['f5lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f5yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f5yl')"  >隐裂:{{ variables['f5yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f5qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f5qj')"  >缺角:{{ variables['f5qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f6lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f6lp')"  >裂片:{{ variables['f6lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f6yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f6yl')"  >隐裂:{{ variables['f6yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f6qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f6qj')"  >缺角:{{ variables['f6qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f7lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f7lp')"  >裂片:{{ variables['f7lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f7yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f7yl')"  >隐裂:{{ variables['f7yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f7qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f7qj')"  >缺角:{{ variables['f7qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f8lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f8lp')"  >裂片:{{ variables['f8lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f8yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f8yl')"  >隐裂:{{ variables['f8yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f8qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f8qj')"  >缺角:{{ variables['f8qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f9lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f9lp')"  >裂片:{{ variables['f9lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f9yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f9yl')"  >隐裂:{{ variables['f9yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f9qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f9qj')"  >缺角:{{ variables['f9qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f10lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f10lp')"  >裂片:{{ variables['f10lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f10yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f10yl')"  >隐裂:{{ variables['f10yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f10qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f10qj')"  >缺角:{{ variables['f10qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f11lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f11lp')"  >裂片:{{ variables['f11lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f11yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f11yl')"  >隐裂:{{ variables['f11yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f11qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f11qj')"  >缺角:{{ variables['f11qj'] }}</a-button>
      </td>
      <td class="tg-rnpj">
        <a-button class="custom-button" @click="minusOne('f12lp')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f12lp')"  >裂片:{{ variables['f12lp'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f12yl')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f12yl')"  >隐裂:{{ variables['f12yl'] }}</a-button>
        <br><a-button class="custom-button" @click="minusOne('f12qj')" type="primary">-</a-button><a-button class="custom-button" type="primary" @click="plusOne('f12qj')"  >缺角:{{ variables['f12qj'] }}</a-button>
      </td> <td class="tg-jd6m">合计</td>
    </tr>
    <tr>
      <td class="tg-6o9b">合计</td>
      <td class="tg-rnpj">{{ sum1 }}</td>
      <td class="tg-rnpj">{{ sum2 }}</td>
      <td class="tg-rnpj">{{ sum3 }}</td>
      <td class="tg-rnpj">{{ sum4 }}</td>
      <td class="tg-rnpj">{{ sum5 }}</td>
      <td class="tg-rnpj">{{ sum6 }}</td>
      <td class="tg-rnpj">{{ sum7 }}</td>
      <td class="tg-rnpj">{{ sum8 }}</td>
      <td class="tg-rnpj">{{ sum9 }}</td>
      <td class="tg-rnpj">{{ sum10 }}</td>
      <td class="tg-rnpj">{{ sum11 }}</td>
      <td class="tg-rnpj">{{ sum12 }}</td>
      <td class="tg-jd6m">{{ sum }}</td>
    </tr>
    <tr>
      <td class="tg-6o9b">占比</td>
      <td class="tg-ejev">{{ pen1 }}%</td>
      <td class="tg-cly1">{{ pen2 }}%</td>
      <td class="tg-cly1">{{ pen3 }}%</td>
      <td class="tg-cly1">{{ pen4 }}%</td>
      <td class="tg-cly1">{{ pen5 }}%</td>
      <td class="tg-cly1">{{ pen6 }}%</td>
      <td class="tg-cly1">{{ pen7 }}%</td>
      <td class="tg-cly1">{{ pen8 }}%</td>
      <td class="tg-cly1">{{ pen9 }}%</td>
      <td class="tg-cly1">{{ pen10 }}%</td>
      <td class="tg-cly1">{{ pen11 }}%</td>
      <td class="tg-ejev">{{ pen12 }}%</td>
      <td class="tg-cly1"></td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:left;vertical-align:middle}
.tg .tg-rnpj{background-color: #b2be60;text-align:center;vertical-align:middle}
.tg .tg-ejev{color:#F00;text-align:center;vertical-align:middle}
.tg .tg-6o9b{background-color: #ed6484;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-jd6m{background-color: #ed6484;text-align:center;vertical-align:middle}

.custom-button {
  background-color: #b2be60; /* Change the background color on hover */
}

#back {
  /*background-color: #b2be60; !* Change the background color to your desired color *!*/
  /*color: #fff; !* Change the text color to white (optional) *!*/
}
</style>
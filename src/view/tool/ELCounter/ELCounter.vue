<script setup>
let variables ={
  a1 : ref(0), a2 : ref(0), a3 : ref(0), a4 : ref(0), a5 : ref(0), a6 : ref(0), a7 : ref(0), a8 : ref(0), a9 : ref(0), a10 : ref(0), a11 : ref(0), a12 : ref(0),
  b1 : ref(0), b2 : ref(0), b3 : ref(0), b4 : ref(0), b5 : ref(0), b6 : ref(0), b7 : ref(0), b8 : ref(0), b9 : ref(0), b10 : ref(0), b11 : ref(0), b12 : ref(0),
  c1 : ref(0), c2 : ref(0), c3 : ref(0), c4 : ref(0), c5 : ref(0), c6 : ref(0), c7 : ref(0), c8 : ref(0), c9 : ref(0), c10 : ref(0), c11 : ref(0), c12 : ref(0),
  d1 : ref(0), d2 : ref(0), d3 : ref(0), d4 : ref(0), d5 : ref(0), d6 : ref(0), d7 : ref(0), d8 : ref(0), d9 : ref(0), d10 : ref(0), d11 : ref(0), d12 : ref(0),
  e1 : ref(0), e2 : ref(0), e3 : ref(0), e4 : ref(0), e5 : ref(0), e6 : ref(0), e7 : ref(0), e8 : ref(0), e9 : ref(0), e10 : ref(0), e11 : ref(0), e12 : ref(0),
  f1 : ref(0), f2 : ref(0), f3 : ref(0), f4 : ref(0), f5 : ref(0), f6 : ref(0), f7 : ref(0), f8 : ref(0), f9 : ref(0), f10 : ref(0), f11 : ref(0), f12 : ref(0),
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
  sum1.value = variables.a1.value + variables.b1.value + variables.c1.value + variables.d1.value + variables.e1.value + variables.f1.value
  sum2.value = variables.a2.value + variables.b2.value + variables.c2.value + variables.d2.value + variables.e2.value + variables.f2.value
  sum3.value = variables.a3.value + variables.b3.value + variables.c3.value + variables.d3.value + variables.e3.value + variables.f3.value
  sum4.value = variables.a4.value + variables.b4.value + variables.c4.value + variables.d4.value + variables.e4.value + variables.f4.value
  sum5.value = variables.a5.value + variables.b5.value + variables.c5.value + variables.d5.value + variables.e5.value + variables.f5.value
  sum6.value = variables.a6.value + variables.b6.value + variables.c6.value + variables.d6.value + variables.e6.value + variables.f6.value
  sum7.value = variables.a7.value + variables.b7.value + variables.c7.value + variables.d7.value + variables.e7.value + variables.f7.value
  sum8.value = variables.a8.value + variables.b8.value + variables.c8.value + variables.d8.value + variables.e8.value + variables.f8.value
  sum9.value = variables.a9.value + variables.b9.value + variables.c9.value + variables.d9.value + variables.e9.value + variables.f9.value
  sum10.value = variables.a10.value + variables.b10.value + variables.c10.value + variables.d10.value + variables.e10.value + variables.f10.value
  sum11.value = variables.a11.value + variables.b11.value + variables.c11.value + variables.d11.value + variables.e11.value + variables.f11.value
  sum12.value = variables.a12.value + variables.b12.value + variables.c12.value + variables.d12.value + variables.e12.value + variables.f12.value
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

<template>

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
      <td class="tg-rnpj"><a-button @click="minusOne('a1')" type="primary">-</a-button>&nbsp; {{ variables['a1'] }} &nbsp;<a-button type="primary" @click="plusOne('a1')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a2')" type="primary">-</a-button>&nbsp; {{ variables['a2']}} &nbsp;<a-button type="primary"  @click="plusOne('a2')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a3')" type="primary">-</a-button>&nbsp; {{ variables['a3']}} &nbsp;<a-button type="primary"  @click="plusOne('a3')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a4')" type="primary">-</a-button>&nbsp; {{ variables['a4']}} &nbsp;<a-button type="primary"  @click="plusOne('a4')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a5')" type="primary">-</a-button>&nbsp; {{ variables['a5']}} &nbsp;<a-button type="primary"  @click="plusOne('a5')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a6')" type="primary">-</a-button>&nbsp; {{ variables['a6']}} &nbsp;<a-button type="primary"  @click="plusOne('a6')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a7')" type="primary">-</a-button>&nbsp; {{ variables['a7']}} &nbsp;<a-button type="primary"  @click="plusOne('a7')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a8')" type="primary">-</a-button>&nbsp; {{ variables['a8']}} &nbsp;<a-button type="primary"  @click="plusOne('a8')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a9')" type="primary">-</a-button>&nbsp; {{ variables['a9']}} &nbsp;<a-button type="primary"  @click="plusOne('a9')"  >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a10')" type="primary">-</a-button>&nbsp;{{ variables['a10'] }}&nbsp;<a-button type="primary" @click="plusOne('a10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a11')" type="primary">-</a-button>&nbsp;{{ variables['a11'] }}&nbsp;<a-button type="primary" @click="plusOne('a11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('a12')" type="primary">-</a-button>&nbsp;{{ variables['a12'] }}&nbsp;<a-button type="primary" @click="plusOne('a12')">+</a-button></td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">B</td>
      <td class="tg-rnpj"><a-button @click="minusOne('b1')"  type="primary" >-</a-button>&nbsp;{{ variables['b1']}} &nbsp;<a-button type="primary" @click="plusOne('b1')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b2')"  type="primary" >-</a-button>&nbsp;{{ variables['b2']}} &nbsp;<a-button type="primary" @click="plusOne('b2')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b3')"  type="primary" >-</a-button>&nbsp;{{ variables['b3']}} &nbsp;<a-button type="primary" @click="plusOne('b3')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b4')"  type="primary" >-</a-button>&nbsp;{{ variables['b4']}} &nbsp;<a-button type="primary" @click="plusOne('b4')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b5')"  type="primary" >-</a-button>&nbsp;{{ variables['b5']}} &nbsp;<a-button type="primary" @click="plusOne('b5')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b6')"  type="primary" >-</a-button>&nbsp;{{ variables['b6']}} &nbsp;<a-button type="primary" @click="plusOne('b6')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b7')"  type="primary" >-</a-button>&nbsp;{{ variables['b7']}} &nbsp;<a-button type="primary" @click="plusOne('b7')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b8')"  type="primary" >-</a-button>&nbsp;{{ variables['b8']}} &nbsp;<a-button type="primary" @click="plusOne('b8')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b9')"  type="primary" >-</a-button>&nbsp;{{ variables['b9']}} &nbsp;<a-button type="primary" @click="plusOne('b9')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b10')" type="primary">-</a-button>&nbsp;{{ variables['b10'] }}&nbsp;<a-button type="primary" @click="plusOne('b10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b11')" type="primary">-</a-button>&nbsp;{{ variables['b11'] }}&nbsp;<a-button type="primary" @click="plusOne('b11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('b12')" type="primary">-</a-button>&nbsp;{{ variables['b12'] }}&nbsp;<a-button type="primary" @click="plusOne('b12')">+</a-button></td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">C</td>
      <td class="tg-rnpj"><a-button @click="minusOne('c1')"  type="primary">-</a-button>&nbsp;{{ variables['c1']}} &nbsp;<a-button type="primary"  @click="plusOne('c1')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c2')"  type="primary">-</a-button>&nbsp;{{ variables['c2']}} &nbsp;<a-button type="primary"  @click="plusOne('c2')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c3')"  type="primary">-</a-button>&nbsp;{{ variables['c3']}} &nbsp;<a-button type="primary"  @click="plusOne('c3')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c4')"  type="primary">-</a-button>&nbsp;{{ variables['c4']}} &nbsp;<a-button type="primary"  @click="plusOne('c4')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c5')"  type="primary">-</a-button>&nbsp;{{ variables['c5']}} &nbsp;<a-button type="primary"  @click="plusOne('c5')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c6')"  type="primary">-</a-button>&nbsp;{{ variables['c6']}} &nbsp;<a-button type="primary"  @click="plusOne('c6')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c7')"  type="primary">-</a-button>&nbsp;{{ variables['c7']}} &nbsp;<a-button type="primary"  @click="plusOne('c7')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c8')"  type="primary">-</a-button>&nbsp;{{ variables['c8']}} &nbsp;<a-button type="primary"  @click="plusOne('c8')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c9')"  type="primary">-</a-button>&nbsp;{{ variables['c9']}} &nbsp;<a-button type="primary"  @click="plusOne('c9')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c10')" type="primary">-</a-button>&nbsp;{{ variables['c10'] }}&nbsp;<a-button type="primary" @click="plusOne('c10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c11')" type="primary">-</a-button>&nbsp;{{ variables['c11'] }}&nbsp;<a-button type="primary" @click="plusOne('c11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('c12')" type="primary">-</a-button>&nbsp;{{ variables['c12'] }}&nbsp;<a-button type="primary" @click="plusOne('c12')">+</a-button></td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">D</td>
      <td class="tg-rnpj"><a-button @click="minusOne('d1')"  type="primary">-</a-button>&nbsp;{{ variables['d1']}} &nbsp;<a-button type="primary"  @click="plusOne('d1')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d2')"  type="primary">-</a-button>&nbsp;{{ variables['d2']}} &nbsp;<a-button type="primary"  @click="plusOne('d2')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d3')"  type="primary">-</a-button>&nbsp;{{ variables['d3']}} &nbsp;<a-button type="primary"  @click="plusOne('d3')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d4')"  type="primary">-</a-button>&nbsp;{{ variables['d4']}} &nbsp;<a-button type="primary"  @click="plusOne('d4')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d5')"  type="primary">-</a-button>&nbsp;{{ variables['d5']}} &nbsp;<a-button type="primary"  @click="plusOne('d5')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d6')"  type="primary">-</a-button>&nbsp;{{ variables['d6']}} &nbsp;<a-button type="primary"  @click="plusOne('d6')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d7')"  type="primary">-</a-button>&nbsp;{{ variables['d7']}} &nbsp;<a-button type="primary"  @click="plusOne('d7')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d8')"  type="primary">-</a-button>&nbsp;{{ variables['d8']}} &nbsp;<a-button type="primary"  @click="plusOne('d8')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d9')"  type="primary">-</a-button>&nbsp;{{ variables['d9']}} &nbsp;<a-button type="primary"  @click="plusOne('d9')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d10')" type="primary">-</a-button>&nbsp;{{ variables['d10'] }}&nbsp;<a-button type="primary" @click="plusOne('d10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d11')" type="primary">-</a-button>&nbsp;{{ variables['d11'] }}&nbsp;<a-button type="primary" @click="plusOne('d11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('d12')" type="primary">-</a-button>&nbsp;{{ variables['d12'] }}&nbsp;<a-button type="primary" @click="plusOne('d12')">+</a-button></td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">E</td>
      <td class="tg-rnpj"><a-button @click="minusOne('e1')"  type="primary">-</a-button>&nbsp;{{ variables['e1']}} &nbsp;<a-button type="primary"  @click="plusOne('e1')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e2')"  type="primary">-</a-button>&nbsp;{{ variables['e2']}} &nbsp;<a-button type="primary"  @click="plusOne('e2')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e3')"  type="primary">-</a-button>&nbsp;{{ variables['e3']}} &nbsp;<a-button type="primary"  @click="plusOne('e3')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e4')"  type="primary">-</a-button>&nbsp;{{ variables['e4']}} &nbsp;<a-button type="primary"  @click="plusOne('e4')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e5')"  type="primary">-</a-button>&nbsp;{{ variables['e5']}} &nbsp;<a-button type="primary"  @click="plusOne('e5')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e6')"  type="primary">-</a-button>&nbsp;{{ variables['e6']}} &nbsp;<a-button type="primary"  @click="plusOne('e6')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e7')"  type="primary">-</a-button>&nbsp;{{ variables['e7']}} &nbsp;<a-button type="primary"  @click="plusOne('e7')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e8')"  type="primary">-</a-button>&nbsp;{{ variables['e8']}} &nbsp;<a-button type="primary"  @click="plusOne('e8')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e9')"  type="primary">-</a-button>&nbsp;{{ variables['e9']}} &nbsp;<a-button type="primary"  @click="plusOne('e9')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e10')" type="primary">-</a-button>&nbsp;{{ variables['e10'] }}&nbsp;<a-button type="primary" @click="plusOne('e10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e11')" type="primary">-</a-button>&nbsp;{{ variables['e11'] }}&nbsp;<a-button type="primary" @click="plusOne('e11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('e12')" type="primary">-</a-button>&nbsp;{{ variables['e12'] }}&nbsp;<a-button type="primary" @click="plusOne('e12')">+</a-button></td>
      <td class="tg-cly1"></td>
    </tr>
    <tr>
      <td class="tg-6o9b">F</td>
      <td class="tg-rnpj"><a-button @click="minusOne('f1')"  type="primary">-</a-button>&nbsp;{{ variables['f1']}}  &nbsp;<a-button type="primary"  @click="plusOne('f1')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f2')"  type="primary">-</a-button>&nbsp;{{ variables['f2']}}  &nbsp;<a-button type="primary"  @click="plusOne('f2')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f3')"  type="primary">-</a-button>&nbsp;{{ variables['f3']}}  &nbsp;<a-button type="primary"  @click="plusOne('f3')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f4')"  type="primary">-</a-button>&nbsp;{{ variables['f4']}}  &nbsp;<a-button type="primary"  @click="plusOne('f4')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f5')"  type="primary">-</a-button>&nbsp;{{ variables['f5']}}  &nbsp;<a-button type="primary"  @click="plusOne('f5')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f6')"  type="primary">-</a-button>&nbsp;{{ variables['f6']}}  &nbsp;<a-button type="primary"  @click="plusOne('f6')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f7')"  type="primary">-</a-button>&nbsp;{{ variables['f7']}}  &nbsp;<a-button type="primary"  @click="plusOne('f7')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f8')"  type="primary">-</a-button>&nbsp;{{ variables['f8']}}  &nbsp;<a-button type="primary"  @click="plusOne('f8')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f9')"  type="primary">-</a-button>&nbsp;{{ variables['f9']}}  &nbsp;<a-button type="primary"  @click="plusOne('f9')" >+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f10')" type="primary">-</a-button>&nbsp;{{ variables['f10'] }} &nbsp;<a-button type="primary" @click="plusOne('f10')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f11')" type="primary">-</a-button>&nbsp;{{ variables['f11'] }} &nbsp;<a-button type="primary" @click="plusOne('f11')">+</a-button></td>
      <td class="tg-rnpj"><a-button @click="minusOne('f12')" type="primary">-</a-button>&nbsp;{{ variables['f12'] }} &nbsp;<a-button type="primary" @click="plusOne('f12')">+</a-button></td>
      <td class="tg-jd6m">合计</td>
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
</template>

<style scoped>
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:left;vertical-align:middle}
.tg .tg-rnpj{background-color:#F2BA02;text-align:center;vertical-align:middle}
.tg .tg-ejev{color:#F00;text-align:center;vertical-align:middle}
.tg .tg-6o9b{background-color:#FF0;font-weight:bold;text-align:center;vertical-align:middle}
.tg .tg-jd6m{background-color:#FF0;text-align:center;vertical-align:middle}
</style>
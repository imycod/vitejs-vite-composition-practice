<script setup>
import { reactive, computed } from 'vue';

import useModel from '../../hooks/useSeachAssess/model.js';
const {
  querys: { demo2: query },
  model,
} = useModel('demo2');
</script>

<template>
  {{ query.quarter }}
  <select v-model="query[select.prop]" v-for="select in model">
    <option
      v-for="option in select.options"
      :value="option.index"
      :label="option.label"
    ></option>
  </select>
</template>

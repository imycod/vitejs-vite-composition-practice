<script setup>
import { reactive, computed } from 'vue';

import useModel from '../../hooks/useSeachAssess/model.js';
import useAssessCycle from '../../hooks/useSeachAssess/useAssessCycle.js';
import useQuarter from '../../hooks/useSeachAssess/useQuarter.js';
const query = reactive({
  assessCycle: 0,
  quarter: 0,
});
const model = useModel(query);
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

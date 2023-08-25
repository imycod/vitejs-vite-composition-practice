import { reactive } from 'vue';
import useAssessCycle from './useAssessCycle';
import useQuarterOptions from './useQuarter';

const { basCycleOptions } = useAssessCycle();
const { basQuarterOptions } = useQuarterOptions();

export default function useModel(query) {
  const model = reactive([
    {
      type: 'select',
      prop: 'assessCycle',
      options: basCycleOptions,
      label: '考核周期',
    },
    {
      type: 'select',
      prop: 'quarter',
      options: basQuarterOptions(query),
      label: '考核时间',
    },
  ]);

  return model;
}

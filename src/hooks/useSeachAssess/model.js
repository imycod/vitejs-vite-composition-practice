import { reactive } from 'vue';
import useAssessCycle from './useAssessCycle';
import useQuarterOptions from './useQuarter';

const { basCycleOptions } = useAssessCycle();
const { basQuarterOptions } = useQuarterOptions();

export default function useModel(moduleName) {
  // 注意：每个实例都有自己的query
  const querys = reactive({
    demo1: {
      assessCycle: 0,
      quarter: 0,
    },
    demo2: {
      assessCycle: 0,
      quarter: 0,
    },
  });
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
      options: basQuarterOptions(querys[moduleName]),
      label: '考核时间',
    },
  ]);

  return {
    querys,
    model,
  };
}

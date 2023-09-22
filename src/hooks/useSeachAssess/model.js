import { reactive } from 'vue';
import useAssessCycle from './useAssessCycle';
import useQuarterOptions from './useQuarter';

const { basCycleOptions } = useAssessCycle();
const { basQuarterOptions } = useQuarterOptions();

// class QuerySource {
//   query = null;
//   constructor() {
//     this.query = reactive({
//       assessCycle: 0,
//       quarter: 0,
//     });
//   }
// }

// sigle instance
function QuerySource() {
  return {
    query: reactive({
      assessCycle: 0,
      quarter: 0,
    }),
  };
}

// share public instance
// const querySource = {
//   query: reactive({
//     assessCycle: 0,
//     quarter: 0,
//   }),
// };

export default function useModel() {
  const querySource = new QuerySource();

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
      options: basQuarterOptions(querySource.query),
      label: '考核时间',
    },
  ]);

  return {
    query: querySource.query,
    model,
  };
}

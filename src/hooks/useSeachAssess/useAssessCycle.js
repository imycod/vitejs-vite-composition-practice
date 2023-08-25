import { watch } from 'vue';
import useQuarterOptions from './useQuarter';

export default function useAssessCycle() {
  const basCycleOptions = [
    { index: 0, label: '季度考核' },
    { index: 1, label: '月度考核' },
    { index: 2, label: '半年度考核' },
    { index: 3, label: '年度考核' },
  ];

  // deprecated
  const { getCycleQuarterOptions, basQuarterOptions } = useQuarterOptions();
  function watchQuarterOptions(query) {
    watch(
      () => query.assessCycle,
      (v) => {
        const options = getCycleQuarterOptions(v);
        basQuarterOptions.value = options;
      }
    );
  }

  return {
    basCycleOptions,
    watchQuarterOptions,
  };
}

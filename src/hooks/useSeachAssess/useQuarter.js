import { computed } from 'vue';
export default function useQuarter(query) {
  function getCycleQuarterOptions(v) {
    const ls = [
      [
        { index: 0, label: 'Q1' },
        { index: 1, label: 'Q2' },
        { index: 2, label: 'Q3' },
        { index: 3, label: 'Q4' },
      ], // 0
      // 2 月度考核
      generateMonthOptions(),
      [
        // 1 半年考核
        { index: 0, label: 'H1' },
        { index: 1, label: 'H2' },
      ],
      [
        // 3 年度考核
        { index: 0, label: 'Y1' },
      ],
    ];

    return ls[v];
  }

  function getIndex(assessCycle) {
    const date = new Date();
    const month = date.getMonth() + 1;
    const periods = {
      0: {
        // 季度考核
        divisor: 3,
        round: Math.ceil,
      },
      2: {
        // 半年度考核
        divisor: 6,
        round: Math.ceil,
      },
      1: {
        // 月度考核
        divisor: 1,
        round: Math.round,
      },
      3: {
        // 年度
        divisor: null,
        round: null,
      },
    };
    const period = periods[assessCycle];
    let index = 0;
    if (period.divisor) {
      index = period.round(month / period.divisor) - 1;
    }
    return index;
  }

  let basQuarterOptions = function (query) {
    return computed(() => {
      query.quarter = getIndex(query.assessCycle);
      return getCycleQuarterOptions(query.assessCycle);
    });
  };

  function generateMonthOptions() {
    const ls = [];
    for (let i = 0; i < 12; i++) {
      const obj = {
        index: `${i}`,
        label: `M${i + 1}`,
      };
      ls.push(obj);
    }
    return ls;
  }

  return {
    basQuarterOptions,
    getCycleQuarterOptions,
  };
}

import type { ResultComparison, LetterResult } from '@/types';

export function compareWords(expected: string, actual: string): ResultComparison {
  const letterResults: LetterResult[] = [];
  const maxLen = Math.max(expected.length, actual.length);

  for (let i = 0; i < maxLen; i++) {
    const exp = expected[i] ?? null;
    const act = actual[i] ?? null;

    if (exp && act) {
      letterResults.push({
        expected: exp,
        actual: act,
        status: exp.toLowerCase() === act.toLowerCase() ? 'correct' : 'wrong',
      });
    } else if (exp && !act) {
      letterResults.push({
        expected: exp,
        actual: null,
        status: 'missing',
      });
    } else if (!exp && act) {
      letterResults.push({
        expected: '',
        actual: act,
        status: 'extra',
      });
    }
  }

  const correctCount = letterResults.filter((r) => r.status === 'correct').length;
  const accuracy = expected.length > 0 ? Math.round((correctCount / expected.length) * 100) : 0;

  return {
    expected,
    actual,
    letterResults,
    isCorrect: expected.toLowerCase() === actual.toLowerCase(),
    accuracy,
  };
}

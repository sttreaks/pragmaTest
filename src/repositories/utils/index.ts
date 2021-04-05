import { times } from 'lodash'

export const getParamValues = (paramLength: number): string => {
  return times(paramLength, i => `$${ i + 1 }`).join(',')
};

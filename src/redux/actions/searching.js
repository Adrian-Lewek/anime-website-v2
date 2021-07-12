export const searchValue = (value = '') => {
  return {
    type: 'CHANGE',
    value,
  }
}
import utils from './utils'

describe('src/utils/utils.js', () => {
  it('takes an object and turns into array of objects sorted alphabetically by value', () => {
    const obj = { '1234': 'Ryker', '2345': 'picard', '3456': 'Worf' }
    const expected = ['picard', 'Ryker', 'Worf']

    expect(utils.objToSortedArray(obj)).toEqual(expected)
  })
})

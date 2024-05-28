function solution(number){
    return number
}

const assert = require('assert')

function test(n, expected) {
  it(`n=${n}`, () => {  
    let actual = solution(n)
    assert.strictEqual(actual, expected)
  })
}

describe("basic tests", function(){
  test(10,23)
})
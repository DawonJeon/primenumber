
import {solution, prime} from "../src/prime.js";
  
  
test("1은 소수인가", () => {
    expect(solution(1)).toEqual('소수가 아닙니다');
  });

test("1은 소수인가", () => {
    expect(solution(0)).toEqual('소수가 아닙니다');
});

test("1은 소수인가", () => {
  expect(solution(-5)).toEqual('소수가 아닙니다');
});

/*
test("for문 2이상 9미만의 값", () => {
    expect(prime(9)).toEqual([2, 3, 5, 7]);
}) */ 

test("2부터 9까지 테스트", () => {
  let input = 10
  let array = []
  for (let i = 2; i < input; i++) {
    array.push(i)
  }
  expect(array).toEqual([2,3,4,5,6,7,8,9]);
}) 


test("이중for문에서 결과값 확인", () => {
  let input = 5
  let newarray = []
  for (let i = 2; i < input; i++) {
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(i)
          }
      }
  }
  expect(newarray).toEqual([4]);
}) 

test("배열에 0또는 1을 넣어봤다", () => {
  let input = 5
  let newarray = []
  for (let i = 2; i < input; i++) {
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(0)
          } else {
            newarray.push(1)
          }
      }
  }
  expect(newarray).toEqual([1,0,1]);
}) 



test("3까지의 소수", () => {
  let input = 5
  let isNotPrime=[]
  let Prime = []
  for (let i = 2; i < input; i++) {
    let newarray = [];
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(0)
          } 
      } newarray.includes(0,0) ? isNotPrime.push(i) : Prime.push(i) 
  }
  expect(Prime).toEqual([2,3]);
}) 


test("9까지의 소수 ", () => {
  let input = 9
  let isNotPrime=[]
  let Prime = []
  for (let i = 2; i < input; i++) {
    let newarray = [];
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(0)
          } 
      } newarray.includes(0,0) ? isNotPrime.push(i) : Prime.push(i) 
  }
  expect(Prime).toEqual([2,3,5,7]);
}) 



test("30까지의 소수 ", () => {
  let input = 30
  let isNotPrime=[]
  let Prime = []
  for (let i = 2; i < input; i++) {
    let newarray = [];
      for (let j = 2; j < i ; j++) {
          if ( i % j === 0 ) {
            newarray.push(0)
          } 
      } newarray.includes(0,0) ? isNotPrime.push(i) : Prime.push(i) 
  }
  expect(Prime).toEqual([2,3,5,7,11,13,17,19,23,29]);
}) 


test("10000까지의 소수 ", () => {
  let input = 10000
  let notPrime=[]
  let Prime = []
  for (let i = 2; i < input; i++) {
    let newarray = [];
    for (let j = 2; j < i ; j++) {
      if ( i % j === 0 ) {
        newarray.push(0)
      } 
    } newarray.includes(0,0) ? notPrime.push(i) : Prime.push(i) 
  }
  expect(Prime.length).toBe(1229);
}) 


test("프로그래머스를 위한 코드 ", () => {
  expect(solution(10000)).toBe(1229);
});


/*
test("9이하에서 소수가 몇 개인가?", () => {
  expect(prime(9)).toBe(7);
}) */
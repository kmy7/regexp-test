// // console.log(123)
// const str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `
//정규식 생성
//const regexp = new RegExp('the', 'gi')  //g:모두 , i:대소문자구분안함
// const regexp = /the/gi
// console.log(str.match(regexp))


//메서드
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))  //값변경 없음
// console.log(str)


// //메서드
// let str2 = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `
// const regexp = /fox/gi
// // console.log(regexp.test(str)) 
// str2 = str2.replace(regexp, 'AAA')  //값변경
// console.log(str2)

//플래그
// const str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// // const regexp = /the/
// // const regexp = /the/g
// const regexp = /the/gi
// console.log(str.match(regexp))
// console.log(str.match(/the/gi))

// console.log(str.match(/\./gi)) //. : 특정문자 검사 패턴(특수문자) => 문자로 해석 \.
// console.log(str.match(/\.$/gi)) // \.$ : 문자 데이타 끝부분 .이 있는지
// console.log(str.match(/\.$/gim)) // \.$ : 각 라인의 문자(여러줄) 데이타 끝부분 .이 있는지

// // 패턴(표현)
// const str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://lovalhost:1234/
// `

// console.log(
//   str.match(/d$/g)
// )
// console.log(
//   str.match(/d$/gm)
// )

// console.log(
//   str.match(/^t/gim)
// )

// console.log(
//   str.match(/h..p/g) //하나의 특정글자
// )

// console.log(
//   str.match(/fox|dog/g) //또는
// )

// console.log(
//   str.match(/https?/g) //또는
// )

// console.log(
//   str.match(/d/) 
// )
// console.log(
//   str.match(/d{2}/) //d두번 반복
// )
// console.log(
//   str.match(/d{2}/g) 
// )
// console.log(
//   str.match(/d{2,}/g) // 2개이상
// )
// console.log(
//   str.match(/d{2,3}/g) // 2개이상 3개이하
// )
// console.log(
//   str.match(/\w{2,3}/g) // 숫자포함 알파벳이 2개이상 3개이하
// )
// console.log(
//   str.match(/\b\w{2,3}\b/g) // 숫자와, 알파벳 경계를 만들어 숫자포함 알파벳이 2개이상 3개이하
// )


// const str = `
// 010-1234-5678
// thesecon@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://lovalhost:1234/
// 동해물과_백두산이 마르고 닳도록
// `
// console.log(
//   str.match(/[fox]/g) //f, o, x가 모두 찾아짐
// )
// console.log(
//   str.match(/[0-9]/g) //0 ~ 9 가 모두 찾아짐
// )
// console.log(
//   str.match(/[0-9]{1,}/g) //1개 이상 반복되는 0 ~ 9 가  모두 찾아짐
// )
// console.log(
//   str.match(/[가-힣]{1,}/g) //1개 이상 반복되는 한글 모두 찾아짐
// )

// console.log(
//   str.match(/\w/g) // '_' 포함 영문, 숫자 
// )
// console.log(
//   str.match(/\b/g) // '_' 포함 영문, 숫자 제외 경계
// )
// console.log(
//   str.match(/\bf\w{1,}\b/g) // f로 시작되는 모든 영단어
// )
// console.log(
//   str.match(/\d{1,}/g) // 숫자
// )
// console.log(
//   str.match(/\s/g) // //공백
// )

// const h = `  the hello  world   !`
// console.log(
//   h.match(/\s/g) // //공백
// )
// console.log(
//   h.replace(/\s/g, '')
// )
// console.log(
//   h.replace(/\s/g, '')
// )

const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  // str.match(/(?=/@)/g) //앞쪽일치
  str.match(/.{1,}(?=@)/g) //앞쪽일치
)
console.log(
  str.match(/(?<=@).{1,}/g) //뒤쪽일치
)
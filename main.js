let str = `
011-4235-2343
Thewdsd@gmail.com
https://naver.com/?s=frozen
abbcccdddd
the quick brown fox jumps over the lazy dog.
http:localhost:1234
`


console.log(str.match(/\w{2,3}/g))

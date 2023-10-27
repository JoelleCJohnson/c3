//reverse a string

function reverseString(string){
    console.log(string.split("").reverse().join(""))
}

reverseString("hello")

function reverseString2(string){
    let newString = ''
    for(let i = string.length - 1; i >= 0 ; i--){
        newString += string[i]
    }
    console.log(newString)
}
reverseString2("string");
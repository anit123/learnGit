
//-----------Array Push Function-------------//
// var x=[1,2,3,4,5]
// var y=x.push(6,7,8,11,24,34)

// var days=['sun','mon','tues']
// // var moredays=days.push('wedn','thur','fri')

// var num=['A',8,'B','6',5,'k']
// var additional=num.push(95, 'Nepal')
//-------------------------------Array Filter--------------------//
// var arr1=[17,18,19,20,21]
// var arr2=arr1.filter(age=>age>=20)

//  var word=['Regards','Decard','Degrand','Deploy','Denish']
//  var arr1=word.filter(letter=>letter.length<=6);

// var num1=[2,4,6,5,7,3,15,34,56,56,75,34,54,27,36,84]
// var num2=num1.filter(a1=>(a1%3==0))

// function isBigEnough(num){
//     return num>=10
// }
// let filtered=[3,4,6,8,10,12,14,56,67].filter(isBigEnough)

// function wordCound(word){
//     if(word.length<=4)
//     return word
// }
// let cound=['Rajesh', 'Nripesh','aja','bijay'].filter(wordCound)

function letterCound(letter){
    if(letter>=6)
        return letter
    
}

const arr1=['Kathmandu','Lemon','Dragom','rist','Wrist'].filter(letterCound)
document.getElementById('demo').innerHTML=arr1

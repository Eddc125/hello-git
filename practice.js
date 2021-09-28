var students = ['Eddie','WEI','MAY']

console.log(students); // ['Eddie','WEI','MAY']
console.log(students.length); // 3
console.log(students,students.length); // ['Eddie','WEI','MAY'] 3
console.log(students[2]); // MAY 

var last = students[students.length - 1]
console.log(last); // MAY

var middle = students[students.length - 2]
console.log(middle); // WEI

students.forEach((i)=>{
    console.log(i);
}); 
// Eddie 
// WEI
// MAY 

students.forEach(function(items,index){
    console.log(index,items)
})
// 0 Eddie
// 1 WEI
// 2 MAY

var new_students = ['Eddie','WEI','MAY','Vera','Cheng','CrazyPear','Ruwen','Chick','Tutu','Hsu'];


// 要把 new_students 中的 value 都變大寫

// 方法一
var bigFirst =[]
for(let k=0; k<new_students.length; k++){
    bigFirst[k] = new_students[k].toUpperCase();
}
console.log(bigFirst);

// 方法二    
// map能夠遍歷陣列內所有的值，並修改
var bigFirst_map = new_students.map((a)=>{
    return a.toUpperCase();
});
console.log(bigFirst_map);

// [
//     'EDDIE', 'WEI',
//     'MAY',   'VERA',
//     'CHENG', 'CRAZYPEAR',
//     'RUWEN', 'CHICK',
//     'TUTU',  'HSU'
// ]

// 把陣列中的 val 都變小寫
var small_map = bigFirst_map.map((s)=>{
    return s.toLowerCase();
})
console.log(small_map);



// 要把陣列中所有值串在一起

// 方法一
var nameLength = [];

for(l=0; l<new_students.length; l++){
    nameLength += new_students[l]  
}
console.log(nameLength);
// EddieWEIMAYVeraChengCrazyPearRuwenChickTutuHsu
console.log(nameLength.length)
// 46

// 方法二
// reduce能夠將陣列的內容加總，並回傳
var nameLength_reduce = new_students.reduce((total ,val)=>{
    return total + val; 
})
console.log(nameLength_reduce);
// EddieWEIMAYVeraChengCrazyPearRuwenChickTutuHsu


// filter會將符合條件的值回傳

// 方法一
var students_v1 = [];
for(v=0; v<new_students.length; v++){
    if(new_students[v].length > 3){
        students_v1.push(new_students[v]);
    }
}
console.log(new_students);
console.log(students_v1);

// 方法二
var students_filter = new_students.filter((v)=>{
    return v.length > 3;
})
console.log(students_filter);

// 加入新的值到陣列最後
new_students.push('Kenny');
console.log(new_students)
// [
//   'Eddie', 'WEI',
//   'MAY',   'Vera',
//   'Cheng', 'CrazyPear',
//   'Ruwen', 'Chick',
//   'Tutu',  'Hsu',
//   'Kenny'
// ]


// 直接 var 會 回傳 項目數量
var number_students = new_students.push('Marry')
console.log(number_students); //12
console.log(new_students[11]) // Marry

console.log(new_students.push('WEIYU')) // 13
console.log(new_students) 
// [
//     'Eddie', 'WEI',
//     'MAY',   'Vera',
//     'Cheng', 'CrazyPear',
//     'Ruwen', 'Chick',
//     'Tutu',  'Hsu',
//     'Kenny', 'Marry',
//     'WEIYU'
// ]  
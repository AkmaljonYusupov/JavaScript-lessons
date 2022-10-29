# JavaScript-lessons 9-dars. Interpolatsiya
Mohirdev Academiy darsliklari: Full Stack Javascript (MERN) 1-MODUL
# Foydali qollanma o'qib chiqing:

JavaScript-da interpolatsiya shunga o'xshash tarzda ishlaydi. Satrda $ {...} konstruktsiyasi yaratilgan bo'lib, uning ichiga istalgan o'zgaruvchini yoki ifodani joylashtirish mumkin:

var age = 25;
console.log (`Men $ {age} yoshdaman '); // Men 25 yoshdaman

// Ekvivalent
console.log ('Men' + yosh + 'yoshdaman'); // Men 25 yoshdaman
Muhim: oddiy tirnoq ('va ") bilan yaratilgan satrlar interpolyatsiyani qo'llab-quvvatlamaydi. Interpolatsiyani qo'llab-quvvatlash uchun" ("klaviaturadagi" tugmasi):

var age = 25;
// Interpolatsiya oddiy tirnoq bilan qo'llab-quvvatlanmaydi
console.log ('Men $ {age} yoshdaman'); // Men $ {age} yoshdaman
console.log ("Men $ {age} yoshdaman"); // Men $ {age} yoshdaman
// Faqat teskari bilan qo'llab-quvvatlanadi
console.log (`Men $ {age} yoshdaman '); // Men 25 yoshdaman
So'zlarni interpolatsiya qilish
Interpolatsiyadan foydalanib, har qanday ifodaning natijasini qatorga qo'yishingiz mumkin, masalan, funktsiya chaqiruvi:

const up = (str) => str.toUpperCase ();
str = "bu katta harf bilan $ {up ('sting')}";
console.log (str); // bu katta harf bilan STRING
yoki undan murakkab iboralar:

const sum = (... args) => `Sum $ $ {args.reduce ((start, arg) => start + arg, 0)} ga teng; '

console.log (sum (12, 23, 32)); // Sum 67 ga teng
Ichki interpolatsiya
Ehtimol, bir darajadagi interpolatsiya etarli bo'lmagan holatlar bo'ladi. Bunday hollarda uyalash (interpolatsiya ichidagi interpolatsiya) dan foydalanish qulay. Shuni esda tutish kerakki, $ {...} ichidagi barcha kodlar alohida iboralar sifatida talqin qilinadi, ya'ni qatorning oxiri sifatida qabul qilinmaydigan teskari tirnoqlarni o'z ichiga olishi mumkin:

const up = (str) => str.toUpperCase ();
foydalanuvchi = 'foydalanuvchi' bo'lsin;
str = bu $ {up ( $ {user} s`)} ajoyib ';
console.log (str); // bu FOYDALANuvchilar zo'r
Str o'zgaruvchisi ichki interpolatsiyadan foydalanadi. Eski standartdan foydalanib, kodni quyidagicha yozish mumkin:

var user = 'foydalanuvchi';
var str = 'these' + up (user + 's') + 'great';
console.log (str); // bu FOYDALANuvchilar zo'r

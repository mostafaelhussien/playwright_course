
/*let a=4
console.log(a)
console.log(typeof(a))
let b=234.6
console.log(b)
console.log(typeof(b))
var c="Mostafa Elusseiny"
console.log(typeof(c))
// let c=a+b will give error
// use c=a+b instead
c=a+b
console.log(c)
let required=true
console.log(typeof(required))
console.log(!required)
console.log(required)
/*
These
are
the
Basics
*/

/*const flag=true
if (!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

*/
/*let i =0
while (i>10)
{
    i++
    console.log(i)
}
do
{
    i++
}
while (i>10);
console.log(i)
*/
/*
A plain while can run zero times. A do-while always runs at least once, guaranteed,
 before it ever checks anything. That single difference is the entire reason this loop type exists.
*/
/*console.log("******************************************")
let n=0
for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0)
    {
        n++
        console.log(k)
        if(n==3)
            break
    }
}

let required=true
while(required)
{
    console.log(required)
    required=false
}
    */
/*
var marks=Array(6)
var marks=[10,20,35,59,89,199]
console.log(marks)
let subMarks=marks.slice(2,5)
console.log(subMarks)
console.log(marks[2])

marks[3]=15
console.log(marks)
console.log(marks.length)
// BLOCK 3: push, pop, unshift, indexOf, includes
marks.push(65)
// EN: .push() adds a new item to the END of the array.

console.log(marks)
marks.pop()
// EN: .pop() removes the item from the END (it would return that removed
console.log(marks)
marks.unshift(12)
console.log(marks)
//.unshift() adds a new item to the FRONT of the array,
console.log(marks.indexOf(20)) //2
console.log(marks.includes(300)) //false
// BLOCK 4: manual sum loop, then the same thing with .reduce()
var sum=0
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i]
}
console.log(sum)
//Start with sum =0,loop six times through the marks array ,each iteration represents the element which has the turn
//e,g [12,10,20,35,59,89,199] marks[0]=10,marks[1]=20..etc,
//sum at i=0 is 0,marks[0]=10,then sum at i=1 is 10,marks[1]=20,then total sum is 30..etc
//sum at i=2=30,marks[2]=35,then total sum here is 65..etc
//and loop till i<7 seven times (array length)

//reduce filter map
let total=marks.reduce((a,b)=>a+b,0)
//can also be written as mark.reduce((sum,mark)=>sum+mark,0)
//a starts at zero(e,g sum starts at zero)
//mark will be 12 then 10 then 20 then 35 then 59 then 89 then 199
console.log(total)
/*فكّرها كده: reduce هي زي عدّاد سباق التتابع
 — كل عنصر في الأراي بياخد العصاية (sum) اللي وصلتله من العنصر اللي قبله، يزوّد عليها قيمته، ويسلّمها للعنصر اللي بعده.
  آخر واحد بياخد العصاية ويوصلها خط النهاية،
 وده اللي بيتحط في total.
*/
// ----------------------------------------------------------------------------
// BLOCK 5: manual filter loop, then the same thing with .filter()
/*var scores=[12,13,14,16]
var evenScores=[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores) //[12,14,16],This is the Manual Approach
let newFilterEvenScores=scores.filter(a=>a%2==0) //same logic in just one line
console.log(newFilterEvenScores) 
// BLOCK 6: .map() to transform, then .reduce() to total, then the FULL chain
let mappedArray=newFilterEvenScores.map(a=>a*3)
console.log(mappedArray) //[ 36, 42, 48 ]
let totalVal=mappedArray.reduce((a,b)=>a+b,0) //a starts at zero then 36 then 36+42  ,b will be 36 then 42 then 48
console.log(totalVal) //126
//The Full Chain (Same Result)
var scores1=[12,13,14,16]
let sumValue=scores1.filter(a=>a%2==0).map(a=>a*3).reduce((a,b)=>a+b,0) 
console.log(sumValue) //126
// BLOCK 7: sort() and reverse() on strings
let fruits=["banana","mango","watermelon","strawberry"]
console.log(fruits.sort()) //ascending order alphabetically [ 'banana', 'mango', 'strawberry', 'watermelon' ]
console.log(fruits.reverse()) //descending order alphabetically [ 'watermelon', 'strawberry', 'mango', 'banana' ]
// BLOCK 8: the "003" gotcha, and why numbers need a comparator function
var scores1=[12,003,19,16,14]
console.log(scores1) //[ 12, 3, 19, 16, 14 ]
*/
// EN: scores1 gets reused here with var, quietly overwriting the earlier
//     scores1 array used in the chaining example above — that's exactly
//     what var allows.
// EN: Spot "003" in that array? A number written with a leading zero
//     like that gets silently read by JavaScript as an old-style
//     numbering system (octal), and 003 simply equals plain 3.
//console.log(scores1.sort((a,b)=>b-a)) //Sort descending [ 19, 16, 14, 12, 3 ]

/*
عشان تشوف السحر ده بعينك وتفهمه للأبد، تخيل إننا جايبين "حَكَم مباراة" واقف قدامه ميزان بكفتين، ومعه المصفوفة بتاعتك دي: [12, 3, 19, 16, 14].

الحَكَم ده أعمى مش شايف الأرقام، بس معاه "كتالوج" مش بيغيره أبداً، ومكتوب فيه قاعدة واحدة ثابتة في جافاسكريبت:

"يا حَكَم، هتحط رقم في الكفة اليمين اسمه a، ورقم في الكفة الشمال اسمه b، وتعمل الحسبة اللي المبرمج كاتبها (b - a).

لو النتيجة طلعت رقم موجب (أكبر من 0): حرك الرقمين وبدّل أماكنهم (هات الشمال مكان اليمين).

لو النتيجة طلعت رقم سالب (أصغر من 0): سيبهم زي ما هما في أماكنهم."
b in the left hand,a in the right hand,if b>a replace

جولة 1: الحَكَم مسك أول رقمين (12 و 3)
الكفة اليمين فيها أول رقم: a = 12

الكفة الشمال فيها ثاني رقم: b = 3

الحسبة البرمجية (b - a): تعني 3 - 12

النتيجة الكلية: -9 (رقم سالب!)

قرار الحَكَم: الكتالوج بيقول السالب يعني "سيبهم زي ما هما".

الشكل الحالي للمصفوفة: [12, 3, 19, 16, 14] (لم تتغير).

جولة 2: الحَكَم هيقارن الـ 3 بالـ 19
الكفة اليمين: a = 3

الكفة الشمال: b = 19

الحسبة البرمجية (b - a): تعني 19 - 3

النتيجة الكلية: 16+ (رقم موجب! 💥)

قرار الحَكَم: الكتالوج بيقول الموجب يعني "شقلب الأماكن فوراً، هات الـ 19 مكان الـ 3".

الشكل الحالي للمصفوفة: الـ 19 قفزت خطوة للأمام [12, 19, 3, 16, 14].

جولة 3: الحَكَم هيقارن الـ 12 بالـ 19 (لأن الـ 19 بتتقدم وعايزة تروح للمركز الأول)
الكفة اليمين: a = 12

الكفة الشمال: b = 19

الحسبة البرمجية (b - a): تعني 19 - 12

النتيجة الكلية: 7+ (رقم موجب! 💥)

قرار الحَكَم: شقلب الأماكن! الـ 19 تكسب وتتخطى الـ 12.

الشكل الحالي للمصفوفة: الـ 19 وصلت للمركز الأول [19, 12, 3, 16, 14].
*/

/* ============================================================================
   🤖 دليل مدينة ألعاب جافاسكريبت: السكوب (Scope) والـ Functions 🤖
   ============================================================================ */

/* ----------------------------------------------------------------------------
الجزء الأول: قواعد غرف السكوب (Scope) والعلب (المتغيرات) — من ملف basics4.js
----------------------------------------------------------------------------
تخيل إن مدينة الألعاب دي متقسمة لـ "بيوت وغرف". السكوب (Scope) هو اللي بيحدد 
كل علبة (متغير) عايشة في أنهي غرفة، وهل الغرف التانية تقدر تشوفها وتفتحها ولا لأ.
الأقواس المتعرجة {} في الكود هي بمثابة "الحيطان" اللي بتبني الغرف دي.

في جافاسكريبت، عندنا 3 أنواع من العلب بنخزن فيها الحاجات، وكل علبة ليها تصرف مختلف:

1. العلبة القديمة (var):
   دي علبة سحرية ومتمردة، بتخترق الحيطان الأقواس {} عادي جداً ومش بتهتم بيها. 
   الحدود الوحيدة اللي بتوقفها هي حدود "الدالة" (Function) أو الملف كله.

2. العلبة الذكية (let):
   دي علبة مؤدبة وبتحترم الحيطان {} جداً. لو عملت علبة باستخدام let جوه غرفتها 
   الخاصة {}، العلبة دي بتعيش وتموت جوه الغرفة دي بس، ومحدش بره الغرفة يقدر يشوفها.

3. العلبة الحديدية (const):
   دي أقوى علبة في المدينة! بتجمع بين ميزتين:
   - بتحترم الحيطان {} ومبتخرجش بره غرفتها زي let.
   - مقفولة بقفل حديدي؛ يعني القيمة اللي حطيتها جواها أول مرة مستحيل تتغير أو تتبدل للأبد.


تشريح كود السكوب سطر بسطر:
-------------------------

• const greet = "Evening"
  هنا عملنا علبة حديدية (const) في الشارع العمومي للمدينة (Global Level).
  سميناها greet وحطينا جواها كلمة "Evening". العلبة دي مقفولة ومتاحة للمدينة كلها.

• // greet = "night"
  السطر ده معمول كومنت لأننا لو شلنا الكومنت وشغلناه، الكمبيوتر هيصرخ ويطلع خطأ أحمر كبير 
  يقول: (Assignment to constant variable). 
  السبب؟ لأننا حاولنا نفتح العلبة الحديدية const ونغير قيمتها لـ "night"، وده ممنوع في قوانين المدينة.

• if( 1 == 1) { let greet = "Afternoon" }
  - الشرط (1 == 1) دايماً صح (true)، فالكمبيوتر بيفتح الباب ويدخل جوه الأقواس المتعرجة {}.
  - الأقواس {} دي بمثابة "غرفة خاصة سرية مقفولة".
  - جوه الغرفة دي، استخدمنا let لإنشاء علبة جديدة تماماً اسمها برضه greet وحطينا جواها "Afternoon".
  - السؤال هنا: ليه الكمبيوتر موافق إن فيه علبتين بنفس الاسم greet؟ 
    لأن let بتحترم غرفتها؛ العلبة الجديدة دي عايشة في الغرفة المقفولة، والعلبة القديمة عايشة بره في الشارع. 
    مفيش أي تعارض بينهم لأنهم في غرف مختلفة.
  - السحر هنا: بمجرد ما الكمبيوتر يخلص الكود ويخرج من القوس المقفول }، نسخة "Afternoon" 
    بتتبخر وتختفي للأبد! ومحدش بره الغرفة شافها ولا عرف بوجودها.
  - الحركة دي برمجياً بنسميها "التظليل" (Shadowing)، يعني العلبة اللي جوه الغرفة دارت 
    وغطت على العلبة اللي بره مؤقتاً وهي جوه غرفتها بس.

----------------------------------------------------------------------------
الجزء الثاني: أنواع مصانع الدوال (Functions) — بالتفصيل الممل
----------------------------------------------------------------------------
تخيل إن الـ Functions دي هي "الماكينات" أو "المصانع الصغيرة" اللي جوه المدينة. 
إنت بتدي الماكينة مواد خام (مثلاً خشب وبلاستيك)، والماكينة بتشتغل وتطلعلك في الآخر لعبة جاهزة!

في جافاسكريبت، عندنا 3 أنواع من الماكينات (المصانع) دي:

1. النوع الأول: Function Declaration (المصنع الأساسي اللي عليه يافطة منورة)
ده أقدم وأشهر نوع. مصنع مبني في نص المدينة وعليه يافطة كبيرة باسمه عشان أي حد يقدر ينادي عليه.

Code Example:
function add(a,b)
{
    let greet = "Morning"
    return a+b
}

شرح السطور:
• function: دي الكلمة السحرية اللي بنقول بيها للكمبيوتر: "يا كمبيوتر، إحنا هنبني مصنع جديد دلوقتي!".
• add: ده "اسم" المصنع، يافطة كبيرة مكتوب عليها (جمع). سميناه كده عشان أي وقت نحب نجمع أرقام، ننده على اسم المصنع ده.
• (a, b): دي "أبواب استلام المواد الخام". المصنع ده بيستقبل حاجتين (رقمين)، سميناهم a و b عشان نسهل على نفسنا.
• { و }: الأقواس دي هي حيطان المصنع. أي حاجة جواها دي أسرار المصنع ومحدش بره يقدر يشوفها.
• let greet = "Morning": جوه المصنع، العمال جابوا يافطة صغيرة (متغير) كتبوا عليها "Morning". اليافطة دي محدش هيشوفها خالص بره المصنع (محبوسة جوه سكوب المصنع).
• return a+b: دي "بوابة خروج الألعاب". كلمة return معناها "رَجَّع أو طلّع النتيجة". هنا بنقول للمصنع: اجمع الـ a على الـ b، وطلّع لنا الناتج النهائي بره المصنع للي طلبه.

عشان نشغل المصنع ده بنكتب:
let sum = add(2,3)
هنا نادينا على المصنع اللي اسمه add، ورمينا جواه من الباب رقم 2 ورقم 3. المصنع جمعهم وطلّع 5، وقمنا مخزنين الـ 5 دي جوه علبة اسمها sum.


2. النوع التاني: Function Expression (المصنع المتخفي جوه صندوق)
هنا إحنا بنعمل مصنع، بس من غير اسم ولا يافطة (مجهول أو Anonymous). بدل ما نعلق يافطة عليه، إحنا بنمسك المصنع كله ونخبيه جوه "علبة" (متغير).

Code Example:
let sumOfIntegers = function(c,d)
{
    return c+d
}

شرح السطور:
• let sumOfIntegers =: جبنا علبة كبيرة وكتبنا عليها من بره sumOfIntegers (مجموع الأرقام الصحيحة).
• function(c,d): بنينا المصنع جوه العلبة! لاحظ إن مفيش اسم بعد كلمة function زي المرة اللي فاتت. المصنع ده مجهول، بيستقبل مادتين خام سميناهم c و d.
• { return c+d }: حيطان المصنع بتعمل نفس الشغل، بتجمع c و d وتطلّع النتيجة لبره.

ليه بنعمل كده؟ كأننا عملنا مصنع "محمول" نقدر نشيله جوه العلبة ونديه لأي حد تاني في الكود بسهولة. لو عايزين نشغله، بننادي على اسم العلبة نفسها ونقولها: sumOfIntegers(4, 5).


3. النوع التالت: Arrow Function (المصنع الليزر السريع 🚀)
ده بقى أحدث مصنع نزل في عالم البرمجة! مصنع ذكي جداً وسريع جداً، شالوا منه كل الحاجات القديمة وبقى بيشتغل بالليزر (السهم).

Code Example:
let sumOfNumbers = (c,d) => c+d

بص الكود صغر وبقى سطر واحد إزاي! تعال نشرح السحر ده:
• let sumOfNumbers =: جبنا علبة تانية سميناها sumOfNumbers عشان نشيل المصنع فيها.
• (c,d): أبواب الاستلام مباشرة! رمينا كلمة function القديمة خالص في الزبالة وبدأنا بالأقواس على طول. هنستقبل مادتين c و d.
• =>: ده بقى "السهم السحري" (Arrow). السهم ده بيقول للكمبيوتر: "خد المواد الخام اللي على شمالي، واعمل فيها العملية اللي على يميني".
• c+d: دي العملية نفسها.

فين الأقواس المتعرجة {} وفين كلمة return؟
المصنع الذكي ده لما بيكون بيعمل خطوة واحدة بس (زي الجمع)، مش بيحتاج حيطان ولا بيحتاج نقوله return. هو بيفهم لوحده إنه لازم يجمعهم ويطلع النتيجة أوتوماتيك لبره في أسرع وقت!.

عشان نشغل المصنع ده بنكتب:
console.log(sumOfNumbers(2,3))
هنا نادينا على المصنع الصاروخ sumOfNumbers، اديناله 2 و 3، وفي نفس اللحظة طلع لنا 5، وقمنا طابعينها على الشاشة بـ console.log.
*/

// BLOCK 1: the rules, written as a comment cheat-sheet
// ----------------------------------------------------------------------------
//block of code 
//var - global level/functional
//let global level/block level {}
//const -
// EN: These four lines are Rahul's own cheat-sheet, summarizing the
//     scope rules: "var" ignores curly braces {} completely — it only
//     cares about function-level or global-level boundaries. "let" and
//     "const" respect EVERY pair of curly braces as its own private
//     room.

//const greet="Evening"
//greet="Morning" //TypeError: Assignment to constant variable.
// BLOCK 2: a brand-new, separate "greet" hiding inside an if-block
///if(1==1)
//{
//    let greet="Afternoon"
//    console.log(greet) //Afternoon,only can be executed within the Brackets
//}
//console.log(greet) // Evening,Because now we are outside the Brackets
// BLOCK 3: a third, also-separate "greet" hiding inside a function
//function add(a,b)
//{
    //let greet="Morning"
    //console.log(greet) //Morning
    //return a+b 
//} //Declaration Function
//ده أقدم وأشهر نوع. مصنع مبني في نص المدينة وعليه يافطة كبيرة باسمه عشان أي حد يقدر ينادي عليه.
/*
شرح السطور:
• function: دي الكلمة السحرية اللي بنقول بيها للكمبيوتر: "يا كمبيوتر، إحنا هنبني مصنع جديد دلوقتي!".
• add: ده "اسم" المصنع، يافطة كبيرة مكتوب عليها (جمع). سميناه كده عشان أي وقت نحب نجمع أرقام، ننده على اسم المصنع ده.
• (a, b): دي "أبواب استلام المواد الخام". المصنع ده بيستقبل حاجتين (رقمين)، سميناهم a و b عشان نسهل على نفسنا.
• { و }: الأقواس دي هي حيطان المصنع. أي حاجة جواها دي أسرار المصنع ومحدش بره يقدر يشوفها.
• let greet = "Morning": جوه المصنع، العمال جابوا يافطة صغيرة (متغير) كتبوا عليها "Morning". اليافطة دي محدش هيشوفها خالص بره المصنع (محبوسة جوه سكوب المصنع).
• return a+b: دي "بوابة خروج الألعاب". كلمة return معناها "رَجَّع أو طلّع النتيجة". هنا بنقول للمصنع: اجمع الـ a على الـ b، وطلّع لنا الناتج النهائي بره المصنع للي طلبه.

عشان نشغل المصنع ده بنكتب:
let sum = add(2,3)
هنا نادينا على المصنع اللي اسمه add، ورمينا جواه من الباب رقم 2 ورقم 3. المصنع جمعهم وطلّع 5، وقمنا مخزنين الـ 5 دي جوه علبة اسمها sum.
*/
 //EN: function add(a,b){ ... } DEFINES a function — it does NOT run yet.
//     It just sits there, ready to be called later. Functions create
//     their own private room too: the "greet" inside here ("Morning") is
//     yet another isolated variable, completely invisible from outside.
//     "return a+b" is the function's answer — whatever the function is
//     handing back to whoever called it.
//let sum=add(2,3)
//console.log(sum)
//console.log(greet) //Evening
// 💡 INSPECTOR'S NOTE / ملاحظة المفتش:
// EN: This whole file exists to prove one thing: a variable declared
//     with let or const inside {} braces — whether it's an if-block or a
//     function — NEVER leaks out, even if it shares the exact same name
//     as something outside. This is called SHADOWING.

// BLOCK 4:  anonymous function expressions vs arrow functions

/*
2. النوع التاني: Function Expression (المصنع المتخفي جوه صندوق)
هنا إحنا بنعمل مصنع، بس من غير اسم ولا يافطة (مجهول أو Anonymous). بدل ما نعلق يافطة عليه، إحنا بنمسك المصنع كله ونخبيه جوه "علبة" (متغير).

Code Example:
let sumOfIntegers = function(c,d)
{
    return c+d
}

شرح السطور:
• let sumOfIntegers =: جبنا علبة كبيرة وكتبنا عليها من بره sumOfIntegers (مجموع الأرقام الصحيحة).
• function(c,d): بنينا المصنع جوه العلبة! لاحظ إن مفيش اسم بعد كلمة function زي المرة اللي فاتت. المصنع ده مجهول، بيستقبل مادتين خام سميناهم c و d.
• { return c+d }: حيطان المصنع بتعمل نفس الشغل، بتجمع c و d وتطلّع النتيجة لبره.

ليه بنعمل كده؟ كأننا عملنا مصنع "محمول" نقدر نشيله جوه العلبة ونديه لأي حد تاني في الكود بسهولة. لو عايزين نشغله، بننادي على اسم العلبة نفسها ونقولها: sumOfIntegers(4, 5).


3. النوع التالت: Arrow Function (المصنع الليزر السريع 🚀)
ده بقى أحدث مصنع نزل في عالم البرمجة! مصنع ذكي جداً وسريع جداً، شالوا منه كل الحاجات القديمة وبقى بيشتغل بالليزر (السهم).

Code Example:
let sumOfNumbers = (c,d) => c+d

بص الكود صغر وبقى سطر واحد إزاي! تعال نشرح السحر ده:
• let sumOfNumbers =: جبنا علبة تانية سميناها sumOfNumbers عشان نشيل المصنع فيها.
• (c,d): أبواب الاستلام مباشرة! رمينا كلمة function القديمة خالص في الزبالة وبدأنا بالأقواس على طول. هنستقبل مادتين c و d.
• =>: ده بقى "السهم السحري" (Arrow). السهم ده بيقول للكمبيوتر: "خد المواد الخام اللي على شمالي، واعمل فيها العملية اللي على يميني".
• c+d: دي العملية نفسها.

فين الأقواس المتعرجة {} وفين كلمة return؟
المصنع الذكي ده لما بيكون بيعمل خطوة واحدة بس (زي الجمع)، مش بيحتاج حيطان ولا بيحتاج نقوله return. هو بيفهم لوحده إنه لازم يجمعهم ويطلع النتيجة أوتوماتيك لبره في أسرع وقت!.

عشان نشغل المصنع ده بنكتب:
console.log(sumOfNumbers(2,3))
هنا نادينا على المصنع الصاروخ sumOfNumbers، اديناله 2 و 3، وفي نفس اللحظة طلع لنا 5، وقمنا طابعينها على الشاشة بـ console.log.
*/
//Function Expression:
/*
let sumOfIntegers=function(c,d)
{
    return(c+d)
}
console.log(sumOfIntegers(4,5)) //9

//Arrow Function:
sumOfNumbers=(c,d)=>(c+d)
console.log(sumOfNumbers(8,8)) //16
*/

// ============================================================================
// basics5.js — LEVEL 04: STRINGS & MODULES — THE EVIDENCE LOG
//
// EN: A string is evidence: every character sits at an exact, numbered
//     position, and your job is to slice, search, and verify pieces of
//     text precisely. This file also gives you your first real taste of
//     importing code from another file.
// SETUP: this file MUST sit in the same folder as basics7.js, because of
//        the require('./basics7') line below — that path means "look for
//        basics7.js right next to me."
const Person=require("./basics7")
// EN: require() is Node.js's way of borrowing code written in another
//     file. This pulls in the Person CLASS defined inside basics7.js
//     (fully explained in Level 06). One important side-effect: the
//     moment this line runs, every top-level line inside basics7.js
//     also runs (in that file's case, that's just the class definition
//     itself — no visible output, since its test code is commented out).
// ----------------------------------------------------------------------------
// BLOCK 1: string basics — length, slice, single-character access
let day="tuesday "  //take care of space after the word 
console.log(day.length)
let subDay=day.slice(0,4)
console.log(subDay) //tues
console.log(day[1]) //u
//tue   day 
// EN: This lone comment is Rahul's scratch note, hinting at what's about
//     to happen — splitting the word into "tue" and "day" pieces.
// ----------------------------------------------------------------------------
// BLOCK 2: split() and trim()
let splitDay=day.split("s")
console.log(splitDay) //["tue","day "]
// EN: .split("s") chops the string apart everywhere an "s" appears,
//     THROWS AWAY the "s" itself, and hands back an ARRAY of the
//     leftover pieces. "tuesday " has exactly ONE "s" (right after
//     "tue"), so it splits into TWO pieces: ["tue", "day "] — and
//     notice that hidden trailing space rides along into the SECOND
//     piece.
console.log(splitDay[1].length) //4 ["day "]
console.log(splitDay.length) //2
console.log(splitDay[1].trim()) //day,space in day was removed
console.log(splitDay[1].trim().length) //3
// EN: .trim() strips whitespace off BOTH ends of a string. "day " loses
//     its trailing space, becoming "day" — 3 characters. PRINTS: 3
// AR: .trim() بتشيل أي فراغات من بداية ونهاية النص. "day " بتفقد
//     مسافتها الآخرانية وتبقى "day" — 3 حروف. الناتج: 3

// 💡 INSPECTOR'S NOTE / ملاحظة المفتش:
// EN: This is exactly why you will ALWAYS .trim() text you scrape off a
//     real webpage in Playwright. Invisible spaces hiding in HTML will
//     silently break an assertion that "should" be passing.
// ----------------------------------------------------------------------------
// BLOCK 3: parseInt() — converting text into real numbers
let date="23"
let nextDate="27"
let diff=parseInt(nextDate)-parseInt(date)
console.log(diff) //4 int
// EN: parseInt() converts text into a REAL number, so subtraction
//     actually works correctly — you cannot meaningfully subtract two
//     pieces of text from each other. 27 - 23 = 4. PRINTS: 4
let diffAsText = diff.toString() 
console.log(typeof(diffAsText)) //string
console.log(typeof(diff)) //number
// EN: .toString() converts the number BACK into a string — but the
//     result is never stored anywhere (no "let x = " in front of it).
// BLOCK 4: string concatenation, and indexOf() with a start position
let newQuote=day+"is Funday day"
console.log(newQuote) //tuesday is Funday day
// EN: "+" between two strings means CONCATENATION — gluing them
//     together. Because "day" still carries its hidden trailing space,
//     gluing it to "is Funday day" naturally forms a clean sentence
//     (that hidden space saved us from getting "tuesdayis"!).
//     PRINTS: tuesday is Funday day
let val=newQuote.indexOf("day",5)
console.log(val) //14
//index [0]=t,[1]=u,[2]=e,[3]=s,[4]=d,[5]=a,[6]=y,[7]=space,[8]=i,[9]=s,[10]=space,[11]=F,[12]=u,[13]=n,[14]=d
// EN: .indexOf("day", 5) searches for "day" but tells JS "don't even
//     bother looking before character #5." Index map of the full
//     string "tuesday is Funday day":
//       0:t 1:u 2:e 3:s 4:d 5:a 6:y 7:(space) 8:i 9:s 10:(space)
//       11:F 12:u 13:n 14:d 15:a 16:y 17:(space) 18:d 19:a 20:y
//     There's already a "day" hiding inside "tuesday" itself, starting
//     at index 4 — but that's BEFORE index 5, so it gets skipped. The
//     next real match sits inside "Funday," starting at index 14.
//     PRINTS: 14
// BLOCK 5: a loop that counts EVERY occurrence of "day"
let count=0
let value=newQuote.indexOf("day")
while(value!==-1)
{
    count++
    value=newQuote.indexOf("day",value+1)

}
console.log(count) //3
//"Start at zero. Look once. While you keep finding something: count it,
//  then look again starting one step past where you just were."

// ============================================================
// PATTERN: "Count every occurrence"
// RECIPE: Start at zero. Look once.
//         While you keep finding something: count it,
//         then look again ONE STEP PAST where you just were.
// DANGER: forget "+1" on the re-search = infinite loop forever.
// ============================================================
/*
let count = 0
let value = TEXT.indexOf(TARGET)

while (value !== -1)
{
    count++
    value = TEXT.indexOf(TARGET, value + 1)
}

console.log(count)
*/
// BLOCK 6: actually using the imported Person class
// EN: "new Person(...)" builds a real object using the blueprint
//     borrowed at the top of this file const Person=require("./basics7")
// (full details in basics7.js /
//     Level 06). Here, it creates a person with firstName "Chris" and
//     lastName "Edward".
/*
Think of Person as a cookie cutter, and person as the actual cookie you just made with it.
The cookie cutter (Person) is the tool — there's only one of it, defined once in basics7.js.
Every time you write new Person(...), you press the cutter into dough and get a fresh cookie.
person is just the plate you chose to put THIS particular cookie on.
*/
//let person=new Person("Chris","Edward")
//console.log(person.fullName()) //ChrisEdward,undefined
//from basics7:
// fullName()
  //  {
  //      console.log(this.firstName+this.lastName)
  //  }
//fullname() function HAS NO RETURN STATEMENT
//The rule to keep forever: a function with no return always hands back undefined.
//  If you wrap that function's call inside another console.log,
//  you'll always get an extra undefined line, no matter what the function printed internally.

// basics6.js — LEVEL 05: OBJECTS — THE BUG REPORT FORM
// EN: An object is a labeled record — just like a bug report form with
//     fields for title, severity, and reporter, all bundled under one
//     ticket.
let person1={
    firstName:"Tim",
    lastName:"Joe",
    age:24,
    fullName:function() //it's a function expression
    {
        console.log(this.firstName+this.lastName) //method
        //this:person1
    }
}
console.log(person1.fullName()) //TimJoe,Undefined
// EN: Same trap you met in Level 04! person.fullName() prints "TimJoe"
//     from INSIDE the function, then — since there's no return — the
//     OUTER console.log prints "undefined" right after. Two lines
//     again. Recognizing this pattern on sight now means you've truly
//     understood it.
/* ======================================================
  MEMORY TRICK: THE ID CARD (OBJECT)
======================================================
  { }       -> Creates the ID card.
  KEY       -> The label on the card (e.g., "firstName").
  VALUE     -> The real info written on it (e.g., "Tim").
  
  METHOD    -> ACTION! If a VALUE is a function, it gets 
               a special name: "Method". 
  this      -> Means "ME!" or "The owner of THIS card." 
               (e.g., this.firstName = "my own first name").
======================================================
Show me the rule in action — just look left of the dot
person.fullName()
//↑
//this = person   (because "person" sits left of the dot here)
tim.speak()
//↑
//this = tim   (because "tim" sits left of the dot here)
joe.speak()
//↑
//this = joe   (because "joe" sits left of the dot here)
*/
//that means in our code this refers to person

// BLOCK 2: dot notation vs bracket notation
console.log(person1.lastName) //joe
console.log(person1["lastName"]) //joe
// EN: Two completely different ways to read the EXACT same property —
//     dot notation and bracket notation. Both print "Joe". Bracket
//     notation becomes essential the moment a property name is stored
//     INSIDE a variable, which is exactly what happens at the very end
//     of this file.
// BLOCK 3: reassigning and adding new properties on the fly
person1.firstName="Tim Dane"
console.log(person1.firstName) //Tim Dane
/*
let / const / var are only needed when you're creating a brand-new named box for the very first time.
person1 already exists — it was created earlier with:
let person1 = { firstName: 'Tim', lastName: 'Joe' }
person.firstName = 'Tim Dane' is not making a new box. 
It's reaching inside the box that already exists, and changing one of its compartments (firstName). No new box, no let needed.
*/
person1.gender="male"
console.log(person1)
/*
{
  firstName: 'Tim Dane',
  lastName: 'Joe',
  age: 24,
  fullName: [Function: fullName],
  gender: 'male'
}
  */
// BLOCK 4: delete and the "in" operator
delete person1.gender
console.log(person1)
/*
{
  firstName: 'Tim Dane',
  lastName: 'Joe',
  age: 24,
  fullName: [Function: fullName]
}
*/
console.log("gender" in person1)  //false
// BLOCK 5: for...in — looping over every property name
//print all the values of the javascript object
// EN: "for...in" walks through every property NAME (key) in the object,
//     one at a time — first pass key="firstName", then "lastName", then
//     "age", then "fullName". Inside the loop, person[key] is exactly
//     why bracket notation exists: "key" is a VARIABLE holding text, and
//     dot notation can NEVER use a variable like that (person.key would
//     literally search for a property actually named "key", which
//     doesn't exist).
for (let key in person1)
{
    console.log(person1[key])
}
/*
Tim Dane
Joe
24
[Function: fullName]
*/
//     FUNCTION ITSELF (no parentheses, so it is NEVER actually called
//     this time). Node will simply print the function's identity,
//     something like [Function: fullName], instead of running it.

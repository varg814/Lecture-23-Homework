// 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის reduce-ის გამოყენებით.

let arr1 = [1, 2, 3];

let sum = arr1.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);

// 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.

let arr2 = [1, 5, 2, 3, 45];

let highest = arr2.reduce((acc, cur) => {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
});

console.log(highest);

// 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.

let arr3 = ["abc", "def", "ghi"];

let arr3Changed = arr3.reduce((acc, cur) => {
  return `${acc} ${cur}`;
});

console.log(arr3Changed);

// 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.

let arr4 = [1, 2, 3];

let mult = arr4.reduce((acc, cur) => {
  return acc * cur;
}, 1);

console.log(mult);

// 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.

let arr5 = [1, 2, 3];

let diff = arr1.reduce((acc, cur) => {
  return acc - cur;
}, 0);

console.log(diff);

// 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.

let arr6 = [1, 2, 3];

let arr6Changed = arr6.map((num) => {
  return num * 2;
});

console.log(arr6Changed);

// 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით გადააქცევს map-ის გამოყენებით.

let arr7 = ["AFLKNklnjKKDNLkn", "HJBFJBHSBDlllll"];

let arr7Changed = arr7.map((string) => {
  return string.toLowerCase();
});

console.log(arr7Changed);

// 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი. map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.

let arr8 = ["p", "div", "h1"];
let text = "TEXT";

arr8.map((index) => {
  let element = document.createElement(index);
  element.innerText = text;
  document.body.appendChild(element);
});

// 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.

let arr9 = [1, 2, 3];

let arr9Changed = arr9.map((num) => {
  return num * num;
});

console.log(arr9Changed);

// 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.

let arr10 = [
  { element: document.getElementById("element"), text: "textttt" },
  { element: document.getElementById("element1"), text: "textttt" },
  { element: document.getElementById("element2"), text: "textttt" },
];

arr10.forEach((item) => {
  item.element.innerText = item.text;
});

// 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ ქულას დაუმატე 5 ქულა.

let students = [
  { student: "name1", score: 93 },
  { student: "name1", score: 93 },
  { student: "name1", score: 93 },
];

students.forEach((index) => {
  index.score += 5;
});
console.log(students);

// 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.

let arr11 = [1, 2, 3, 4, 5];
for (let index = arr11.length - 1; index >= 0; index--) {
  console.log(arr11[index]);
}

// 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და ჩასვი ისინი გვერდზე for-ის გამოყენებით.

let arr12 = ["div", "div", "div"];
for (let index = 0; index < arr12.length; index++) {
  let div = document.createElement(arr12[index]);
  document.body.appendChild(div);
}

// 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
console.log("//////////////////////////////////////////////////////");

let arr13 = [1, 2, 3, 4, 5];

for (i = 0; i < arr13.length; i++) {
  for (j = 1; j <= 10; j++) {
    console.log(`${arr13[i]} x ${j} = ${arr13[i] * j}`);
  }
}

// 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.

let arr14 = [1, 2, 30, 4, 5, 60];
let arr14Changed = arr14.filter((num) => {
  return num > 10;
});

arr14Changed.map((num) => {
  console.log(num);
});

// 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი. filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც აქვთ კონკრეტული CSS კლასი.
let arr15 = [];

let p = document.createElement("p");
p.classList.add("classlist1");
arr15.push(p);
let h1 = document.createElement("h1");
h1.classList.add("classlist2");
arr15.push(h1);
let div = document.createElement("div");
div.classList.add("classlist1");
arr15.push(div);

let arr15Changed = arr15.filter((element) => {
  return element.classList.contains("classlist1");
});

console.log(arr15Changed);

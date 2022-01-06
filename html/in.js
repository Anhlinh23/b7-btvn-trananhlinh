//* bài 1

// let txt = "Hello world";
// let x = txt.length;
// alert(x);

// let txt = "We are \"Vikings\"";
// alert(txt);

// let str1 = "Hello";
// let str2 = " World!";
// alert(str1 + str2);

// let txt = "Hello World";
// txt = txt.toUpperCase();
// alert(txt);

// let txt = "hEllO wOrLd";
// txt = txt.toLowerCase();
// alert(txt);

// let txt = "I can eat bananas all day";
// let x = txt.slice(10,17);
// alert(x);

// let txt = "Hello World!";
// txt = txt.replace("Hello", "Welcome");
// alert(txt);

//* bài 2 
//? Cho string a = "Hello", string b = "MindX"
//? Tìm hiểu các method (hàm) có sẵn của js để trả lời cho các bài toán sau:
//? - log ra kí tự thứ 2 trong string a
//? - tạo chuỗi c bằng cách nối a và b
//? - Check xem bắt đầu chuỗi b có phải là chữ M hay không?
//? - Check xem bắt đầu chuỗi b có phải là chữ m hay không?
//? - Check xem kết thúc chuỗi b có phải là chữ x hay không?
//? - Check xem kết thúc chuỗi b có phải là chữ X hay không?
//? - Check chuỗi a xem có chứa kí tự "a" hay không?
//? - Check chuỗi a xem có chứa kí tự "e" hay không?
//? - Check chuỗi a xem kí tự "l" ở vị trí số mấy?
//? - Check chuỗi a xem kí tự "l" CUỐI CÙNG ở vị trí số mấy?
//? - Độ dài a là bao nhiêu ký tự?
//? - Tạo chuỗi "ll" từ string a
//? - viết hoa tất cả các chữ trong string a
//? - viết thường tất cả các chữ trong string a
//? - Thay đổi nội dung string a từ "Hello" thành "Hi"
//? - thêm các ký tự khoảng trắng "    " vào đầu, cuối string a
//? - sau khi thêm các ký tự khoảng trắng, lần lượt dùng hàm trimStart(), trimEnd(), trim() và in ra kết quả 

let a = "Hello";
let b = "MindX";
let stra = a.slice(1,2);
console.log(stra);
let c = `${a} ${b}`;
console.log(c);
console.log(b.slice(0,1) === "M");

console.log(b.slice(0,1) === "m");
console.log(b.slice(4,5) === "X");
console.log(b.slice(4,5) === "x");
console.log(a.includes("a"));
console.log(a.includes("e"));
let pos = a.lastIndexOf("l");
console.log(pos);
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.replace("Hello","Hi"));
console.log(a.replace("", " ").trim())
let a1 = ` ${a} `;
console.log(a1.trimStart());
console.log(a1.trimEnd());
console.log(a1.trim());
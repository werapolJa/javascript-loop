// Exercise #2: Sum the Numbers
let productPrices = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here

// สมมุติว่าเรามี Variable ตั้งต้น productPrices ซึ่งบรรจุราคาสินค้าแต่ละชิ้นในตะกร้าสินค้า ดังนี้ [10, 20, 30, 40, 50]

// ให้เขียนโปรแกรมในการหายอดรวมของราคาสินค้าทุกชิ้นที่อยู่ในตะกร้าสินค้า

// เมื่อโปรแกรมทำงานสำเร็จ ควรจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// 150

for (let index = 0; index < productPrices.length; index++) {
  total += productPrices[index];
}
console.log(total);

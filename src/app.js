import {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
  calculatePay
} from "./helpers.js";

const incrButton = document.querySelector("#incr");
const decrButton = document.querySelector("#decr");
const qtyInput = document.querySelector("#qty");
const subtotalText = document.querySelector("#subtotal");
const price = document.querySelector("#price");
const discountCode = document.querySelector("#code");
const confirmButton = document.querySelector("#confirmButton");
const backbutton = document.querySelector("#backbutton");
const moneyText = document.querySelector("#money");

incrButton.addEventListener("click", () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

decrButton.addEventListener("click", () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${recalculateSubtotal(price.value, qtyInput.value)}`;
});

confirmButton.addEventListener("click", () => {
  let subtotal = recalculateSubtotal(price.value, qtyInput.value);
  let total = calculateDiscount(subtotal, discountCode.value);
  subtotalText.textContent = `Rp. ${total}`;
});

backbutton.addEventListener("click", () => {
  let pay = calculatePay(pay.value, subtotal.value);
  moneyText.textContent = `Rp. ${calculatePay(pay.value, subtotal.value)}`;
});
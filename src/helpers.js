const incrementQty = (qty) => parseInt(qty) + 1;

const decrementQty = (qty) => {
  if (parseInt(qty) - 1 == 0) {
    return 1;
  } else {
    return parseInt(qty) - 1;
  }
};

const recalculateSubtotal = (price, qty) => {
  return parseInt(price) * parseInt(qty);
};

const calculateDiscount = (subtotal, code) => {
  if (code === "KODE25") {
    discount = subtotal - subtotal * 0.25;
    return discount;
  } else {
    return subtotal;
  }
};

const calculatePay = (pay, subtotal) => {
    return pay - subtotal;
  };

module.exports = {
  incrementQty,
  decrementQty,
  recalculateSubtotal,
  calculateDiscount,
  calculatePay
};

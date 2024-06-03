const isOver100 = true;
const isPremiumMember = false;
const totalCartPrice = 500;
if (isOver100 == true || isPremiumMember == true) {
  console.log("Free shipping!");
} else {
  const shippingCost = 10;
  console.log(`Shipping cost: $${shippingCost}`);
}

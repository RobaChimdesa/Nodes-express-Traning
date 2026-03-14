import { orderData } from "./mockData.js";
// with disctructering

const { orderId, foodItem, ...restofData } = orderData;
export function tesrestofObject() {
  console.log("Order ID: " + orderId);
  console.log("Food Item: " + foodItem);
  console.log("Rest of the data: ", restofData);
}

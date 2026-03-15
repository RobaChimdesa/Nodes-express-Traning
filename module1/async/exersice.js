// Exersice for module1 / 1.5

// Exc 1
import { userData, users, posts, orders, notifications } from "../mockData.js";

// Create an Async function to get User Data
async function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ userData });
      } else {
        reject(new Error("Failed to fetch"));
      }
    }, 1000);
  });
}
// Create an Async function to get Order Data
async function fetchOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      const result = orders.filter((order) => order.userId == userId);
      if (success) {
        resolve(result);
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 1000);
  });
}
// Create an Aync function to get calculate order
async function calculateTotal(orders) {
  const sum = orders.reduce((sum, order) => sum + order.price, 0);

  return sum;
}

// Create a Async main function the calls this three functions and return user , order , totalOrder seq

export async function processUser(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(userId);
    const total = await calculateTotal(orders);
    console.log("these is the data");
    console.log(user, orders, total);
  } catch (err) {
    console.error(err);
  }
}

// Exc 2
// Create a Async function the get list of users
// Create a Async function the get list of posts

async function fetchPosts(userId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      const result = posts.filter((order) => order.userId == userId);
      if (success) {
        resolve(result);
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 1000);
  });
}
// Create a Async function the get list of notifications



async function fetchNotifications(userId) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      const result = notifications.filter((order) => order.userId == userId);
      if (success) {
        resolve(result);
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 1000);
  });
}
// Create a Async main funciton to get users, posts and notification in parraly
// ==> Hint - User Promise.all
export async function loadDashboard(userId) {
  // Run in parallel, not sequentially

  const [user, posts, notifications] = await Promise.all([
    fetchUser(userId),
    fetchPosts(userId),
    fetchNotifications(userId),
  ]);

  console.log("the data is ");
  console.log(user, posts, notifications);
  return { user, posts, notifications };
}

//Req
// 1. User async / await
// 2. Try / catch / finally [main functions]
// 3. Use setTimeout to simulate the delay
// 4. User promise to simulate data coming from API

// solution for  Exe1

// solution for exe2

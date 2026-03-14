
// Exc 1
// Create an Async function to get User Data
// Create an Async function to get Order Data
// Create an Aync function to get calculate order
// Create a Async main function the calls this three functions and return user , order , totalOrder seq

// Exc 2
// Create a Async function the get list of users
// Create a Async function the get list of posts
// Create a Async function the get list of notifications
// Create a Async main funciton to get users, posts and notification in parraly
// ==> Hint - User Promise.all

//Req
// 1. User async / await
// 2. Try / catch / finally [main functions]
// 3. Use setTimeout to simulate the delay
// 4. User promise to simulate data coming from API

import {
  userData,
  foodOrder,
  orders,
  users,
  posts,
  notifications,
} from "../mockData.js";

// Exc 1
// Create an Async function to get User Data
async function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve(userData);
      } else {
        reject(new Error("Failed to fetch user data"));
      }
    }, 1000);
  });
}
// Create an Async function to get Order Data
async function fetchOrders(userId) {
  //Order : Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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
// Create an Async function to get calculate order
async function calculateTotal(orders) {
  //Price : Various Looops : map , forEach, forloop, reduce
  // To get the price paid
  const sum = orders.reduce((a, b) => a + b, 0);

  return sum;
}
// Create a Async main function the calls this three functions and return user , order , totalOrder seq
export async function processUser(userId) {
  try {
    const user = await fetchUser(userId);
    const orders = await fetchOrders(user.id);
    const total = await calculateTotal(orders);

    console.log("This is the Data");
    console.log(user, orders, total);
  } catch (err) {
    console.error(err);
  }
}

// Exc 2
// Create a Async function the get list of
// Create a Async function the get list of posts
async function fetchPosts(userId) {
  //Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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
  //Filter : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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

  console.log("This is the Data with promist all");
  console.log(user, posts, notifications);

  return { user, posts, notifications };
}

//Req
// 1. User async / await
// 2. Try / catch / finally [main functions]
// 3. Use setTimeout to simulate the delay
// 4. User promise to simulate data coming from API

async function getuserData(id) {
  try {
    const user = await fetchUser(id);
    const orders = await fetchOrders(id);
    const total = await calculateTotal(orders);
    setTimeout(() => {
    console.log("This is the Data");
    console.log(user, orders, total);
    },1000);
  } catch (err) {
    console.log(err.message);
  }
}

async function getDashboardData(id) {

    try {
    const [user, posts, notifications] = await Promise.all([
      fetchUser(id),
      fetchPosts(id),
      fetchNotifications(id),
    ]);
  } catch (err) {
    console.log(err.message);
  }
  
}


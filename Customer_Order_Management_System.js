//Task 1: Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Espresso', price: 3, quantity: 25},
    { name: 'Latte', price: 4, quantity: 50},
    { name: 'Cold Brew', price: 5, quantity: 50},
    { name: 'Beans', price: 7, quantity: 75}
  ];
  //array for inventory items

//Task 2: Create an Orders Array of Order Objects

  const orders = []; //empty array to hold orders


  //Task 3: Create a Function to Place an Order

  function placeOrder(customerName, orderedItems) {
    let outOfStock = false;

    orderedItems.forEach(item => {
        const product = inventory.find(product => product.name === item.name);
        if (!product) {
            console.log(`Error: Product ${item.name} does not exist in the inventory.`);
            outOfStock = true;
        }
    });
    if (outOfStock) return; 
    //above function checks to see if an item exists in our inventory
    //if it does not it returns the error code and stops the order

    orderedItems.forEach(item => {
        const product = inventory.find(product => product.name === item.name);
        product.quantity -= item.quantity
    });
    //this function processes an order by subtracting how much is ordered by the total amount
    //of items
    const newOrder = {
      customerName: customerName,
      items: orderedItems,
      status: 'Pending'
    };
    orders.push(newOrder); //pushes prder to order array
    console.log(`Order placed for ${customerName}.`); //confirms order has been placed


  };

  //Task 4: Create a Function to Calculate Total for an Order

  function calculateOrderTotal(order) {
    let total = 0;

    order.items.forEach(item => {
        const product = inventory.find(product => product.name === item.name);
        if (product) {
            total += item.quantity * product.price; //equation to calculate order total
        } else {
            console.log(`Error: Product ${item.name} not found in inventory.`); //error code for item not found
        }

    });

    return total;

  };

//Task 5: Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    const order =  orders.find(order => order.customerName === customerName);

    if (order) {
        order.status = 'Completed';
        console.log(`Order for ${customerName} has been completed.`);
    } else {
        console.log(`Error: No order found for ${customerName}.`);
    }

};

const totalCost = calculateOrderTotal(orders[0]);
console.log(`Order placed for ${orders[0].customerName}. The total is: $${totalCost}`);

//Task 6: Create a Function to Check Pending Orders

function checkPendinOrders() {
console.log("Pending Orders:");

orders.forEach(order => {
if (order.status === "Pending") {
  console.log(`Customer: ${order.customerName}`);
  console.log("Order Details:");
  order.items.forEach(items => {
    console.log(`- ${item.name}, Quantity: ${item.quantity}`);
  });
  console.log(`Status: ${order.status}`);
}
});

};

//test orders:
placeOrder('Valerie', [
  {name: 'Latte', quantity: 1},
  {name: 'Cold Brew', quantity: 1}
]);

placeOrder('Emerson', [
  {name: 'Espresso', quantity: 1},
  {name: 'Beans', quantity: 2}
]);
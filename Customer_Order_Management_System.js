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

  };

  //Task 4: Create a Function to Calculate Total for an Order

  function calculateOrderTotal(customerName) {
    let total = 0;

    orders.items.forEach(item => {
        const product = inventory.find(product => product.name === item.name);
        if (product) {
            total += item.quantity * product.price; //equation to calculate order total
        } else {
            console.log(`Error: Product ${item.name} not found in inventory.`); //error code for item not found
        }

    });

    return total;

  };

  const newOrder = {
    customerName: customerName,
    items: orderedItems,
    status: 'Pending',
    totalPrice: totalCost,
  };
  orders.push(newOrder); //pushes the new order into the empty array "orders"

  console.log(`Order placed for ${customerName}. The Total is: $${totalCost}`); 
  //gives us confirmation that the order was made and what the total of the order is

  //test orders:
  placeOrder('Valerie', [
    {name: 'Latte', quantity: 1},
    {name: 'Cold Brew', quantity: 1}
  ]);

  placeOrder('Emerson', [
    {name: 'Espresso', quantity: 1},
    {name: 'Beams', quantity: 2}
  ]);

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

//Task 1: Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Espresso', price: 3, quantity: 25},
    { name: 'Latte', price: 4, quantity: 50},
    { name: 'Cold Brew', price: 5, quantity: 50},
    { name: 'Beans', price: 7, quantity: 75}
  ];
  //array for inventory items

//Task 2: Create an Orders Array of Order Objects

  const orders = [];


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
    



  };
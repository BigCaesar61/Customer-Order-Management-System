//Task 1: Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Espresso', price: 3, quantity: 25},
    { name: 'Latte', price: 4, quantity: 50},
    { name: 'Cold Brew', price: 5, quantity: 50},
    { name: 'Beans', price: 7, quantity: 75}
  ];
  //array for inventory items

//Task 2: Create an Orders Array of Order Objects

  const orders = [
    {
        customerName: 'Mike',
        items: [
            {name: 'Cold Brew', quantity: 2}
        ],
        status: 'Complete'
    },

    {
        customerName: 'Valerie',
        items: [
            {name: 'Latte', quantity: 1},
            {name: 'Beans', quantity: 1}
        ],
        status: 'Pending'
    },
    {
        customerName: 'Tom',
        items: [
            {name: 'Espresso', quantity: 1},
            {name: 'Latte', quantity: 1},
            {name: 'Cold Brew', quantity: 1}
        ],
        status: 'Complete'

    },
    {
        customerName: 'Tina',
        items: [
            {name: 'Latte', quantity: 1}
        ],
        status: 'Pending'


    }

  ];
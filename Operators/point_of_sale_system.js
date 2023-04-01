// Define store_inventory
const store_inventory = [
  { item: "Shampoo", quantity: 1, price_$: 3 },
  { item: "Soap", quantity: 0, price_$: 2 },
  { item: "Toothpaste", quantity: 2, price_$: 3 },
];

// Define new_deliveries
const new_deliveries = [
  { item: "Shampoo", quantity: 5, price_$: 4, inventory_index: 0 },
  { item: "Soap", quantity: 10, price_$: 2, inventory_index: 1 },
  { item: "Toothpaste", quantity: 10, price_$: 3, inventory_index: 2 },
];

// TASK 2:  Redeclare functions using a function expression
// Define processDeliveries function
const processDeliveries = function processDeliveries(items_obj) {
  const inventory_index = items_obj.inventory_index;

  store_inventory[inventory_index].quantity += items_obj.quantity;
  store_inventory[inventory_index].price_$ = items_obj.price_$;
};

// Use forEach and processDeliveries to update store_inventory
new_deliveries.forEach(processDeliveries);

// Print messages and objects
console.log("Delivered items have been added to the inventory.");
console.log("New inventory summary:");
console.log(store_inventory);

// TASK 3:  Convert to an arrow function
const productSummary = (items_obj) => {
  const item_id = items_obj.item.slice(0, 3).toLowerCase();
  let remarks = "good";
  if (items_obj.quantity < 10) {
    remarks = "item stock is low";
  }
  const message =
    `itemID: ${item_id} | ${items_obj.item} | stocks left: ${items_obj.quantity} | Remarks:`.concat(
      remarks
    );
  return message;
};

const report_summary = store_inventory.map(productSummary);
console.log(report_summary);

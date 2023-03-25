const ITEMS = [
  {name: "關節粉", price: 690},
  {name: "腸胃益生菌", price: 620},
  {name: "皮膚益生菌", price: 650},
  {name: "蔓越莓", price: 590},
  {name: "魚油", price: 790},
  {name: "新魚油", price: 790},
  {name: "葉黃素", price: 720},
  {name: "化毛粉", price: 380},
  {name: "免疫力", price: 750},
  {name: "爆毛粉", price: 550},
  {name: "化毛益生菌", price: 450},
  {name: "情緒保養粉", price: 520},
  {name: "腎臟專科保健粉", price: 690}
];
function init() {
  const fieldList = ITEMS.map((item, index) => {
    const id = `item${index + 1}`;
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = `${item.name} ($${item.price}):`
    const input = document.createElement("input");
    input.type = "number";
    input.id = id;
    input.name= id;
    input.min = "0";
    input.oninput = calculate;
    return [label, input, document.createElement("br")];
  });
  document.getElementById("form").prepend(...fieldList.flat());
}
init();
function calculate() {
  const itemsQuantities = ITEMS.map((_, index) => Number(document.getElementById(`item${index + 1}`).value));

  const totalItems = itemsQuantities.reduce((r, quantity) => r + quantity, 0);
  const totalPrice = itemsQuantities.reduce((r, quantity, index) => r + (quantity * ITEMS[index].price), 0);

  let discount = 0;
  if (totalItems >= 10) {
    discount = 0.7;
  } else if (totalItems >= 5) {
    discount = 0.8;
  } else if (totalItems >= 2) {
    discount = 0.85;
  } else if (totalItems >= 1) {
    discount = 0.9;
  }

  const discountedPrice = totalPrice * discount;

  document.getElementById('totalItems').textContent = `Total Items: ${totalItems}`;
  document.getElementById('totalPrice').textContent = `Total Price: $${discountedPrice.toFixed(2)}`;
}

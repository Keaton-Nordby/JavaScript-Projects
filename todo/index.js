let items = ["hello world", "123"];

const itemsDiv= document.getElementById("items");
const input = document.getElementById("itemInput");

function renderItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx); 

        button.style.padding = "5px";
        button.style.borderRadius = "8px";
        button.style.border = "none";
        button.style.marginLeft = "20px";
        button.style.cursor = "pointer";
        button.style.fontSize = "12px";
        button.style.backgroundColor = "#ff4d4f";
        button.style.color = "white";

        container.appendChild(text);
        container.appendChild(button);

        container.style.display = "flex";
        container.style.padding = "8px";
        container.style.justifyContent = "space-between"
        container.style.alignItems = "center"
        container.style.borderStyle = "none"
        container.style.borderRadius = "5px";
        container.style.backgroundColor = "#e6e6e6"
        container.style.color = "black";

        itemsDiv.appendChild(container);
    }
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    } 
    items.push(value);
    renderItems();
    input.value = "";
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems();
}

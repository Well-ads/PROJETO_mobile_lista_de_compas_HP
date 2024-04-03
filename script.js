document.addEventListener("DOMContentLoaded", function() {
    const addItemForm = document.getElementById("addItemForm");
    const itemInput = document.getElementById("itemInput");
    const quantityInput = document.getElementById("quantityInput");
    const priceInput = document.getElementById("priceInput");
    const shoppingList = document.getElementById("shoppingList");
    const totalValue = document.getElementById("totalValue");
    const txtBusca = document.getElementById("txtBusca");
    const btnBusca = document.getElementById("btnBusca");

    addItemForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const item = itemInput.value.trim();
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(priceInput.value);

        if (item !== "" && !isNaN(quantity) && quantity > 0 && !isNaN(price) && price > 0) {
            const total = quantity * price;
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${item}</td>
                <td>${quantity}</td>
                <td>${price.toFixed(2)}</td>
                <td>${total.toFixed(2)}</td>
                <td><button class="delete-btn">Excluir</button></td>
            `;
            shoppingList.querySelector("tbody").appendChild(newRow);

            updateTotal();
        }

        itemInput.value = "";
        quantityInput.value = "";
        priceInput.value = "";
    });

    function updateTotal() {
        const rows = shoppingList.querySelectorAll("tbody tr");
        let total = 0;
        rows.forEach(row => {
            total += parseFloat(row.children[3].textContent);
        });
        totalValue.textContent = total.toFixed(2);
    }

    shoppingList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
            updateTotal();
        }
    });

    btnBusca.addEventListener("click", function() {
        const termoBusca = txtBusca.value.trim().toLowerCase();
        const rows = shoppingList.querySelectorAll("tbody tr");
        rows.forEach(row => {
            const item = row.children[0].textContent.toLowerCase();
            if (item.includes(termoBusca)) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    });
});
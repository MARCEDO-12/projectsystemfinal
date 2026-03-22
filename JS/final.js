let products = JSON.parse(localStorage.getItem('products')) || [];

function renderTable(data = products) {
    let html = '';
    data.forEach((item, index) => {
        html += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editData(${index})" data-bs-toggle="modal" data-bs-target="#productModal">កែប្រែ</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">លុប</button>
                </td>
            </tr>`;
    });
    document.getElementById('dataTable').innerHTML = html;
}

// C: CREATE & U: UPDATE
function saveData() {
    const name = document.getElementById('pName').value;
    const price = document.getElementById('pPrice').value;
    const qty = document.getElementById('pQty').value;
    const index = document.getElementById('editIndex').value;

    if (name && price && qty) {
        const product = { name, price, qty };
        if (index === "") {
            products.push(product); // Create
        } else {
            products[index] = product; // Update
        }
        localStorage.setItem('products', JSON.stringify(products));
        renderTable();
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    } else {
        alert("សូមបំពេញព័ត៌មានឱ្យគ្រប់!");
    }
}

// D: DELETE
function deleteData(index) {
    if (confirm("តើអ្នកពិតជាចង់លុបទិន្នន័យនេះមែនទេ?")) {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderTable();
    }
}

// Prepare for Edit
function editData(index) {
    document.getElementById('modalTitle').innerText = "កែប្រែទិន្នន័យ";
    document.getElementById('editIndex').value = index;
    document.getElementById('pName').value = products[index].name;
    document.getElementById('pPrice').value = products[index].price;
    document.getElementById('pQty').value = products[index].qty;
}

// Search/Filter Function
function searchData() {
    const value = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(item => item.name.toLowerCase().includes(value));
    renderTable(filtered);
}

function clearForm() {
    document.getElementById('modalTitle').innerText = "បញ្ចូលទិន្នន័យថ្មី";
    document.getElementById('editIndex').value = "";
    document.getElementById('pName').value = "";
    document.getElementById('pPrice').value = "";
    document.getElementById('pQty').value = "";
}

renderTable();
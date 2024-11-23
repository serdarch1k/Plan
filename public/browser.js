console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                <span class="item-text">${item.reja}</span>
                <div>
                    <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                        O'zgartirish
                    </button>
                    <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">
                        O'chirish
                    </button>
                </div>
            </li>`;
}

let createField = document.getElementById("create-field");


//----- Add new item -----//

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Tradiotional emas MODERN Post bo'ldi
    axios.post("/create-item", {reja: createField.value})
    .then(response => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
        createField.value = "";
        createField.focus();
    })
    .catch(err => {
        console.log("Iltimos qayta urinib ko'ring!");
    });
});


//----- Delete and Edit (update) item -----//

document.addEventListener("click", function(e) {
    // delete oper
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            axios
            .post("/delete-item", { id: e.target.getAttribute("data-id") })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qayta urinib ko'ring!");
            });
        }
    }

    // edit oper
    if(e.target.classList.contains("edit-me")) {
        alert("Siz edit tugmani bosdingiz");
    }
});
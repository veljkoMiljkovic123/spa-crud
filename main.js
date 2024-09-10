// views
let mainView = document.querySelector('#main-view')
let addView = document.querySelector('#add-view')
let editDeleteView = document.querySelector('#edit-delete-view')
//tbodys
let mainTbody = mainView.querySelector('tbody')
let editTbody = editDeleteView.querySelector('tbody')
//inputs
let idInput = document.querySelector('input[name="id"]')
let brandInput = document.querySelector('input[name="brand"]')
let nameInput = document.querySelector('input[name="name"]')
let priceInput = document.querySelector('input[name="price"]')
let storeInput = document.querySelector('input[name="store"]')
//buttons
let allBtn = document.querySelector('#allBtn')
let addBtn = document.querySelector('#addBtn')
let saveBtn = document.querySelector('#saveBtn')
let editDeleteBtn = document.querySelector('#editDeleteBtn')
//listeners
allBtn.addEventListener('click',showMainView)
addBtn.addEventListener('click',showAddView)
saveBtn.addEventListener('click', saveNewPhone)
editDeleteBtn.addEventListener('click',showEditDeleteView)

function showMainView(e){
    if(e){
        e.preventDefault()
    }
    mainView.style.display='block'
    addView.style.display='none'
    editDeleteView.style.display='none'
}
function showAddView(e){
    if(e){
        e.preventDefault()
    }
    mainView.style.display='none'
    addView.style.display='block'
    editDeleteView.style.display='none'
}
function showEditDeleteView(e){
    if(e){
        e.preventDefault()
    }

    createEditPhonesTable()

    mainView.style.display='none'
    addView.style.display='none'
    editDeleteView.style.display='block'
}

function saveNewPhone(e){
    let newPhone = {
        id:idInput.value,
        brand:brandInput.value,
        name:nameInput.value,
        price:priceInput.value,
        store:storeInput.value,
    }
    idInput.value=''
    brandInput.value=''
    nameInput.value=''
    priceInput.value=''
    storeInput.value=''

    db.push(newPhone)
    createPhonesTable()
    showMainView()
   
    
}

createPhonesTable()

function createPhonesTable(){
    let text = ''
    db.forEach(phone=>{
        text+=`<tr>
                        <td>${phone.id}</td>
                        <td>${phone.brand}</td>
                        <td>${phone.name}</td>
                        <td>${phone.price}</td>
                        <td>${phone.store}</td>
                       </tr>`
    })
    mainTbody.innerHTML=text;  
}
function createEditPhonesTable(){
    let text = ''
    db.forEach(phone=>{
        text+=`<tr>
                        <td>${phone.id}</td>
                        <td>${phone.brand}</td>
                        <td>${phone.name}</td>
                        <td>${phone.price}</td>
                        <td>${phone.store}</td>
                        <td><button class='btn btn-sm btn-warning me-2'>Edit</button><button class='btn btn-sm btn-danger'>Delete</button></td>
                       </tr>`
    })
    editTbody.innerHTML=text;  
}
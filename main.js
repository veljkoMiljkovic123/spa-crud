//helpers
let index = null
// views
let mainView = document.querySelector('#main-view')
let addView = document.querySelector('#add-view')
let editDeleteView = document.querySelector('#edit-delete-view')
let editFormView = document.querySelector('#edit-form-view')
//tbodys
let mainTbody = mainView.querySelector('tbody')
let editTbody = editDeleteView.querySelector('tbody')
//inputs
let idInput = document.querySelector('input[name="id"]')
let brandInput = document.querySelector('input[name="brand"]')
let nameInput = document.querySelector('input[name="name"]')
let priceInput = document.querySelector('input[name="price"]')
let storeInput = document.querySelector('input[name="store"]')
let searchInput = document.querySelector('#search')

let eidInput = document.querySelector('input[name="eid"]')
let ebrandInput = document.querySelector('input[name="ebrand"]')
let enameInput = document.querySelector('input[name="ename"]')
let epriceInput = document.querySelector('input[name="eprice"]')
let estoreInput = document.querySelector('input[name="estore"]')
//buttons
let allBtn = document.querySelector('#allBtn')
let addBtn = document.querySelector('#addBtn')
let saveBtn = document.querySelector('#saveBtn')
let editDeleteBtn = document.querySelector('#editDeleteBtn')
let updateBtn = document.querySelector('#editBtn')
//listeners
allBtn.addEventListener('click',showMainView)
addBtn.addEventListener('click',showAddView)
saveBtn.addEventListener('click', saveNewPhone)
editDeleteBtn.addEventListener('click',showEditDeleteView)
updateBtn.addEventListener('click',updatePhone)
searchInput.addEventListener('keyup',searchDb)

function searchDb(e){
 let searcTerm = this.value 
 let filteredPhones = db.filter(phone => phone.name.includes(searcTerm) || phone.brand.includes(searcTerm))
   createPhonesTable(filteredPhones)
   
}

function updatePhone(e){
    let updatedPhone = {
        id:eidInput.value,
        brand:ebrandInput.value,
        name:enameInput.value,
        price:epriceInput.value,
        store:estoreInput.value
    }
    db[index]=updatedPhone
    createPhonesTable()
    showMainView()
    
}

function showMainView(e){
    if(e){
        e.preventDefault()
    }
    mainView.style.display='block'
    addView.style.display='none'
    editDeleteView.style.display='none'
    editFormView.style.display = 'none'
}
function showAddView(e){
    if(e){
        e.preventDefault()

    }
    mainView.style.display='none'
    addView.style.display='block'
    editDeleteView.style.display='none'
    editFormView.style.display = 'none'
}

function showEditFormView(){
    //popuniti formu
    index = this.getAttribute('data-index')
    let currentPhone = db[index]
    eidInput.value = currentPhone.id
    ebrandInput.value = currentPhone.brand
    enameInput.value = currentPhone.name
    epriceInput.value = currentPhone.price
    estoreInput.value = currentPhone.store
    
    mainView.style.display='none'
    addView.style.display='none'
    editDeleteView.style.display='none'
    editFormView.style.display = 'block'
}

function showEditDeleteView(e){
    if(e){
        e.preventDefault()
    }

    createEditPhonesTable()

    mainView.style.display='none'
    addView.style.display='none'
    editDeleteView.style.display='block'
    editFormView.style.display = 'none'
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

createPhonesTable(db)

function createPhonesTable(phones){
    let data = phones || db;
    let text = ''
    data.forEach(phone=>{
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
    db.forEach((phone,index)=>{
        text+=`<tr>
                        <td>${phone.id}</td>
                        <td>${phone.brand}</td>
                        <td>${phone.name}</td>
                        <td>${phone.price}</td>
                        <td>${phone.store}</td>
                        <td><button data-index='${index}' class='btn btn-sm btn-warning me-2 edit-btns'>Edit</button><button data-index='${index}' class='btn btn-sm btn-danger delete-btns'>Delete</button></td>
                       </tr>`
    })
    editTbody.innerHTML=text;  

    let deleteBtns = document.querySelectorAll('.delete-btns')
    let editBtns = document.querySelectorAll('.edit-btns')
    deleteBtns.forEach((btn,index)=>{
        btn.addEventListener('click',deletePhone)
        editBtns[index].addEventListener('click',showEditFormView)
    })
   
}

function deletePhone(e){
    if(e){
        e.preventDefault()
    }
    let id = this.getAttribute('data-index')
    db.splice(id,1)
    createPhonesTable()
    showMainView()
    
}
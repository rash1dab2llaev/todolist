let container = document.querySelector('.container')
let usersListBlock = document.querySelector('.users_list_block')
let addBtn = document.querySelector('.submit')
let input = document.querySelector('.input')


let person = [
    {
        id: 1,
        name: 'Rashid Abdullaev',
        isComputed: false
    },
    {
        id: 2,
        name: 'Abdullaev Rashid',
        isComputed: false
    }
]

//При клике добавляем значение инпута в новый объект 
addBtn.onclick = () => {
    let newObj = {}

    newObj.id = new Date().getTime()
    newObj.name = input.value
    newObj.isComputed = false

    person.push(newObj)
    getUsers()

    input.value = ''
}
//delete function
function deleteFunc(idElem) {
    person = person.filter(elem => {
        return elem.id != idElem //оставляем те id тех эелементв которые не ровно нажатому элементу
    })
    getUsers()
}

//change function
function changeFunc(idElem) {
    person = person.map(elem => {
        if (elem.id == idElem) {
            elem.isComputed = !elem.isComputed
        }
        return elem
    })
    getUsers()
}

function getUsers() {
    usersListBlock.innerHTML = ''

    person.forEach(user => {
        let usersDiv = document.createElement('div')
        let nameH2 = document.createElement('h2')
        //delete button
        let deletedBtn = document.createElement('button')
        let isCompBtn = document.createElement('button')

        //delte
        deletedBtn.innerHTML = 'delete'
        //iscomputed
        isCompBtn.innerHTML = 'change'

        //delete click
        deletedBtn.onclick = () => {
            deleteFunc(user.id)
            console.log(user.id);
        }
        nameH2.innerHTML = user.name

        //change click
        isCompBtn.onclick = () => {
            changeFunc(user.id)
        }

        if (user.isComputed == true) {
            nameH2.classList.toggle('change')
            
        }
        usersDiv.classList.add('user_block')
        deletedBtn.classList.add('delete_btn')
        isCompBtn.classList.add('delete_btn')

        usersListBlock.appendChild(usersDiv)
        usersDiv.appendChild(nameH2)
        //add delete button
        usersDiv.appendChild(deletedBtn)
        usersDiv.appendChild(isCompBtn)
    })
}
getUsers()
const modal=document.querySelector('.modal')
const addTodoBtn=document.getElementById('add_btn')
const closeModalButton=document.querySelector('.close-modal')
const todoSubmitButoon=document.getElementById('todo_submit')
const input=document.getElementById('todo_input')
const noStatus=document.getElementById('no_status')
const notStarted=document.getElementById('notStarted')
const inProgress=document.getElementById('inProgress')
const completed=document.getElementById('completed')
const hardcodeTodo=document.getElementById('hardcodeTodo')
const times=document.getElementById('times')
// let newTododiv=null
// let newCloseSpan=null



addTodoBtn.addEventListener('click',showModal)
closeModalButton.addEventListener('click',dissappearModal)
todoSubmitButoon.addEventListener('click',addTodo)


function showModal(){
    modal.style.top='20%'
    
}

function dissappearModal(){
    modal.style.top='-50%'
}

function addTodo(){
    if(input.value!=''){
        newTododiv=document.createElement('div')
        newCloseSpan=document.createElement('span')
    
        newTododiv.classList.add('todo')
        newCloseSpan.classList.add('close')
    
        newTododiv.innerHTML=input.value
        newCloseSpan.innerHTML='&times'
        newTododiv.setAttribute('draggable','true')
        newTododiv.setAttribute('id',Math.random())
    
        newTododiv.append(newCloseSpan)
        noStatus.append(newTododiv);
        input.value=''
        modal.style.top='-50%'
    
    }else{
        alert('please enter todo')
    }
    
    newCloseSpan.addEventListener('click',function(e){
        e.target.parentElement.remove()
    })
    
    newTododiv.addEventListener('dragstart',function(e){
       console.log( e.target.id);
         e.dataTransfer.setData('elemId',e.target.id)
    })

}

hardcodeTodo.addEventListener('dragstart',function(e){
    e.dataTransfer.setData('hardcodeTodoId',e.target.id)
})

times.addEventListener('click',function(e){
    e.target.parentElement.remove()
})



notStarted.addEventListener('dragover',function(e){
    e.preventDefault()
})
notStarted.addEventListener('drop',function(e){
    
    let targetId=e.dataTransfer.getData('elemId')
    let targetElement=document.getElementById(targetId)

    let hardcodeTodoI=e.dataTransfer.getData('hardcodeTodoId')
    let hardcodeTodoElement=document.getElementById(hardcodeTodoI)

    if(targetElement!=null){
        e.target.append(targetElement)
    }
    if(hardcodeTodoElement!=null){
        e.target.append(hardcodeTodo)
    }
})



noStatus.addEventListener('dragover',function(e){
    e.preventDefault()
})
noStatus.addEventListener('drop',function(e){
    let targetId=e.dataTransfer.getData('elemId')
    let targetElement=document.getElementById(targetId);

    let hardcodeTodoI=e.dataTransfer.getData('hardcodeTodoId')
    let hardcodeTodoElement=document.getElementById(hardcodeTodoI)
   
    if(targetElement!=null){
        e.target.append(targetElement)
    }
    if(hardcodeTodoElement!=null){
        e.target.append(hardcodeTodo)
    }
})

inProgress.addEventListener('dragover',function(e){
    e.preventDefault()
})
inProgress.addEventListener('drop',function(e){
    let targetId=e.dataTransfer.getData('elemId')
    let targetElement=document.getElementById(targetId);

    let hardcodeTodoI=e.dataTransfer.getData('hardcodeTodoId')
    let hardcodeTodoElement=document.getElementById(hardcodeTodoI)
 
    if(targetElement!=null){
        e.target.append(targetElement)
    }
    if(hardcodeTodoElement!=null){
        e.target.append(hardcodeTodo)
    }
})

completed.addEventListener('dragover',function(e){
    e.preventDefault()
})
completed.addEventListener('drop',function(e){
    let targetId=e.dataTransfer.getData('elemId')
    let targetElement=document.getElementById(targetId);

    let hardcodeTodoI=e.dataTransfer.getData('hardcodeTodoId')
    let hardcodeTodoElement=document.getElementById(hardcodeTodoI)
    
    if(targetElement!=null){
        e.target.append(targetElement)
    }
    if(hardcodeTodoElement!=null){
        e.target.append(hardcodeTodo)
    }
})







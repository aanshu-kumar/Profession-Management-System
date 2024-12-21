
let arr=[];
let id=1;


function addUser()
{
    document.querySelector("#success-msg").style.display="none";
    document.querySelector('#error-msg').style.display="none";
    let employeesContainer = document.querySelector(".employees-container");
    let name= document.querySelector("#name").value;
    let profession= document.querySelector("#profession").value;
    let age= document.querySelector("#age").value;
    let errorMsg= document.querySelector('#error-msg');
    if(name.length==0 || profession.length==0 || age.length==0)
    {
        console.log("Input is Empty");
        errorMsg.style.display="block"
        return 1;
    }
    let new_obj={id:id,name:name, profession:profession, age:age};
    arr.push(new_obj);
    newUser(employeesContainer);
    console.log(arr);
}

function newUser(employeesContainer)
{
    let divContaier = document.createElement('div');
    divContaier.setAttribute("class","divContainer")
    divContaier.setAttribute("id",`${id}`)

    let delBtn= document.createElement('button');
    delBtn.innerHTML="Delete User";
    delBtn.setAttribute("class",`delbtn`);
    delBtn.setAttribute("onClick",`deleteUser(${id})`)

    let dataContainer = document.createElement('div');
    dataContainer.setAttribute("class","data-container")
    dataContainer.innerHTML=`
    <p>${id++}.</p>
    <p> Name: ${arr[0].name}</p>
    <p>Profession: ${arr[0].profession}</p>
    <p>Age: ${arr[0].age}</p>
    `
    divContaier.appendChild(dataContainer);
    divContaier.appendChild(delBtn);
    employeesContainer.appendChild(divContaier)
    document.querySelector("#success-msg").style.display="block";
    document.querySelector("#empty-msg").style.display="none";
}

function deleteUser(Id){
//Removed element with Id from DOM.
document.getElementById(Id).remove();

//Removed deleted item from array.
arr=arr.filter((item)=>item.id!=Id);

//Display Empty Message.
if(arr.length==0)
document.querySelector("#empty-msg").style.display="block";
}
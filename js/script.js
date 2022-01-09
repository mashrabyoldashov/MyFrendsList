let elForm = document.querySelector(".form");
let elInput1 = document.querySelector(".input1");
let elInput2 = document.querySelector(".input2");
let elInput3 = document.querySelector(".input3");
let elList = document.querySelector(".list");
let elDiv = document.querySelector(".div");

const contacts = []
    
    
    
elForm.addEventListener('submit', function(evt){
  evt.preventDefault();
  
  let inputValue = elInput1.value.trim();
  let inputValue2 = elInput2.value.trim();
  let inputValue3 = elInput3.value.trim();

 

  let contact = {
    name: inputValue,
    name2: inputValue2,
    name3: inputValue3,
    id: contacts.length,
  }

  contacts.push(contact)
  elInput1.value = null;
  elInput2.value = null;
  elInput3.value = null;

  elList.innerHTML = null;


  for(let item of contacts){
    let defaultNumber = "+998";
    let newItem = document.createElement('li');
    let newDiv = document.createElement('div');
    let newHeader = document.createElement('h5');
    let newDesc = document.createElement('p');
    let newLink = document.createElement('a');
  
    newHeader.textContent = item.name;
    newDesc.textContent = item.name2;
    newLink.textContent = Number(`${defaultNumber}` + item.name3);
  
   
    newItem.setAttribute('class', 'card w-100 p-3 pt-0 mb-2') 
    newItem.setAttribute('data-aos', 'fade-left') 
    newItem.setAttribute('data-aos-anchor', 'example-anchor') 
    newItem.setAttribute('data-aos-offest', '500') 
    newItem.setAttribute('data-aos-duration', '500') 
    newDiv.setAttribute('class', 'card-body')
    newHeader.setAttribute('class', 'card-title fs-3')
    newDesc.setAttribute('class', 'card-text')
    newLink.setAttribute('class', 'link')
    newLink.setAttribute('href', "tel:newLink.value")


    newItem.appendChild(newDiv);
    newItem.appendChild(newHeader);
    newItem.appendChild(newDesc);
    newItem.appendChild(newLink);
    elList.appendChild(newItem);

  }

})
  



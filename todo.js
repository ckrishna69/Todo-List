let k=localStorage.getItem('mytodolist');
let todolist=JSON.parse(k)||[];
display();
function addtodo(){
let ip=document.querySelector('#input');
let dt=document.querySelector('#date');
let dat=dt.value;
let item=ip.value;
todolist.push({itm:item, duedate:dat});
ip.value='';dt.value='';
display();
}
function display(){
  let delement=document.querySelector('#container');
      let newhtml='';
  for(let i=0;i<todolist.length;i++){
    let itm=todolist[i].itm;
    let duedate=todolist[i].duedate;
    newhtml += `<span>${itm}</span>
        <span>${duedate}</span>
        <button onclick="todolist.splice(${i},1); display();" id="del">DELETE</button>`;
  }
  let k = JSON.stringify(todolist);
  localStorage.setItem('mytodolist',k);
  delement.innerHTML=newhtml;
}
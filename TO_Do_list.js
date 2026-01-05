

const mybtn = document.getElementById("mybtn");

mybtn.addEventListener('click', ()=>{
    const userinput=document.getElementById("userinput");
    console.log(userinput.value);

    const output=document.getElementById("output");

    const list=document.createElement("div");
    list.id="list";
    list.textContent="  ";

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.id="check";

    list.append(checkbox);
    list.append(userinput.value);

    const del=document.createElement("button");
    del.textContent="delete";
    del.id="delbtn";

    
    del.addEventListener('click', ()=>{
        list.remove();
    })

    list.append(del);
    
    output.append(list);
    userinput.value=" ";
});


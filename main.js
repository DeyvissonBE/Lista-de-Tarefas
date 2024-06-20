function addNewTask () {
    var list = document.getElementById("list");
    var text = document.getElementById("taskname").value;

    if(text.length === 0) {
        alert("Tarefa precisa de ter mais de 1 caracter")
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElemente = document.createTextNode(text);
    listItem.appendChild(textElemente);
    list.appendChild(listItem);

}
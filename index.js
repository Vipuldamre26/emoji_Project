let parent = document.querySelector(".parent");
let text = document.querySelector("input");
let tbody = document.querySelector("tbody");



function addEmojees(emojiItems){
    emojiItems.forEach((item) => {

        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerHTML = `${item.emoji}`;
        td1.classList.add("emoji");

        let td2 = document.createElement("td");
        td2.innerHTML = `${item.aliases[0]}`;

        let td3 = document.createElement("td");
        td3.innerHTML = `${item.description}`;

        tr.append(td1, td2, td3);
        parent.appendChild(tr);

    })
}

window.onload = () => addEmojees(emojiList);



document.addEventListener("keyup", () => {
    tbody.textContent = "";

    let textValue = text.value;
    let filteredDate = emojiList.filter((item) => {
        if(item.description.indexOf(textValue) != -1){
            return true;
        }

        if(item.aliases.some(ele => ele.startsWith(textValue))){
            return true;
        }

        if(item.tags.some(ele => ele.startsWith(textValue))){
            return true;
        }
    });

    addEmojees(filteredDate);

})

if(text.value == ""){
    addAll(emojiList);
}
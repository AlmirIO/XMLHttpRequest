const btn = document.getElementById('btn');
const displayData = document.getElementById('dataContainer');

btn.addEventListener('click', function () {
    let requestData = new XMLHttpRequest();
    requestData.open('GET', 'data.json', true);
    requestData.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(requestData.responseText);
            outputHTML(data);
        }
    };
    requestData.send();
    btn.disabled = true;
    btn.style.cursor = 'not-allowed';
    delbtn.style.display = 'block';
}
);

function styles(){
    btn.disabled = false;
    btn.style.cursor = 'pointer';
    delbtn.style.display = 'none';
};

function deleteAll(){
    const allData = document.getElementById('dataContainer');
    while (allData.firstChild) {
        allData.removeChild(allData.firstChild);
        if (displayData.firstChild == null) {
            styles();
        }
    }
};

function outputHTML(ourData) {
    let output = "";
    for (i = 0; i < ourData.length; i++) {
        output += '<p id="itemId">' + ' <img class="avatar" src="' + ourData[i].image + ' ">' + ourData[i].first_name + ' ' + ourData[i].last_name + "<button class='removeItem' onclick='removeItem()'> <div class='text'>Delete</div></button>" + '</p>'
    }
    displayData.insertAdjacentHTML('beforeend', output);
};

function removeItem() {
    const item = document.getElementById('itemId');
    item.parentNode.removeChild(item);
    if (displayData.firstChild == null) {
        styles();
    }
};
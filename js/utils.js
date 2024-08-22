function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayModal(img) {
    document.getElementById("modal-img").src = img.src;
    document.getElementById("modal-caption").innerText = '"' + img.title + '"';

    document.getElementById("modal").style.display = "block";
}

function expandContent(div) {
    div.className = "expanded-content";
    div.setAttribute("onclick", "");
}

async function collapseContent(boss) {  
    boss.className = "expandable-content";
    
    await sleep(250);

    boss.addEventListener("click", function() {
        expandContent(this);
    }, {once : true});
}
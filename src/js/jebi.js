var names;
window.onload = () => {
    $('out').onclick = outClick;
    $('more').onclick = moreClick;
    $('img').onclick = jebiClick;
    new Ajax.Request("api/restaurants", {
        method: "get",
        onSuccess : (ajax) => {
            var data = JSON.parse(ajax.responseText);
            var index = Math.floor(Math.random()*(data.length));
            var name = data[index].name;
            var p = document.createElement("p");
            var p2 = document.createElement("p");
            p.innerHTML = name;
            p2.innerHTML = "어떠세요??"
            document.querySelector("#div").appendChild(p);
            document.querySelector("p").appendChild(p2);
        },
        onFailure: ajaxFailure,
        onException: ajaxFailure
    })
}

function jebiClick() {
    $("img").addClassName("hidden");
    ShowStores();
    // getStores_JSON();
}

function moreClick() {
    location.reload();
}

function outClick() {
    window.close();
}

// function ShowStores() {
//     var name = 
// }

// {
//  "stores" : [
//              {"title":x},
//              {"title":y},
//                  ...
//  ]
// }

// function getStores_JSON() {
//     new Ajax.Request("api/restaurants", {
//         method: "get",
//         onSuccess: showStores_JSON,
//         onFailure: ajaxFailure,
//         onException: ajaxFailure
//     });
// }

// function showStores_JSON(event) {
//     var data = JSON.parse(ajax.responseText);
//     var index = Math.floor(Math.random()*(data.title.length));
//     var title = data.title[index];
//     var p = document.createElement("p");
//     var p2 = document.createElement("p");
//     p.innerHTML = title;
//     p2.innerHTML = "어떠세요??"
//     document.querySelector("h1").appendChild(p);
//     document.querySelector("p").appendChild(p2);
// }

// function ajaxFailed(ajax, exception) {
//     var errorMessage = "Error making Ajax request:\n\n";
//     if (exception) {
//         errorMessage += "Exception: " + exception.message;
//     } else {
//         errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText + 
//                         "\n\nServer response text:\n" + ajax.responseText;
//     }
//     console.log(errorMessage);
// }
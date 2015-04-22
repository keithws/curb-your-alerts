// inject script into document
// to override alert, confirm, and prompt
var e = document.createElement("script");
e.innerText = "alert = confirm = prompt = function (message) { throw new Error(message); };";
document.body.insertBefore(e, document.body.firstChild);

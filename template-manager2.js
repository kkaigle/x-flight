var callback = function() {
    let headerRequest = new XMLHttpRequest();
    headerRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let div = document.createElement("div");
            div.innerHTML = this.responseText;
            let title = div.querySelector('.title');
            title.innerText = document.title;
            document.body.prepend(div);
            let content = document.body.querySelector('.content');
            content.className = content.className + ' visible';
        }
    };
    headerRequest.open("GET", "header.html", true);
    headerRequest.send();

    let footerRequest = new XMLHttpRequest();
    footerRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let div = document.createElement("div");
            div.innerHTML = this.responseText;
            document.body.append(div);
            let content = document.body.querySelector('.content');
            content.className = content.className + ' visible';
        }
    };
    footerRequest.open("GET", "footer.html", true);
    footerRequest.send();
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}

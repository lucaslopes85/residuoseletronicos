const accordion_item = document.querySelectorAll(".accordion_item");

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector(".accordion_header");
    
    accordion_header_item.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion_content");

        const content_actived = document.querySelector(".active");

        verifyActive(item, accordion_content_item, content_actived);
    });
});

function verifyActive(item, content, content_actived) {
    const icon_item = item.querySelector(".icon");

    const icons = document.querySelectorAll(".icon");

    icons.forEach((item) => (item.innerHTML = "+"));

    if (content_actived) {
        content_actived.style.height = 0;
        content_actived.classList.remove("active");
    }

    if (content !== content_actived) {
        icon_item.innerHTML = "-";
        content.classList.add("active");
        content.style.height = content.scrollHeigth + 10 + "px";
    }
}

let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a"),
    title = document.querySelector(".title"),
    lang_flag = document.getElementsByClassName("flag_img")
descr = document.querySelectorAll
link.forEach(el => {
    el.addEventListener("click", () => {
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        let attr = el.getAttribute("language")

        title.textContent = data[attr].title
        descr.textContent = data[attr].description
        lang_flag.src = data[attr].flag
    })
})

let data = {
    french: {
        title: "Bonjour",
        flag: "../images/a/french.svg"

    },
    english: {
        title: "Hello",
        flag: "../images/a/english.png"
    },
    arabic: {
        title: "مرحبا",
        flag: "../images/a/arabic.svg"
    }
}
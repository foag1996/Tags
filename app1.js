const input_tag = document.querySelector(".input")
const counter = document.querySelector(".counter")
let tags_list = []
input_tag.addEventListener("keyup", (e) => {
    const val = input_tag.value
    if (e.key == "Enter") {

        if (tags_list.some(e => e.text == val)) return alert ('Tags duplicado')
        if (val == "") return;
        const tags = val.split(',').map(e => e.trim()).filter(e => e !== "")
        for (let i of tags) {
            tags_list.push({
                id: Math.random().toString(10).substring(2, 10), text: i
            })
        }
        input_tag.value = ""
        RenderTags()
    }
})

function RenderTags() {
    const wrapper_tags = document.querySelector(".wrapper")
    let cache = ""
    document.querySelectorAll(".tags").forEach(e => e.remove())
    cache = ""

    tags_list.forEach(e => {
        cache = `<div class="tags">
                    <span>${e.text}</span>
                    <span type="button" data-id="${e.id}"
                    class="bi bi-x-circle-fill"></span>
                </div>`;
        wrapper_tags.insertAdjacentHTML('afterbegin', cache)
    })

    counter.textContent = `${tags_list.length} Tags`
}
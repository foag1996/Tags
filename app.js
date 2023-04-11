const input = document.querySelector(".input");

const tags_box = document.querySelector(".tags");
const tagCounter = document.querySelector("footer .counter");

let maxTags = 10;
let tags = [];

countTag();

function countTag(){ //contador de los tags
    tagCounter.innerHTML = maxTags - tags.length;
}


function removeTag(element, tag){
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; // copia de un arreglo desde el indice del inicio hasta el penúltimo final , excluyendo el final
    //console.log(tags)
    element.parentElement.remove();
    countTag();
    
}

function createTag(){
    tags_box.querySelectorAll(".tag").forEach(element => element.remove());
    //console.log(tags.slice().reverse())
    tags.slice().reverse().forEach(tag => { // copia de un arreglo desde el indice del inicio hasta el penúltimo final , excluyendo el final
        let divTag = `<div class="tag">
                        <span>${tag}</span>
                        <span onclick="removeTag(this, '${tag}')" class="bi bi-x-circle-fill"></span>
                      </div>`;
        tags_box.insertAdjacentHTML('afterbegin', divTag)
    })
    countTag();
}

function addTag(e){
    if(e.key=="Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ' );
        //console.log(tag);

        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){ //agregar numero maximo de etiquetas//
                tag.split(' ').forEach(tag => { //se puede modificar por comas o espacios (',')
                    tags.push(tag);
                    //console.log(tags);
                    createTag();
                });
            }//fin agregar numero maximo de etiquetas//
        }
        e.target.value = '';
    }
}

input.addEventListener("keyup", addTag);
document.querySelector("footer button").addEventListener("click", function(){ //eliminar todos los tags
    tags.length = 0;
    tags_box.querySelectorAll(".tag").forEach(element => element.remove());
    createTag();
})
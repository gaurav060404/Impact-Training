const items = document.querySelectorAll(".items");
for (let index = 0; index < items.length; index++) {
    const item = items[index];
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(`${item.innerHTML} clicked!!!`);
        
    })
}
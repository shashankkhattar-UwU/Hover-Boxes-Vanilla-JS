const data=[
    {
        imageUrl: "data:image/jpeg;base64,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",
        description: "Hovering Results in this pop-up div which shows the description about the particular image present in the 'data' array inside the js file"
    },
    {
        imageUrl: "https://i.discogs.com/_JT9cjrxJqtap3stt9vUzjveMvTJdMa1-9BsD3M841I/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ4ODc3/Ni0xNDYwNDA2NDI1/LTExMDIuanBlZw.jpeg",
        description: "The JS file uses eventlisteners on mouseenter and mouseleave to render and remove these pop-up divs"
    },
    {
        imageUrl: "https://www.worldatlas.com/r/w1200/upload/95/04/a2/shutterstock-649452289.jpg",
        description: "positioning of the pop-up div depends on the the bounding rectangle of the article(image) that is being hovered found by getBoundingClientRect"
    },
    {
        imageUrl: "https://www.chattanoogaskydivingcompany.com/wp-content/uploads/chattanooga-skydiving-company-learning-1.jpg",
        description: "The details of the image can further be easily formatted depending on what the details of the image are, for example, name, color dimensions etc."
    },
    {
        imageUrl: "https://i.ytimg.com/vi/KvZT3etZIsw/maxresdefault.jpg",
        description: "Example of further formatting of the text in pop-up divs can be seen in the next image"
    },
    {
        imageUrl: "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
        species: "Dog",
        breed: 'Siberian husky',
        age: '4 years',
        
    },
    {
        imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
        species: "Cat",
        breed: 'Kaali wali',
        age: '4 years',
        
    },
    {
        imageUrl: "https://pbs.twimg.com/profile_images/1433507587241259016/tp_977hd_400x400.jpg",
        description: "Added additional styling for fun :)"
    },
]
const maindiv = document.getElementById('mainDiv');

let container=``;
data.forEach((card, i)=>{
    const tempCard=`
        <article id="${i}">
        <img src=${card.imageUrl} alt="imageNotFound" />
         </article>
         `;
    container+=tempCard;
});
maindiv.innerHTML=container;
const onHover = (event) => {
    const rect=event.target.getBoundingClientRect();
    const coords=[((rect.top+rect.bottom)/2)+150+window.scrollY, ((rect.right+rect.left)/2)-180+window.scrollX];
    const info=document.createElement("div");
    info.className=`${event.target.id} details`;
    info.style.top=`${coords[0]}px`;
    info.style.left=`${coords[1]}px`;
    if(data[event.target.id].description){
        const details=document.createTextNode(data[event.target.id].description);
        info.appendChild(details);
    }
    else{
        const br1=document.createElement("br");
        const br2=document.createElement("br");
        const detail1=document.createTextNode(`Species: ${data[event.target.id].species} `);
        const detail2=document.createTextNode(`Breed: ${data[event.target.id].breed}`);
        const detail3=document.createTextNode(`Age: ${data[event.target.id].age}`);
        info.appendChild(detail1);
        info.appendChild(br1);
        info.appendChild(detail2);
        info.appendChild(br2);
        info.appendChild(detail3);
    }

    maindiv.appendChild(info);
  }
const onLeave=(event=>{
    const infodiv=document.getElementsByClassName(String(event.target.id))[0];
    if(!infodiv){
        return;
    }
    infodiv.remove();

})
const allImages=document.getElementsByTagName('article');

var i=0;
for(;i<allImages.length;i++){
    allImages[i].addEventListener('mouseenter', onHover);
    allImages[i].addEventListener('mouseleave', onLeave);
}

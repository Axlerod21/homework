const shuffle = (l, dict) => {  
        
    let i;
    for (i = 0; i < l.length; i++) 
    {
        l[i].setAttribute("href", dict["link" +( 
        Math.floor(Math.random() * 6) + 1)]);

        l[i].setAttribute("class", "a" + ( 
        Math.floor(Math.random() * 7) + 1));
        console.log(l[i]);
    }
};
let urls = {
    "link1": "https://he-il.facebook.com/",
    "link2": "https://www.google.com/", 
    "link3": "https://www.amazon.com/",
    "link4": "https://he-il.facebook.com/",
    "link5": "https://www.google.com/", 
    "link6": "https://www.amazon.com/"
};
links = document.querySelectorAll(".pageHeaderMenuLink > a");
            
setInterval(()=>shuffle(links, urls), 5000);

var flag = 0;
const changeHide = (elem) => {
    if(flag = 0) {
        removeHide(elem);
        flag = 1;
    }
    else {
        addHide(elem);
        flag = 0;
    }
}
const removeHide = (elem) => {
    elem.classList.remove("hide");
}
const addHide = (elem) => {
    elem.classList.add("hide");
}

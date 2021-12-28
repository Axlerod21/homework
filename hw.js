let urls = {
    link1:"https://www.facebook.com/",
    link2:"https://www.google.com/",
    link3:"https://www.amazon.com/", 
    link4:"https://www.youtube.com/", 
    link5:"https://www.instagram.com/", 
    link6:"https://www.whatsapp.com/"
};

links = document.querySelectorAll(".link");

links.forEach((x) => {
    x.setAttribute("href", urls[x.getAttribute("blabla")]);
});

const shuffle = (links, urls) => {
    let i;
    for(i = 0; i < links.length; i++) {
        links[i].setAttribute("href", urls["link" + (Math.floor(Math.random() * 6) + 1)]);
        console.log(links[i]);
    }
};

setInterval(() => shuffle(links, urls), 5000);

const AppLogo=[
    "Images/DEENewsLogo.png",
    "Images/BreakUpLogo.png",
    "Images/MenoLogo.png",
    "Images/TicTacToeLogo.png"
];
const NumberOfApps=4;
const AppName=[
    "DEE News",
    "BreakUp App",
    "Memo App",
    "Dic Dac Doe"
        ];

const AppRating=["4.2⭐","4.5⭐","4.7⭐","4.7⭐"];


let main=document.getElementById("main");

for(let i=0; i<NumberOfApps; i++){
    let Html=` 
    <a href="./HTML/AppInfo${i}.html">
    <div id="${i}" class="mainSub">
        <img id="mainSubImg" src="${AppLogo[i]}" alt="error">
        <h4 id="AppName">${AppName[i]}</h4>
        <h5>${AppRating[i]}</h5>
    </div>
    </a>`

    main.innerHTML =` ${main.innerHTML} ${Html}`;

}

// let Apps=document.querySelectorAll(".mainSub");

// Apps.forEach(element => {
//     element.addEventListener("click",function(){
//         // alert("q dabaya bee" + element.id)
//         let id=element.id;
        
//          window.open(`../HTML/AppInfo${id}.html`,"_self");
//     })
// });

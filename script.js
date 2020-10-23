let button = document.getElementById('btn');
let IP = document.querySelector('#ip_address');
let country= document.querySelector('#country');
let loader = document.getElementById('loader')
let main_container = document.getElementById('main_container')

function debounce(fn,time){
    let timeout;
    return function(...args){
       if(timeout){
           clearTimeout(timeout)
       } 
       timeout = setTimeout(()=>{
          fn(...args)
       },time)
    }
}

let findIp = debounce(async()=>{
    if(main_container.style.display!='block'){
    loader.style.display = 'block'
    let response = await fetch(`https://ipapi.co/json`)
    let data = await response.json();
    loader.style.display = 'none'
    main_container.style.display='block';
   
    IP.textContent= `IP Address:${data.ip}`;
    country.textContent= `Country:${data.country_name}`
    }
},2000)


button.addEventListener('click',findIp)
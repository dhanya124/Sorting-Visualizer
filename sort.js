var nums=[];
for (let index = 0; index < 100; index++) {
    var n = Math.floor(Math.random()*100);
    console.log(n);
    nums.push(n);
    var ele=document.createElement("div");
    ele.innerHTML=n;
    ele.className="array";
    ele.style.borderStyle="solid";
    ele.style.width=n+'px';
    ele.style.height=n+'px';
    // ele.style.width='10px';
    document.getElementById("bar").appendChild(ele);
}
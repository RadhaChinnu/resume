function json(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if (xhr.readyState===4 && xhr.status===200){
    	 callback(xhr.responseText);
  }
 }
 xhr.send(null);
}
json("data.json",function(text){
   let d=JSON.parse(text);
   //console.log(d);
  // edu(d.EDUCATION);
   //basics(d.basicdetails);
   //carrier(d.carrier);
   //techskills(d.skills);
   //achievements(d.achievments);
   //description(d.descriptiond);
})
//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
   edu(d.EDUCATION);
   basics(d.basicdetails);
   carrier(d.carrier);
   techskills(d.skills);
   achievements(d.achievments);
   description(d.descriptiond);
	console.log(d);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basic){
	var i=document.createElement("img");
	i.src=basic.image;
	i.alt="profile";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam);
	var em=document.createElement("h3");
	em.textContent=basic.email;
	l.appendChild(em);
	var p=document.createElement("h3");
	p.textContent=basic.phone;
	l.appendChild(p);
	var a=document.createElement("h3");
	a.textContent=basic.address;
	l.appendChild(a);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);
function edu(ed){
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="EDUCATION";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
	for(var i=0;i<ed.length;i++){
		var h=document.createElement("h2");
		h.textContent=ed[i].course;
		e1.appendChild(h);
		var u=document.createElement("ul");
		e1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ed[i].college;
		u.appendChild(list);
		var list1=document.createElement("li");
		list1.textContent=ed[i].Percentage;
		list.appendChild(list1);
	}
	
}
function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";
    r.appendChild(d);
    var tab=document.createElement("table");
    var row="";
    for(i=0;i<s.length;i++)
        {
    	row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
        }
    tab.innerHTML=row;
    d.appendChild(tab);

}
function carrier(c){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrierobjective";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=c.ca;
	c1.appendChild(para);
	
}
function achievements(k){
	var a1=document.createElement("div");
	r.appendChild(a1);
	var h1=document.createElement("h1");
	h1.textContent=" My achievements";
	a1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	for(i in k){
		var u=document.createElement("li");
	    a1.appendChild(u);
	    list.textContent=k[i];
	    u.append(list);
}     
}
function description(de){
	var d1=document.createElement("div");
	r.appendChild(d1);
	var desp=document.createElement("h1");
	desp.textContent="My description";
	desp.appendChild(document.createElement("HR"));
	var para=document.createElement("h3");
	para.textContent=de.des;
	d1.appendChild(para);
}
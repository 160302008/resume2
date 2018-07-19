function getfile(file,callback)
{
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function()
  {
if(xhr.readyState === 4 && xhr.status == "200"){
   callback(xhr.responseText);
}
};
xhr.send(null);
}
//getfile("data.json",function(text){
  //var data = JSON.parse(text);
  //console.log(data);
  //details(data.basics);
  //career(data.CareerObjective);
  //education(data.education);
//achievements(data.achievements);
  //skillset(data.skills);

function loadjson(file) {
  return new Promise ((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else {
        reject(new Error('error'));
      }
    })
  })

}
var newfile = loadjson("data.json")
newfile.then(data=>{
details(data.basics);
career(data.CareerObjective);
education(data.education);
skillset(data.skills);

})

var child = document.querySelector(".childone")
function details(det)
{
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
  var name=document.createElement("h3");
  name.textContent =det.name;
  child.appendChild(name);
  var phoneno=document.createElement("phoneno");
  phoneno.textContent=det.phoneno;
  child.appendChild(phoneno);
  var email=document.createElement("a");
 email.href="mailto:archana11@gmail.com";
 email.textContent=det.email;
 child.appendChild(email);
var Address=document.createElement("h2");
Address.textContent="Address :";
child.appendChild(Address);
var hr=document.createElement("hr");
child.appendChild(hr);
var Address=document.createElement("p");
Address.textContent=det.Address;
child.appendChild(Address);
}
var child2=document.querySelector(".childtwo");
function career(careerinfo){
  var career1 =document.createElement("h3");
  career1.textContent="CareerObjective";
  child2.appendChild(career1);
  var hr=document.createElement("hr");
  child2.appendChild(hr);
  var career2=document.createElement("p");
  career2.textContent=careerinfo.info;
  child2.appendChild(career2);
  }
function education(edu){
  var ed=document.createElement("h2");
  ed.textContent ="educational qualification";
  child2.appendChild(ed);
 var hr =document.createElement("hr");
 child2.appendChild(hr);
for(i=0;i<edu.length;i++) {
  var deg =document.createElement("h3");
  deg.textContent=edu[i].degree;
  child2.appendChild(deg);

  var eduul =document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent=edu[i].institute;
  eduul.appendChild(eduli);
  child2.appendChild(eduul);
  var eduud=document.createElement("ul");
 var eduudi=document.createElement("li");
 eduudi.textContent=edu[i].data;
 eduud.appendChild(eduudi);
 child2.appendChild(eduud);
}
}
function skillset(skillinfo){
  var s = document.createElement("h2");
  s.textContent = "Technical skills:";
  child2.appendChild(s);
  var  h = document.createElement("hr");
  child2.appendChild(h);
var skilldata = document.createElement("table");
skilldata.border ="1";
child2.appendChild(skilldata);
tabledata ="";
for(i=0;i<skillinfo.length;i++){
tabledata+="<tr><td>"+skillinfo[i].title+"</td><td>"+skillinfo[i].data+"</td></tr>"
}
skilldata.innerHTML=tabledata;
}
function achievements(achievements)
{
  var ac =document.createElement("h2");
  ac.textContent ="achievements:";
  child2.appendChild(ac);
  var  h = document.createElement("hr");
  child2.appendChild(h);
  var a =document.createElement("ul");
  var a1 =document.createElement("li");
  a.textContent=achievements.data;
  child2.appendChild(a);
child2.appendChild(a1);
}

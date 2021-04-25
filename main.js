var reason = [
    "Me (Anaya Gandhi)",
    "Mother (Pragya Gandhi)",
    "Sister (Aarayna Gandhi)",
    "Father (Vaibhav Gandhi)"
  ];
  var i = 0;
  function update()
{
i++;
var family_member = 7;
if(i > family_member)
{
  i = 0
}
var newImage = images[i];
var newName = names[i];
document.getElementById("IMG_20200908_183219.jpg").src = newImage;
document.getElementById("Anaya Gandhi").innerHTML = newName;
} 

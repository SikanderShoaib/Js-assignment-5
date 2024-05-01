
var userBioData = [];
userBioData[0] = prompt("Enter Your Name");
userBioData[1] = prompt("Enter Your Father Name");
userBioData[2] = prompt("Enter Your Surname");
userBioData[3] = prompt("Enter Your Phone Number");
userBioData[4] = prompt("Enter Your Email Address");
userBioData[5] = prompt("Enter Your Qualification");
userBioData.splice(4 , 5 );
console.log(userBioData)
userBioData.push("hello , bye , goodbye ");
userBioData.unshift("hi , do good deeds in ramdan");
userBioData.pop()
userBioData.pop()
userBioData.pop()
userBioData.shift()
var copy = userBioData.slice(0 , 3);
console.log(copy)

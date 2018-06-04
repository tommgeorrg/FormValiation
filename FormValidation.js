var user = [];
if(localStorage.a_user){
	user = JSON.parse(localStorage.a_user)
}

document.getElementById('button').addEventListener('click', function(){
																
																var obj = {
																	"username": document.getElementById('username').value,
																	"password": document.getElementById('pword').value,
																	"email": document.getElementById('email').value,
																	"location": document.getElementById('location').value,
																	"company": document.getElementById('company').value,
																	"gender": document.getElementById('gender').value

																};
																//user.push(obj);
																//localStorage.a_user = JSON.stringify(user);

																if(((obj.username) && (obj.email) && (obj.password)) != ""){
																	user.push(obj);
																    localStorage.a_user = JSON.stringify(user);
																}

																if(obj.username == "" ){
																	document.getElementById('errorUNAME').innerHTML = "Please enter your Username";
																}
																else{
																	document.getElementById('errorUNAME').style.display = "none";
																}

																if(obj.password == "" ){
																	document.getElementById('errorPWORD').innerHTML = "Please enter your Password";
																}
																else{
																	document.getElementById('errorPWORD').style.display = "none";
																}

																if(obj.email == ""){
																	document.getElementById('errorEMAIL').innerHTML = "Please enter your EMAIL";
																}
																else{
																	document.getElementById('errorEMAIL').style.display = "none";
																}

																
															});
console.log(user);
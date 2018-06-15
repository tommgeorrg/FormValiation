
    var user = [];
    var table = "";
    var i;
    var flag = true;

    if(localStorage.a_user){
    	user = JSON.parse(localStorage.a_user)
    	tableClick();
    }

	function tableClick(){

		if(localStorage.a_user){
		user = JSON.parse(localStorage.a_user);
		table = `<tr><th>UserName</th><th>Password</th><th>Email</th><th>Location</th><th>Company</th><th>Gender</th></tr>`;
		for( i = 0; i<user.length; i++){
			table += '<tr><td>'+user[i].username+'</td><td>'+user[i].password+'</td><td>'+user[i].email+'</td><td>'+user[i].location+'</td><td>'+user[i].company+'</td><td>'+user[i].gender+'</td></tr>';
			}

		
document.getElementById('table1').innerHTML = table;
		}
	}
	

	function resetFn(){
		document.getElementById("form1").reset();
	}
	

    document.getElementById('button').addEventListener('click', function(){
    									
    			// console.log('hi');
																
				var obj = {
							"username": document.getElementById('username').value,
							"password": document.getElementById('pword').value,
							"email": document.getElementById('email').value,
							"location": document.getElementById('location').value,
							"company": document.getElementById('company').value,
							"gender": document.querySelector('input[name="gender"]:checked')?document.querySelector('input[name="gender"]:checked').value:''
					};
											
				if(((obj.username) && (obj.email) && (obj.password)) && (obj.location) && (obj.company) && (obj.gender)!= ""){
					user.push(obj);
					localStorage.a_user = JSON.stringify(user);
					tableClick();
					resetFn();
					}

					if(flag == false){
						document.getElementById('errorUNAME').style.display = "none";
						document.getElementById('errorPWORD').style.display = "none";
						document.getElementById('errorEMAIL').style.display = "none";
						document.getElementById('errorLOCATION').style.display = "none";
						document.getElementById('errorCOMPANY').style.display = "none";
						document.getElementById('errorGENDER').style.display = "none";
					}

				if(obj.username == ""){
					document.getElementById('username').insertAdjacentHTML('afterend','<p id = "errorUNAME">Please enter your Username</p>');
					flag = false;
					}

																
				if(obj.password == "" ){
					document.getElementById('pword').insertAdjacentHTML('afterend','<p id = "errorPWORD">Please enter your password</p>');
					flag = false;
					}


				if(obj.email == ""){
					document.getElementById('email').insertAdjacentHTML('afterend','<p id = "errorEMAIL">Please enter your email</p>');
					flag = false;
					}
				

					if(obj.location == ""){
						document.getElementById('location').insertAdjacentHTML('afterend','<p id = "errorLOCATION">Please enter your location</p>');
						flag = false;
					}

					if(obj.company == ""){
						document.getElementById('company').insertAdjacentHTML('afterend','<p id = "errorCOMPANY">Please enter your company</p>');
						flag = false;
					}
			

					if(obj.gender == ""){
						document.getElementById('gender2').insertAdjacentHTML('afterend','<p id = "errorGENDER">Please enter your gender</p>');
						flag = false;
					}
				

			 
		   
});
		     
	

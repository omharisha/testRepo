	function ValidateForm() {
								
								var answer=document.getElementById("degree");
								if(answer[answer.selectedIndex].value=="Please select a Qualification"){
									  alert("Select your Qualification"); 
									  return false;
									 }
								var answer=document.getElementById("passed");
								if(answer[answer.selectedIndex].value=="Please select a Year"){
									  alert("Select Passed out year"); 
									  return false;
									 }
								var answer=document.getElementById("role");
								if(answer[answer.selectedIndex].value=="Please select a Position"){
									  alert("Select A Position"); 
									  return false;
									 }
								var	company = /^[A-Za-z\s]+$/;
								if(!company.test(document.page.organization.value))
								{
								alert('Invalid Company name Only alphabets are allowed');
								  return false;
								}
							var	re = /^[A-Za-z\s]+$/;
								if(!re.test(document.page.firstname.value))
								{
								alert('Invalid FirstName.Only alphabets are allowed');
								  return false;
								}
								var	re = /^[A-Za-z]+$/;
								if(!re.test(document.page.surname.value))
								{
								alert('Invalid SurName.Only alphabets are allowed');
								  return false;
								}
                                 
								var	re = /^[A-Za-z\s]+$/;
								if(re.length !=0)
									{
								if(!re.test(document.page.middlename.value))
								{
								alert('InValid MiddleName.Only alphabets are allowed');
								  return false;
								} } else{
							           return false;
					        	   }
								 var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

								 if (!filter.test(document.page.email.value)) {
								       alert('Please provide a valid email address');
								       return false;
								 }
								 
						            var y = document.page.phone.value;
						           if(isNaN(y)||y.indexOf(" ")!=-1)
						           {
						              alert("Only numerics are allowed for  Mobile no")
						              return false; 
						           }
						           if (y.length!=10)
						           {
						                alert("enter 10 characters of mobile no");
						                return false;
						           }
						           if (!(y.charAt(0)=="9" || y.charAt(0)=="8" || y.charAt(0)=="7"))
						           {
						                alert("Mobile No. should start with 9 ,8 or 7 ");
						                
						                return false;
						           }
						           var x = document.page.ophone.value;
						           if(x.length !=0){
						           if(isNaN(x)||x.indexOf(" ")!=-1)
						           {
						              alert("Only numerics are allowed for Optional Mobile no")
						              return false; 
						           }
						           if (x.length!=10)
						           {
						                alert("enter 10 characters of Optional mobile No");
						                return false;
						           }
						           if (!(x.charAt(0)=="9" || x.charAt(0)=="8" || x.charAt(0)=="7"))
						           {
						                alert("Optional Mobile No. should start with 9 ,8 or 7 ");
						                
						                return false;
						           }
						           } else{
						           return false;
						        	   }
						           var z = document.page.salary.value;
						           if(isNaN(z)||z.indexOf(" ")!=-1)
						           {
						              alert("Enter numeric value of salaray")
						              return false; 
						           }
						           
						           
							return true;
								
							}
							
							function submitForm(){
								if(ValidateForm()){
									//grab all form data  

								      $.ajax({
								          url: '/register',
								          type: 'POST',
								          data: new FormData($('#EmploymentApplication100')[0]),
								          processData : false,
								          contentType: false,								          cache: false,
								          success: function (returndata) {
								              console.log(returndata);
								              $("#message").html(returndata.message);
								          },
								          error: function (error) {
								              console.log(error);
								          }
								      });

								      return false;
								}
								return false;
							}

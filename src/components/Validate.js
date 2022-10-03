function Validate(input, isSign,isLogin,isProfile) {
let error = {};
let isValid = true;

if(isSign){
			if(!input.email){
			error.email = "Email id required."
			isValid = false;
			
			
			}else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
			error.email = "You have entered an invalid email address!"
			isValid = false;
			
			};
			if(!input.password){
				error.password = "Password is required.";
				isValid = false;
			}else if(input.password.length < 5){
				error.password = "Password must be 6 characters."
				isValid = false;
			};

			if (!input.contact){
			error.contact = "Contact number required"
			isValid = false;
		
			} else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(input.contact)){
			error.contact = "Enter valid contact number"
			isValid = false;
			
			};
			if(!input.first_Name){
			error.first_Name = "First name required.";
			isValid = false;
			
			}
else if(!/^[A-Za-z\s]+$/.test(input.first_Name)){
			error.first_Name = "First name should letters only.";
			isValid = false;
		
			};
			if(!input.last_Name){
			error.last_Name = "Last name required."
			isValid = false;
		
			}
			if(!/^[A-Za-z\s]+$/.test(input.last_Name)){
			error.last_Name = "Last name should letters only."
			isValid = false;
			
			};
			if(!input.address){
			error.address = "Address required"
			isValid = false;
			
			} else if(!/^[0-9a-zA-Z\s]+$/.test(input.address)){
			error.address = "Address should have letters and number only."
			isValid = false;
			};
		}


else if(isLogin){
			if(!input.email){
				error.email = "Email id required."
				isValid = false;

				}else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
				error.email = "You have entered an invalid email address!"
				isValid = false;
				
				};
		    if(!input.password){
					error.password = "Password is required.";
					isValid = false;
				}else if(input.password.length < 5){
					error.password = "Password must be 6 characters."
					isValid = false;
				};

		}
		else if(isProfile){
			if(!input.room_Type){
				error.room_Type = "Select room type."
				isValid = false;
				};
				
				if(!input.date){
				error.date = "Please enter date of reservation."
				isValid = false;
				};
	
		}
		else {

				if (!input.contact){
					error.contact = "Contact number required"
					isValid = false;
				
					} else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(input.contact)){
					error.contact = "Enter valid contact number"
					isValid = false;
				};
				if(!input.name){
					error.name = "Please enter your name."
					isValid = false;
			
				}else if( !/^[A-Za-z\s]+$/.test(input.name)){
					error.name = "Name should letters only."
					isValid = false;
				
				};
				if(!input.message){
				error.message = "Plase write your message."
				isValid = false;
				
				};
				if(!input.email){
					error.email = "Email id required."
					isValid = false;
				
				} else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)){
				   error.email = "You have entered an invalid email address!"
				   isValid = false;
				  
				};
		}

error.isValid = isValid;



return error;
};
export default Validate;
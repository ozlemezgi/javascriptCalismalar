var users = [
    {email:"ozlemezgisari@icloud.com",password:"12345"},
    {email:"ezgi@icloud.com",password:"12345"}
    
]

var posts =[
    {email:"ozlemezgisari@icloud.com",post:"Hello"},
    {email:"ozlemezgisari@icloud.com",post:"Hello2"},
    {email:"ezgi@icloud.com",post:"Hello3"},
]

var email = prompt("Email?")
var password = prompt ("password?")

function userExist(email,password){
    console.log(email);
    console.log(password);

    for(i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            return true;
        }
    }
    return false;
}

function enterence(){
    if(userExist(email,password)){
    // if((email==users[0].email && password == users[0].password)|| 
    // (email==users[1].email && password == users[1].password)) {

        console.log(posts)

    }
    else{
        console.log("Error")
    }
}

enterence(email,password)
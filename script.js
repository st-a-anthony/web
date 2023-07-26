//popcontact form

//validating all fields
function field(){
    if(document.getElementById('name').value=="" ||document.getElementById('email').value==""||document.getElementById('msg').value=="" ){
        alert("complete all fields");

    }
    else{
        document.getElementById('form').submit();
        alert("Message send successfully..");
    }
}

//Display conatact form
function showform(){
    document.getElementById('messbox').style.display="block";
}
//close contact form

function closeform()
{
    document.getElementById('messbox').style.display="none";
}
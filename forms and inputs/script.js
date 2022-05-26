function togglePassword(){
    var pass = document.getElementById("password");
    pass.type === "password"?
    pass.type = "text":
    pass.type = "password"
} 
function handleSubmit(){
    let fname = document.getElementById('firstName')
    var fname2 = fname.innerText
    console.log('First Name: ',fname.textContent)
    console.log('First Name2: ',fname2)
}
// Add your code here



function submitData(){
    // we start here

    // let formData = {
    //     name: name, 
    //     email: email
    // }

    const formData = {
        name: "Steve",
        email: "steve@steve.com",
      };

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      };
    

    fetch("http://localhost:3000/users", configurationObject)
        .then(function(res){
            return res.json()
        }).then(function(obj){
            //console.log(obj)

            let body = document.querySelector('body')

            console.log(obj.id)

            body.innerHTML = obj.id


        }).catch(function (error){
            console.log(error.message);
            document.body.innerHTML = error.message
        })

}

// submitData()
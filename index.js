// //     
// function submitData(name, email) {
//     const userData = {
//       name: name,
//       email: email,
//     };

// submitData (dataObject) 

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(submitData()),
//   };

//   function submitData(userData)
//   fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Sorry, you made a mistake");
//       console.log(error.message);
//     });

function submitData(name, email) {
    const userData = {
      name: name,
      email: email,
    };
  
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData),
    };
  
    return fetch('http://localhost:3000/users', configObj)
      .then((response) => response.json())
      .then((data) => {
        const id = data.id;
        document.body.innerHTML += `<p>Successfully created user with ID: ${id}</p>`;
      })
      .catch((error) => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
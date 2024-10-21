//1 Promise

function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000); 
    });
  }

  async function messages() {
    const msg = await helloWorld(); 
    console.log(msg); 
  }
  

  messages();

//2. Fetch

function ambilDataUser() {
    fetch("https://reqres.in/api/users")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(users => {
            users.data.forEach(user => {
                console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

ambilDataUser();


//3. Async Await

async function ambilDataUser() {
    try {
        const response = await fetch("https://reqres.in/api/users");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json(); 

        users.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

ambilDataUser();

//4. Axios
// ada di file index.html

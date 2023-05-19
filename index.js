

//Task 'Світлофор'

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function trafficLight() {
//   const lightsContainer = document.querySelectorAll('.lights-container .circle');
  
//   const redColor = lightsContainer[0];
//   const yellowColor = lightsContainer[1];
//   const greenColor = lightsContainer[2];

//   while (true) {
//     redColor.classList.remove('red-light');
//     yellowColor.classList.remove('yellow-light');
//     greenColor.classList.remove('green-light');

//     redColor.classList.add('red-light');
//     await delay(3000);
    
//     redColor.classList.remove('red-light');
//     yellowColor.classList.add('yellow-light');
//     await delay(2000);
    
//     yellowColor.classList.remove('yellow-light');
//     lightsContainer[2].classList.add('green-light');
//     await delay(3000);
    
//     greenColor.classList.remove('green-light');
//   }
// }

// const container = document.querySelector('.lights-container');
// trafficLight(container, 3000, 2000, 3000);



// Task 'PedestrianTrafficLight'

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// async function PedestrianTrafficLight() {
  
//   const lightsContainer = document.querySelectorAll('.lights-container .circle');

  
//   const redColor = lightsContainer[0];
//   const yellowColor = lightsContainer[1];
//   const greenColor = lightsContainer[2];
//   yellowColor.remove();

//   while (true) {
//     redColor.classList.remove('red-light');
//     greenColor.classList.remove('green-light');

//     redColor.classList.add('red-light');
//     await delay(3000);
    
//     redColor.classList.remove('red-light');
       
//     lightsContainer[2].classList.add('green-light');
//     await delay(3000);
    
//     greenColor.classList.remove('green-light');
//   }
// }

// const button = document.querySelector('.button');

// async function handleButtonClick() {
 
//   button.disabled = true; 

//   await delay(3000); 

//   button.disabled = false; 
// }

// button.addEventListener('click', handleButtonClick);

// const container = document.querySelector('.lights-container');
// PedestrianTrafficLight(container);


//Task 'gql'

// const endpoint = 'http://shop-roles.node.ed.asmer.org.ua/graphql';

//  const query = `
//   query cats($q: String){
//     CategoryFind(query: $q){
//       _id name
//     }
//   }`;

// const variables = {
//   q: "[{}]"
// };

// function gql(endpoint, query, variables) {

//   const bodyJson = {
//     query: query,
//     variables: variables
//   };

//   const fetchSettings = {
//     method: 'POST',
//     headers: {
//         "Content-Type": 'application/json',
//         "Accept": 'application/json'
//     },
//     body: JSON.stringify(bodyJson) 
//   };

//   return fetch(endpoint, fetchSettings)
//   .then(response => response.json())
// }


// (async () => {
//   const catQuery = `query cats($q: String){
//     CategoryFind(query: $q){
//       _id name
//     }
//   }`
//   const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
//   console.log(cats) 
  
  
//   const loginQuery = `query login($login:String, $password:String){
//     login(login:$login, password:$password)
//    }`
  
//   const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
//   console.log(token)
// })()


// Task 'jwtDecode'

function jwtDecode(token) {
  try {
  const newToken = token.split('.');
  const partSecond = newToken[1];
  const decodedToken = atob(partSecond);
  
  return JSON.parse(decodedToken);
  }
  catch(error) {
    console.log('undefined')
  }
  finally{
    console.log('ДЗ, мабуть, закінчено')
  } 
 
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";

const decodedToken = jwtDecode(token);
console.log(decodedToken);

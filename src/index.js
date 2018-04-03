import '../assets/sass/style.scss';
import axios from 'axios';

// GetPost
const btnGetTodo1 = document.getElementById('buttonGetTodo1');
btnGetTodo1.addEventListener('click', () => {
  const resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => resultElement.innerHTML = generateSuccessHTMLOutput(response))
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // we get information about the request: an error on different ways
        resultElement.innerHTML = generateErrorHTMLOutput(error)
      } else if (error.request) {
        // The request was made but no response was received
        // This happens when we do not have a network connection or maybe
        // the UrlBase was not good typed. Error response does not catch it
        resultElement.innerHTML = generateErrorNetworkHTMLOutput(error)
      } else {
        console.log('Error', error.message);
      }
    })
});

// GetPost with parameters
const btnGetTodo2 = document.getElementById('buttonGetTodo2');
btnGetTodo2.addEventListener('click', () => {
  let todoId = document.getElementById('todoId').value;
  const resultElement = document.getElementById('getResult2');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
    .then(response => resultElement.innerHTML = generateSuccessHTMLOutput(response))
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // we get information about the request: an error on different ways
        resultElement.innerHTML = generateErrorHTMLOutput(error)
      } else if (error.request) {
        // The request was made but no response was received
        // This happens when we do not have a network connection or maybe
        // the UrlBase was not good typed. Error response does not catch it
        resultElement.innerHTML = generateErrorNetworkHTMLOutput(error)
      } else {
        console.log('Error', error.message);
      }
    })
});

// PostPost
const submitPost = document.getElementById('submitPost');
submitPost.addEventListener('click', (e) => {
  e.preventDefault();
  let todoTitle = document.getElementById('todoTitle').value;
  const resultElement = document.getElementById('postResult');
  resultElement.innerHTML = '';

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: todoTitle,
    completed: false
  })
    .then(response => resultElement.innerHTML = generateSuccessHTMLOutput(response))
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // we get information about the request: an error on different ways
        resultElement.innerHTML = generateErrorHTMLOutput(error)
      } else if (error.request) {
        // The request was made but no response was received
        // This happens when we do not have a network connection or maybe
        // the UrlBase was not good typed. Error response does not catch it
        resultElement.innerHTML = generateErrorNetworkHTMLOutput(error)
      } else {
        console.log('Error', error.message);
      }
    })
});

////////////////////////////// Helper Functions /////////////////////////////////

// Fuctions for OutPut
const generateSuccessHTMLOutput = response =>
  `<h4>Result</h4>
  <h5>Status:</h5>
  <pre>${response.status} ${response.statusText}</pre>
  <h5>Headers:</h5>
  <pre>${JSON.stringify(response.headers, null, '\t')}</pre>
  <h5>Data:</h5>
  <pre>${JSON.stringify(response.data, null, '\t')}</pre>`


const generateErrorHTMLOutput = error =>
  `<h4>Result</h4>
  <h5>Message</h5>
  <pre>${error.message}</pre>
  <h5>Status:</h5>
  <pre>${error.response.status} ${error.response.statusText}</pre>
  <h5>Headers:</h5>
  <pre>${JSON.stringify(error.response.headers, null, '\t')}</pre>
  <h5>Data:</h5>
  <pre>${JSON.stringify(error.response.data, null, '\t')}</pre>`

const generateErrorNetworkHTMLOutput = error =>
  `<h4>Result</h4>
  <h5>Message</h5>
  <pre>NetWork error or wrong URL: ${!!error.request}</pre>`

// Function to Clear Outputs
var clearOutput = document.querySelectorAll('.btn-warning');
clearOutput.forEach(item => item.addEventListener('click', () => {
  document.getElementById('getResult1').innerHTML = ' ';
  document.getElementById('getResult2').innerHTML = ' ';
  document.getElementById('postResult').innerHTML = ' ';
}))

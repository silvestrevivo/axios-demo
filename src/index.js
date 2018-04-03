import '../assets/sass/style.scss';
import axios from 'axios';

const btnGetTodo1 = document.getElementById('buttonGetTodo1');
btnGetTodo1.addEventListener('click', performGetRequest1)


function performGetRequest1() {
  console.log('yes')
  var resultElement = document.getElementById('getResult1');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
}

function generateSuccessHTMLOutput(response) {
  return `<h4>Result</h4>
          <h5>Status:</h5>
          <pre>${response.status} ${response.statusText}</pre>
          <h5>Headers:</h5>
          <pre>${JSON.stringify(response.headers, null, '\t')}</pre>
          <h5>Data:</h5>
          <pre>${JSON.stringify(response.data, null, '\t')}</pre>`;
}

function generateErrorHTMLOutput(error) {
  return `<h4>Result</h4>
          <h5>Message</h5>
          <pre>${error.message}</pre>
          <h5>Status:</h5>
          <pre>${error.response.status} ${error.response.statusText}</pre>
          <h5>Headers:</h5>
          <pre>${JSON.stringify(error.response.headers, null, '\t')}</pre>
          <h5>Data:</h5>
          <pre>${JSON.stringify(error.response.data, null, '\t')}</pre>`;
}


const btnGetTodo2 = document.getElementById('buttonGetTodo2');
btnGetTodo2.addEventListener('click', performGetRequest2)

function performGetRequest2() {
  var todoId = document.getElementById('todoId').value;
  var resultElement = document.getElementById('getResult2');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
}


const submitPost = document.getElementById('submitPost');
submitPost.addEventListener('click', performPostRequest);

function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    userId: 1,
    title: todoTitle,
    completed: false
  })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
  e.preventDefault();
}


var clearOutput = document.querySelectorAll('.btn-warning');
clearOutput.forEach(item => item.addEventListener('click', function () {
  document.getElementById('getResult1').innerHTML = ' ';
  document.getElementById('getResult2').innerHTML = ' ';
  document.getElementById('postRsult').innerHTML = ' ';
}))


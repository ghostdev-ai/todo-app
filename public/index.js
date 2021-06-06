fetch('http://localhost:5000/api/todos')
    .then(response => response.json())
    .then(data => data.map(todo => {
        const { id, description } = todo;
        document.getElementById('myUL').innerHTML += `<li>${description}<span onclick='deleteTodo(${id})' class="close">\u00D7</span></li>`
    }));

async function addTodo() {
    const todo = document.getElementById('myInput').value;
    const response = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            description: todo 
        })
    });
    
    response.json().then(data => {
        const { id, description } = data;
        document.getElementById('myUL').innerHTML += `<li>${description}<span onclick='deleteTodo(${id})' class="close">\u00D7</span></li>`
    });

    document.getElementById('myInput').value = '';
}

async function deleteTodo(id) {
    await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: 'DELETE'
    });

    document.getElementById('myUL').innerHTML = ''; 
    fetch('http://localhost:5000/api/todos')
    .then(response => response.json())
    .then(data => data.map(todo => {
        const { id, description } = todo;
        document.getElementById('myUL').innerHTML += `<li>${description}<span onclick='deleteTodo(${id})' class="close">\u00D7</span></li>`
    }));
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);
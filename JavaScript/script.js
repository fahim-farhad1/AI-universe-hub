const assignmentDataLoad = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(responce => responce.json())
    .then(data => displayAssignmentData(data.data.tools));
    }
const displayAssignmentData = tools => {
    console.log(tools);
    const toolsContainer =document.getElementById('tools-container');
    tools.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML = `
    <div class="card h-100">
        <img src="${tool.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>
    `;
    toolsContainer.appendChild(toolDiv);

    })
}

assignmentDataLoad();

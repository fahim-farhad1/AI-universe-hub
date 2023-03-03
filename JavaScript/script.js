const assignmentDataLoad = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(responce => responce.json())
    .then(data => displayAssignmentData(data.data.tools));
    }
const displayAssignmentData = tools => {
    console.log(tools);
    const seeMore = document.getElementById('see-more');
    if (tools.length > 6){
        tools = tools.slice(0,6);
          seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none');
    }
    const toolsContainer =document.getElementById('tools-container');
    tools.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML = `
    <div class="card h-100">
        <img src="${tool.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.features}</p>
            <hr>
            <h5 class="card-title">${tool.name}</h5>
            <i style="font-size:24px" class="fa">&#xf073;  ${tool.published_in}</i>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    `;
    toolsContainer.appendChild(toolDiv);

    })
}

// Show all API Tools 
document.getElementById('see-more').addEventListener('click', function(){

})




assignmentDataLoad();

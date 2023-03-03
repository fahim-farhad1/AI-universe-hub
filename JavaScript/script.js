const apiDataLoad = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(responce => responce.json())
    .then(data => displayapiData(data.data.tools));
    }
    
const displayapiData = tools => {
    console.log(tools);
        const seeMore = document.getElementById('see-more');
    if (tools.length > 6){
        tools = tools.slice(0,6);
          seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none');
    }
    loadingSpinner (true);
    const toolsContainer =document.getElementById('tools-container');
    tools.forEach(tool => {
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML = `
    <div class="card h-100">
        <img src="${tool.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <ol>
                <li>${tool.features[0]}</li>
                <li>${tool.features[1]}</li>
                <li>${tool.features[2]}</li>
                
            </ol>
            
            <hr>
            <h5 class="card-title">${tool.name}</h5>
            <i style="font-size:24px" class="fa">&#xf073;  ${tool.published_in}</i>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    `;
    toolsContainer.appendChild(toolDiv);

    })
    loadingSpinner(false);
}



// Show all API Tools 
// document.getElementById('btn-see-more').addEventListener('click', function(){
   
// })
const loadingSpinner = isloading => {
    const loader = document.getElementById('Spinner');
    if(isloading){
        loader.classList.remove('d-none');
    }
    else{
        loader.classList.add('d-none');
    }
}
apiDataLoad();

//-----------API Data Load-------------------
const apiDataLoad = () => {
        //-----------Spinner Start------------
    loadingSpinner (true);
    //-------API Data---------------
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(responce => responce.json())
    .then(data => displayapiData(data.data.tools));
    }

//-----------Displayed API Data--------------
const displayapiData = tools => {
    
    // ---------------fixt six card show----------------

        const seeMore = document.getElementById('see-more');
    if (tools.length > 6){
        tools = tools.slice(0,6);
          seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none');
    }


    //--------Card Element's---------------
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
            <button style="margin-left: 250px;" data-bs-toggle="modal" data-bs-target="#toolDetielsModal" onclick="modalAIInfo()" ><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    `;
    toolsContainer.appendChild(toolDiv);
    })
    //--------Spinner End----------------
    loadingSpinner(false);

    //-------------Display Modal Informetion-------------
 const modalAIInfo = () =>{
    const modalContainer = document.getElementById('tools-detials');
        modalContainer.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        </div>
        <div class="col">
        <div class="card">
        <img src="${tools.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        </div>
        `;
 }
    

}







//-----------Spinner--------------
const loadingSpinner = isloading => {
    const loader = document.getElementById('Spinner');
    if(isloading){
        loader.classList.remove('d-none');
    }
    else{
        loader.classList.add('d-none');
    }
}




















//------------Show all API Tools-------------
document.getElementById('btn-see-more').addEventListener('click', function(){
    
})

apiDataLoad();

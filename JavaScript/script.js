//-----------API Data Load-------------------
const apiDataLoad = () => {
  //-----------Spinner Start------------
  loadingSpinner(true);
  //-------API Data---------------
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((responce) => responce.json())
    .then((data) => displayapiData(data.data.tools.slice(0, 6)));
};

//-----------Displayed API Data--------------
const displayapiData = (tools) => {
  //--------Card Element's---------------
  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.innerHTML = " ";
  tools.forEach((tool) => {
    console.log(tool);
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("col");
    toolDiv.innerHTML = `
      <div class="card h-100">
          <img src="${tool.image}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
              <h5 class="card-title ">${tool.name}</h5>
                    <p>${tool.features[0]}</p>
                    <p>${tool.features[1]}</p>
                    <p>${tool.features[2]}</p>
              <hr>
              <h5 class="card-title">${tool.name}</h5>
              <i style="font-size:24px" class="fa">&#xf073;  ${tool.published_in}</i>
              <button style="margin-left: 250px;" data-bs-toggle="modal" data-bs-target="#toolDetielsModal" 
              onclick = " modalAIInfo ('${tool.id}')" ><i class="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>
      `;
    toolsContainer.appendChild(toolDiv);
  });
  //--------Spinner End----------------
  loadingSpinner(false);
};

//-----------Spinner--------------
const loadingSpinner = (isloading) => {
  const loader = document.getElementById("Spinner");
  if (isloading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};

const seeMore = document.getElementById("see-more");
seeMore.addEventListener("click", function () {
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((responce) => responce.json())
    .then((data) => displayapiData(data.data.tools));
  seeMore.classList.add("d-none");
});

//-------------access Modal Informetion-------------
const modalAIInfo = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((responce) => responce.json())
    .then((data) => showModalInfo(data.data));
};

// show modal data

const showModalInfo = (data) => {
  const modalCartTitle = document.getElementById("modal-cart-title");
  // console.log(data.pricing);
  modalCartTitle.innerHTML = `
  <h5 class="card-title">${data.description}</h5>
        `;
  // const purchase = document.getElementsByClassName("purchase");
  // data.pricing.map((price) => {
  //   console.log(price);
  //   purchase.innerHTML = `
  //   <div class="purchase p-3 m-2"><p>${price.plan}</p></div>
  //   `;
  // });

  const purchase = document.getElementById("purchase");
  let pricing = data.pricing;
 console.log(data.pricing);
  pricing.forEach((element) => {
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
        <div class="p-2 bg-info ms-2 rounded">
            <p>
                ${element.price}
              </p>
              <p>
              ${element.plan}
              </p>
        </div>
        `;
    purchase.appendChild(createDiv);
  });

  const modalImg = document.getElementById("modal-img");
  modalImg.setAttribute("src", data.image_link[0]);

  const questionText = document.getElementById("question-text");
  if (data.input_output_examples === null) {
    questionText.innerText = "Can you give any example?";
  } else {
    questionText.innerText = data.input_output_examples[0].input;
  }

  const answerText = document.getElementById("answer-text");
  if (data.input_output_examples === null) {
    answerText.innerText = "No! Not Yet! Take a break!!!";
  } else {
    answerText.innerText = data.input_output_examples[0].output;
  }

  const featuresData = document.getElementById("features");
  const featuresNames = data.features;
  for (const key in featuresNames) {
    const createLI = document.createElement("li");
    createLI.innerText = featuresNames[key].feature_name;
    featuresData.appendChild(createLI);
  }

  const integrationData = document.getElementById("integration");
  const integrationName = data.integrations
    ? data.integrations
    : ["Do Not Found"];
  integrationName.forEach((element) => {
    const createLI = document.createElement("li");
    createLI.innerText = element;
    integrationData.appendChild(createLI);
  });
};

apiDataLoad();

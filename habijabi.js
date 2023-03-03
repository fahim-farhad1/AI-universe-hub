if(firstInputNumber >= 0 && secondInputNumber >= 0){
    if(typeof firstInputNumber === 'number' && typeof secondInputNumber === "number"){
        tr.classList.add("flex","gap-3","md:gap-5", "lg:gap-10", "items-center", "mt-5");
        tr.innerHTML = `
        <td>${tableRowCount}</td>
        <td>${cardHeading}</td>
        <td><span>${calcArea}</span> <span>cm</span><sup>2</sup></td>
        <td><button onclick="centimeterToMeterConvert(event)" class="bg-blue text-white py-2 px-4 rounded-md">Convert to m<sup>2</sup></button></td>
        <td><button onclick="deleteRow(event)"><i class="fa-solid fa-xmark text-3xl text-red-700"></i></button></td>
        `;
    }
}
// Write to Md. Zahidul Islam Shohan

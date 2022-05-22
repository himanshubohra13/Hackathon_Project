// const startButton = document.getElementById('startButton');
// const pauseButton = document.getElementById('pauseButton');
// const stopButton = document.getElementById('stopButton');
// const sendButton = document.getElementById('sendButton');
// const listenButton = document.getElementById('listenButton');
const body = document.getElementById('body');
// const audio = document.getElementById('audi');
const symptoms = document.getElementById('symptoms');
const drugs = document.getElementById("drugs")
const addSymptoms = document.getElementById('addSymptoms');
const addDrugs = document.getElementById("addDrugs");
// const statusShow = document.getElementById('statusShow');
const sendSymptoms = document.getElementById('sendSymptoms');
const textSymptomModal = document.getElementById('exampleModal');
const pseudoSend = document.getElementById('pseudoSend');
const accordionId = document.getElementById('accordionExample');
const advice = document.getElementById('advice');
const drugSugg = document.getElementById('drugpre');

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

pseudoSend.classList.add('disabled');
textSymptomModal.addEventListener('show.bs.modal', function () {
    sendSymptoms.classList.add('disabled');
})
document.getElementById('SymptomInput').addEventListener('change', (event) => {
    console.log('inputinside');
    console.log(event.target.value)
    if (event.target.value.trim() == '') {
        console.log('inside if');
        sendSymptoms.classList.add('disabled');
    }
    else {
        console.log('inside else')
        sendSymptoms.classList.remove('disabled');
    }
})

sendSymptoms.addEventListener('click', () => {
    const symptomsInput = document.querySelectorAll('.symptoms>input');
    const drugInput = document.querySelectorAll('.drugs>input');
    console.log(symptomsInput);
    console.log(drugInput);
    let dataToServer = new FormData();
    symptomsInput.forEach((symptom, index) => {
        if (symptom.value.trim() !== '') {
            dataToServer.append(`symptoms${index}`, symptom.value);
        }
    })
    drugInput.forEach((drug, index) => {
        if (drug.value.trim() !== '') {
            dataToServer.append(`drug${index}`, drug.value);
        }
    })
    dataToServer.append('symptomsdays', document.getElementById('SymptomInput').value);
    dataToServer.append('drugsdays', document.getElementById('DrugInput').value);

    axios.post('', dataToServer, {
        headers: {
            "Content-Type": 'multipart/form-data',
            "X-CSRFToken": getCookie("csrftoken"),
        },
    })
        .then((response) => {
            accordionId.parentElement.style.display = 'block';
            advice.textContent = advice.textContent + response.data.advice;
            const drugs = response.data.rdrugs;
            console.log(drugs)
            let recomm = '';
            for (drug in drugs) {
                const list = document.createElement('li');
                list.textContent = drugs[drug];
                document.getElementById("drugpre").appendChild(list)
            }
            // const output = response.data.output;
            // console.log(output)
            // for (dis in output) {
            //     const retElement = accordionMaker(dis, output[dis].desc, output[dis].prec)
            //     document.getElementById("accordionExample").appendChild(retElement);
            // }
        })
        .then((error) => {
            console.log(error);
        })

})
let sympcount = 1;
let sym = 'sym';
let drug = 'drug';
let drugcount = 1;
function deleteSymptom(number, type) {
    console.log(type)
    toDelete = document.getElementById(`inputGroup-sizing-default${type}${number}`);
    toDelete.parentElement.remove();

}
function makeSymptom() {
    let element = `
    <span class="input-group-text" id="inputGroup-sizing-default${sym}${sympcount}"
      >Symptoms</span
    >
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default${sym}${sympcount}"
    /><span class="input-group-text" id="inputGroup-sizing-defaultCancel${sympcount}" onClick=deleteSymptom(${sympcount},${sym})
    ><i class="fas fa-times"></i></span
    >
    `
    const element1 = document.createElement('div');
    element1.classList.add('input-group');
    element1.classList.add('my-3');
    element1.classList.add('symptoms');
    element1.innerHTML = element;
    return element1;


}
function makedrug() {
    let element = `
    <span class="input-group-text" id="inputGroup-sizing-default${drug}${drugcount}"
      >Drug</span
    >
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default${drug}${drugcount}"
    /><span class="input-group-text" id="inputGroup-sizing-defaultCancel${drug}${drugcount}" onClick=deleteSymptom(${drugcount},${drug})
    ><i class="fas fa-times"></i></span
    >
    `
    const element1 = document.createElement('div');
    element1.classList.add('input-group');
    element1.classList.add('my-3');
    element1.classList.add('drugs');
    element1.innerHTML = element;
    return element1;


}

let userStream;
let recordedChunks = [];
let mediaRecorder;
addSymptoms.addEventListener('click', () => {
    // startButton.classList.add('disabled');
    pseudoSend.classList.remove('disabled');
    const newelement = makeSymptom();
    symptoms.appendChild(newelement);

    sympcount++;
})
addDrugs.addEventListener('click', () => {
    // startButton.classList.add('disabled');
    pseudoSend.classList.remove('disabled');
    const newelement = makedrug();
    drugs.appendChild(newelement);
    console.log(drugcount)
    drugcount++;
})


function accordionMaker(diseasename, diseasedesc, precArray) {
    const listParent = document.createElement('ul');
    listParent.classList.add('list-group', 'list-group-flush');
    precArray.forEach(list => {
        let listTag = document.createElement('li');
        listTag.classList.add('list-group-item');
        listTag.textContent = list;
        listParent.append(listTag);
    });
    const accordionParent = document.createElement('div');
    accordionParent.classList.add('accordian-item');

    let accordionItem = `
<h2 class="accordion-header" id="heading${diseasename.split(" ").join('').split("(").join('').split(")").join('')}">
  <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapse${diseasename.split(" ").join('').split("(").join('').split(")").join('')}"
    aria-expanded="true"
    aria-controls="collapse${diseasename.split(" ").join('').split("(").join('').split(")").join('')}"
  >
    ${diseasename}
  </button>
</h2>
<div
  id="collapse${diseasename.split(" ").join('').split("(").join('').split(")").join('')}"
  class="accordion-collapse collapse"
  aria-labelledby="heading${diseasename.split(" ").join('').split("(").join('').split(")").join('')}"
  data-bs-parent="#accordionExample"
>
  <div class="accordion-body">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <h5 class="card-header">Disease Description</h5>
          <div class="card-body">
            <p class="card-text">${diseasedesc}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <h5 class="card-header">Disease Precautions</h5>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              ${listParent.innerHTML}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
    accordionParent.innerHTML = accordionItem;
    return accordionParent;

}
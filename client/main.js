const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

let inspoSection = document.querySelector('#inspos')
let input = document.querySelector('input')
let addBtn = document.querySelector('button')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};




const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res=> {
        const data = res.data;
        alert(data);
    });
};

 
function getInspo() {
    axios.get('http://localhost:4000/api/inspos')
    .then(res => {
        for(let i = 0; i < res.data.length; i++){
            let inspo = document.createElement('p')
            inspo.textContent = '!' + res.data[i]
            inspoSection.appendChild(inspo)
        }
    })
}

function addInspo(){
    let body = {
        text: input.value
    }
    axios.post('http://localhost:4000/api/inspos', body)
    .then(res => {
        for(let i = 0; i < res.data.length; i++){
            let inspo = document.createElement('p')
            inspo.textContent = '!' + res.data[i]
            inspoSection.appendChild(inspo)
        }
        input.value = ''
    })
}

// const getParamsSubmit = document.getElementById('inspoList')

// getParamsSubmit.addEventListener('click', () => {
//     axios
//         .get(`http://localhost:4000/api/inventory/${paramsInput.value}`)
//         .then(res => addToView([res.data]))
// });


// function addToView(dataArr) {
//     responseSection.innerHTML = null;
// }



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)

addBtn.addEventListener('click', addInspo)

getInspo()
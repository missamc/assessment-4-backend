const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res=> {
        const data = res.data;
        alert(data);
    });
};


const getParamsSubmit = document.getElementById('getParamsSubmit')

getParamsSubmit.addEventListener('click', () => {
    axios
        .get(`http://localhost:4000/api/inventory/${paramsInput.value}`)
        .then(res => addToView([res.data]))
});

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
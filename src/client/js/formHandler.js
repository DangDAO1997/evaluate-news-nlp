import { checkForName } from "./nameChecker"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    let checkMsg = checkForName(formText);

    if (checkMsg) {
        alert(checkMsg);
    }

    if (checkMsg === 'Name Invalid!') {
        return;
    }

    console.log("::: Form Submitted :::")
    fetch(`http://localhost:8080/news?name=${formText}`)
        .then(res => res.json())
        .then(res => {
            let data = "";
            for (const e of res) {
                data += `<br>${e.title}<br>`;
            }
            return data;
        })
        .then(function (res) {
            if (!res) {
                res = "Not Found Result";
            }
            document.getElementById('results').innerHTML = res;
        })
}

export { handleSubmit }

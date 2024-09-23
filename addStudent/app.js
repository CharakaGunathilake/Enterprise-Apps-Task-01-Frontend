let image = document.getElementById("imgSection");
image.innerHTML = `<img src="/img/icon.png" style="height:150px; border-radius: 50%; border: 10px solid #FEDE00;" alt="profile picture"></img>`
function addStudent() {
    let studentImage = document.getElementById("studentImage").value;
    let studentName = document.getElementById("studentName").value;
    let studentAge = document.getElementById("studentAge").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let guardianName = document.getElementById("guardianName").value;
    let guardianAddress = document.getElementById("guardianAddress").value;
    let guardianContact = document.getElementById("guardianContact").value;

    // ---------------------------------------------------------------------
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "address": guardianAddress,
        "age": studentAge,
        "contact": guardianContact,
        "email": studentEmail,
        "guardianName": guardianName,
        "name": studentName
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:8080/student/add", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)

        })
        .catch((error) => console.error(error));
}
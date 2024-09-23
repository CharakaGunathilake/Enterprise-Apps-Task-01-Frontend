function addStudent() {
    let studentName = document.getElementById("studentName").value;
    let studentAge = document.getElementById("studentAge").value;
    let studentEmail = document.getElementById("studentEmail").value;
    let guardianName = document.getElementById("guardianName").value;
    let guardianAddress = document.getElementById("guardianAddress").value;
    let guardianContact = document.getElementById("studentName").value;

    // ---------------------------------------------------------------------
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "name": studentName,
        "age": studentAge,
        "email": studentEmail,
        "guardianName": guardianName,
        "address": guardianAddress,
        "age": guardianContact
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
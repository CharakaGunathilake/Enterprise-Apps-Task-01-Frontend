fetch("http://localhost:8080/student/all")
.then(res => res.json())
.then(data => {
    console.log("Working");
    let studentTable = document.getElementById("studentTable");
    let tableBody="";
    data.forEach(element => {
        tableBody = `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.email}</td>
                    <td>${element.guardianName}</td>
                    <td>${element.address}</td>
                    <td>${element.contact}</td>
                </tr>
    `;
        console.log(element);       
    });
    studentTable.innerHTML += tableBody; 
});
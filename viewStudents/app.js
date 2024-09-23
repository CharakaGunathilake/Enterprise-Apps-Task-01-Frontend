fetch("http://localhost:8080/student/all")
    .then(res => res.json())
    .then(data => {
        let studentTable = document.getElementById("studentTable");
        let tableBody = `<tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>E-mail</th>
                    <th>Guardian</th>
                    <th>Address</th>
                    <th>Contact</th>
                </tr>`;
        let index = 1;
        data.forEach(element => {
            tableBody += `
                <tr onclick="showInfo(${[index++]})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.email}</td>
                    <td>${element.guardianName}</td>
                    <td>${element.address}</td>
                    <td>${element.contact}</td>
                </tr>
            `;
        });
        studentTable.innerHTML = tableBody;
        showInfo = (index) => {
            let name = studentTable.rows[index].cells.item(0).innerHTML;
            
            fetch(`http://localhost:8080/student/findByName=${name}`)
                .then(res => res.json())
                .then(data => {
                    document.getElementById("modalContent").innerHTML = `
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Name: ${data.name}</h1>
                        </div>
                        <section class="d-flex justify-content-between p-3">
                            <div>
                                <img src="/img/icon.png" style="height:100px; border-radius: 50%; border: 10px solid #FEDE00;" alt="profile picture"></img>
                            </div>
                            <div class="modal-body p-0 px-4">
                                <h1 class="fs-6">Age: ${data.age}</h1>
                                <h1 class="fs-6">Email: ${data.email}</h1>
                                <h1 class="fs-6">Address: ${data.address}</h1>
                            </div>
                        </section>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>`
                });
        }
    });


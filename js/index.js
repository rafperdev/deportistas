var deportistas =[];

/*
[
    {
        "documento": 4512,
        "nombre": "Rafa",
        "telefono": 592,
        "email": "r@gmail.com"
    },
    {
        "documento": 45645,
        "nombre": "Ana",
        "telefono": 7854,
        "email": "ana@gmail.com"
    }
]
*/
const guardar = () => {
    let doc = document.getElementById("doc").value;
    let nom = document.getElementById("nom").value;
    let tel = document.getElementById("tel").value;
    let email = document.getElementById("correo").value;

    let persona = {};
    persona.documento = doc;
    persona.nombre = nom;
    persona.telefono = tel;
    persona.email = email;

    deportistas.push(persona);
    alert("Guardado con éxito");
    limpiar();
}

const listar = () => {
    let listado = document.getElementById("listado");
    listado.innerHTML = "";
    for (const dep of deportistas) {
        listado.innerHTML += `<tr>
                                <th>${dep.documento}</th>
                                <th>${dep.nombre}</th>
                                <th>${dep.telefono}</th>
                                <th>${dep.email}</th>
                            </tr>`;
    }
}

const limpiar = () => {
    document.getElementById("doc").value = "";
    document.getElementById("nom").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("correo").value = "";
}
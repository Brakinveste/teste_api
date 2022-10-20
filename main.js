const fetchApiData = () => {
    const url = "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
          const list = document.querySelector('#prod_list');

/*
            data.map((item) => {
                const li = document.createElement('li');

                li.setAttribute('id', item.id);
                li.innerHTML = item.name;
                list.appendChild(li);
            })
*/
        })
         
   
}





//    https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1


//   let usuarios = JSON.parse(data)





















































/*
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(usuario) {

    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHtml = usuario.id
    tdNome.innerHtml = usuario.nome

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;

}

function main () {
    
    let data = fazGet("https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1")
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela")
   
  
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha)

    });
  
    
    console.log(usuarios)
}

main()

*/
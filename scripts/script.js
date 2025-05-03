const listImp = document.getElementById('listimp');
const classificacao = document.getElementById('sort');

let impressoras = []

//Clear()
LoadData()

//Cria o objeto com base nos input (informações)
function CreateObj(modelo,local,ip,paginas)
{
    if(modelo != '' && local != '' && ip != '' && paginas != '')
    {
        //ISSO AQUI É UM OBJETO!!!
        let impressora = 
        {
            Modelo: modelo,
            Local: local,
            Ip: ip,
            Paginas: paginas
        }

        document.getElementById('model').value = ''
        document.getElementById('local').value = ''
        document.getElementById('ip').value = ''
        document.getElementById('page').value = ''

        return pushList(impressora)
    }
    else
    {
        return window.alert("ALGUM CAMPO ESTÁ VAZIO!!!")
    }

}

//Adiciona o objeto em uma Array
function pushList(impObj)
{
    impressoras.push(impObj)

    SaveData(impObj)
}

//Mostra uma lista com os objetos salvos na Array
function showList()         
{
    listImp.innerHTML = ''

    impressoras.sort((a,b) => a.Paginas.localeCompare(b.Paginas))

    for (let i = 0; i < impressoras.length; i++)
    {
        let createList = document.createElement("option")
        createList.text = `
        Imp da Marca: ${impressoras[i].Modelo} --
        Localização: ${impressoras[i].Local} -- 
        IP: ${impressoras[i].Ip} -- 
        Total de: ${impressoras[i].Paginas} páginas
        `
        listImp.appendChild(createList)
    }    
}

function allList()
{
    let listDiv = document.getElementById("all_list");
    listDiv.innerHTML = "";

    let initial = document.createElement("p");
    initial.textContent = " ";
    listDiv.appendChild(initial);
    
    switch (classificacao.value) 
    {
        case "0":
            impressoras.sort((a,b) => a.Modelo.localeCompare(b.Modelo))
            break;
        case "1":
            impressoras.sort((a,b) => a.Local.localeCompare(b.Local))
            break;
        case "2":
            impressoras.sort((a,b) => a.Ip.localeCompare(b.Ip))
            break;
        case "3":
            impressoras.sort((a,b) => a.Paginas.localeCompare(b.Paginas))
            break;
    }
    impressoras.forEach(impressoras => 
    {
        let p = document.createElement("p")
        
        p.innerHTML = `Marca da Impressora: ${impressoras.Modelo}, Se localiza em: ${impressoras.Local}, IP: <a href="http://${impressoras.Ip}" target="_blank">${impressoras.Ip}</a>, Quantidade de Paginas: ${impressoras.Paginas}`

        listDiv.appendChild(p)
    });
    console.log('MANO????');
    let final = document.createElement("p");
    final.textContent = " ";
    listDiv.appendChild(final);
}

//Mostra uma lista com os objetos salvos na Array com ID
function allListID()
{
    let listDiv = document.getElementById("all_listID");
    let numID =0;
    listDiv.innerHTML = "";

    let initial = document.createElement("p");
    initial.textContent = " ";
    listDiv.appendChild(initial);
    
    switch (classificacao.value) 
    {
        case "0":
            impressoras.sort((a,b) => a.Modelo.localeCompare(b.Modelo))
            break;
        case "1":
            impressoras.sort((a,b) => a.Local.localeCompare(b.Local))
            break;
        case "2":
            impressoras.sort((a,b) => a.Ip.localeCompare(b.Ip))
            break;
        case "3":
            impressoras.sort((a,b) => a.Paginas.localeCompare(b.Paginas))
            break;
    }
    impressoras.forEach(impressoras => 
    {
        let p = document.createElement("p")
        numID++;
        p.textContent = `ID: ${numID} ,Marca da Impressora: ${impressoras.Modelo}, Se localiza em: ${impressoras.Local}, IP: ${impressoras.Ip}, Quantidade de Paginas: ${impressoras.Paginas}`

        listDiv.appendChild(p)
    });
    console.log('MANO????');
    let final = document.createElement("p");
    final.textContent = " ";
    listDiv.appendChild(final);
    return numID = 0;
}

function removeImp(id)
{
    if(id != 0 || id == null)
    {
        const confirmar = confirm(`Você selecionou o ID: ${id}! Deseja realmente deletar?`);
        if(confirmar == true)
        {
            impressoras.splice(id-1,1);
            //SaveData();
            alert(`Impressora ID: ${id} deletada com sucesso!`);
            allListID();
        }
        //return alert(`Você selecionou o ID: ${id}, da marca: ${impressoras[id-1].Modelo}, Se localiza em: ${impressoras[id-1].Local}, do IP: ${impressoras[id-1].Ip}, com ${impressoras[id-1].Paginas} paginas.`)
    }
    else
    {
        return alert("ID inválido");
    }
}
//Manipulação de paginas
function GoAddImp()
{
    window.location.href = "bilhetagem.html"
}

function GoListImp()
{
    window.location.href = "listagem.html"
}

function GoEditPagImp()
{
    window.location.href = "editarpagina.html"
}

function GoDelImp()
{
    window.location.href = "detelar.html"
}

//Salvamento e Carregamento de dados
function SaveData()
{
    localStorage.setItem('impObj', JSON.stringify(impressoras))
}

function LoadData()
{
    if(localStorage.getItem('impObj') == null){return}
    else
    {
        const impObj = localStorage.getItem('impObj');

        impressoras = JSON.parse(impObj);
    }

}

function Clear()
{
    localStorage.clear('impObj')
    localStorage.removeItem('impObj')
}
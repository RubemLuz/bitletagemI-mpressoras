const listImp = document.getElementById('listimp')

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
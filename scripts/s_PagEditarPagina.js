
allListID();

function Editar(id) 
{
    let modeloImp = document.getElementById('modelImp').value;
    let localImp = document.getElementById('localImp').value;
    let ipImp = document.getElementById('ipImp').value;
    let pagImp = document.getElementById('pagImp').value;

    if(id <= 0 || id > impressoras.length) { alert("ID inválido, por favor insira um número válido."); return; }

    for(let i = 0; i < impressoras.length; i++)
    {
        if(id == i + 1)
        {
            if(modeloImp !== ""){ impressoras[id].Modelo = modeloImp; console.log("Modelo alterado");};
            if(localImp !== ""){ impressoras[id].Local = localImp; console.log("Local alterado");};
            if(ipImp !== ""){ impressoras[id].Ip = ipImp; console.log("Ip alterado");};
            if(pagImp !== ""){ impressoras[id].Paginas = pagImp; console.log("Paginas alterado");};                     

            SaveData();
            alert(`Impressora ID: ${id} editada com sucesso!`);
            allListID();
            return;
        }
    }
}

allListID();

function Editar(id) 
{
    if(adminON || subON)
    {
        let modeloImp = document.getElementById('modelImp').value;
        let localImp = document.getElementById('localImp').value;
        let ipImp = document.getElementById('ipImp').value;
        let pagImp = document.getElementById('pagImp').value;

        if(id <= 0 || id - 1 > impressoras.length) { alert("ID inválido, por favor insira um número válido."); document.getElementById('idSelect').focus(); return; }

        for(let i = 0; i < impressoras.length; i++)
        {
            if(id == i + 1)
            {
                //alert(`Você está editando a impressora ID: ${id} que é quivalente a array do id ${i}.`);
                if(modeloImp !== ""){ impressoras[i].Modelo = modeloImp; console.log("Modelo alterado");};
                if(localImp !== ""){ impressoras[i].Local = localImp; console.log("Local alterado");};
                if(ipImp !== ""){ impressoras[i].Ip = ipImp; console.log("Ip alterado");};
                if(pagImp !== ""){ impressoras[i].Paginas = pagImp; console.log("Paginas alterado");};                     

                SaveData();
                alert(`Impressora ID: ${id} editada com sucesso!`);
                allListID();
                return;
            }
        }
    }else
    {
        alert("Você não tem permissão para editar impressoras!");
        return;
    }
}

allListID();

function removeImp(id)
{
    if(id != 0 || id == null)
    {
        const confirmar = confirm(`Você selecionou o ID: ${id}! Deseja realmente deletar?`);
        if(confirmar == true)
        {
            impressoras.splice(id-1,1);
            SaveData();
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


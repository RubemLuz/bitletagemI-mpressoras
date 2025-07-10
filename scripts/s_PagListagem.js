allList()

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
    let final = document.createElement("p");
    final.textContent = " ";
    listDiv.appendChild(final);
}

let impressoras = []
const listaImpressora = document.getElementById('listimp')

function AddImp(modelo,local,ip,paginas)
{
    if(modelo != '' && local != '' && ip != '' && paginas != '')
    {
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

        return salveImp(impressora)
    }
    else
    {
        return window.alert("ALGUM CAMPO ESTÁ VAZIO!!!")
    }

}

function salveImp(impObj)
{
    impressoras.push(impObj)
}

function valuePag()         
{
    let getImp = document.createElement("option")
    getImp.text = `Impresora da Marca: ${impressoras[0].Modelo}, Se encontra em: ${impressoras[0].Local}, Com o IP: ${impressoras[0].Ip}, Com um total de: ${impressoras[0].Paginas} páginas`
    return listaImpressora.appendChild(getImp)
    
    //return window.alert(impressoras[0].Modelo + impressoras[0].Local + impressoras[0].Ip + impressoras[0].Paginas)
}
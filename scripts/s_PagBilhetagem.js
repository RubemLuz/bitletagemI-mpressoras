showList();

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

        pushList(impressora);
        
        return showList();
    }
    else
    {
        return window.alert("ALGUM CAMPO ESTÁ VAZIO!!!")
    }

}
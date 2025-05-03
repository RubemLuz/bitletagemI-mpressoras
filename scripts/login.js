const userAdmin = 
{
    Login: 'admin',
    Senha: '123456'
}

function Logar(login,senha)
{
    if(login == userAdmin.Login && senha == userAdmin.Senha)
    {
        window.location.href = "bilhetagem.html"
    }else
    {
        window.alert('O login ou a senha está errada!')
        document.getElementById('loginuser').value = ''
        document.getElementById('senhauser').value = ''
    }
}

function Deslogar()
{
    window.location.href = "index.html"
}
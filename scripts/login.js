const userAdmin = 
{
    Login: 'admin',
    Senha: '123456'
}
const userSub =
{
    Login: 'admin',
    Senha: '112233'
}
let userGuest = [];

// Verifica se já existe um usuário convidado no localStorage
if (localStorage.getItem("userGuest") == null) { }else
{
    // Se existir, carrega os usuários convidados
    const users = localStorage.getItem("userGuest");
    userGuest = JSON.parse(users);
}
console.log(userGuest);

function CreateUser()
{
    const loginAdm = prompt("Digite o login do administrador:");
    const senhaAdm = prompt("Digite a senha do administrador:");

    if(loginAdm == userAdmin.Login && senhaAdm == userAdmin.Senha)
    {    
        // Função para criar um novo usuário
        let userLogin;
        let userSenha;

        while(true)
        {
            const nameLogin = prompt("Digite o login do usuário:");
        
            if(nameLogin !== null && nameLogin !== "")
            {
                const confirmLogin = confirm(`O login do usuário será: ${nameLogin} \n\nConfirma?`);
        
                if(confirmLogin){ userLogin = nameLogin; break;} else {alert("Você deve confirmar o login!"); continue;}
        
            }else{ alert("Você deve informar um login válido!"); continue;}
        }
        while(true)
        {
            const nameSenha = prompt("Digite a senha do usuário:");

            if(nameSenha !== null && nameSenha !== "")
            {
                const confirmSenha = confirm(`A senha do usuário será: ${nameSenha} \n\nConfirma?`);

                if(confirmSenha){ userSenha = nameSenha; break;} else { alert("Você deve confirmar o login!"); continue;}

            }else { alert("Você deve informar uma senha válida!"); continue;}
        }

        alert(`Usuário ${userLogin} criado com sucesso!`);
        userGuest.push({Login: userLogin, Senha: userSenha});
        localStorage.setItem("userGuest", JSON.stringify(userGuest));
    }    
    else
    {
        alert("Você não tem permissão para criar usuários!");
        return;
    }



}

function Logar(login,senha)
{
    if(login == userAdmin.Login && senha == userAdmin.Senha)
    {
        window.location.href = "bilhetagem.html"
        return;
    }

    for(let i = 0; i < userGuest.length; i++)
    {
        if(login == userGuest[i].Login && senha == userGuest[i].Senha)
        {
            window.location.href = "bilhetagem.html"
            return;
        }
        else if(i == userGuest.length - 1)
        {
            window.alert('O login ou a senha está errada!')
            document.getElementById('loginuser').value = ''
            document.getElementById('senhauser').value = ''
            return;
        }   
    }


}

function Deslogar()
{
    window.location.href = "index.html"
}
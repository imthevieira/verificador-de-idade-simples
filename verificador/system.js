function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById("res")  
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gen = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gen = 'Homem'
           if (idade >= 0 && idade < 10) {
               //kid
               img.setAttribute('src', 'foto-bebe-m.png')
           } else if (idade >= 10 && idade < 21) {
            img.setAttribute('src', 'foto-jovem-m.png')
           } else if (idade < 50) {
            img.setAttribute('src', 'foto-adulto-m.png')
           } else {
            img.setAttribute('src', 'foto-idoso-m.png')
           }
        } else if (fsex[1].checked) {
            gen  = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}
function media() {
    let user = document.getElementById('nome').value;
    let bim1 = document.getElementById('b1').value;
    let bim2 = document.getElementById('b2').value;
    let bim3 = document.getElementById('b3').value;
    let bim4 = document.getElementById('b4').value;
    zerarCampo()
    zerarMedia()
    let juncao = Number(bim1) + Number(bim2) + Number(bim3) + Number(bim4);
    let nota = juncao/4;
    document.getElementById('exibir1').innerHTML = nota;
    document.getElementById('nomeExibir').innerHTML = user;
    if (nota >= 7){
      document.getElementById('exibir2').innerHTML = 'Parabéns pela aprovação!';
    }
    else if(nota<=4){
      document.getElementById('exibir2').innerHTML = 'Reprovado, precisa estudar mais!';
   
    }
    else{
      document.getElementById('exibir2').innerHTML = 'Prova final, estude que você consegue!';
      let notaFinal = Number((50 - (juncao * 6)) / 4);
      document.getElementById('exibir3').innerHTML = 'Pontos para tirar na final:' + notaFinal;
    }
};
function zerarMedia(){
  document.getElementById('b1').value = ''
  document.getElementById('b2').value = ''
  document.getElementById('b3').value = ''
  document.getElementById('b4').value = ''
}
function zerarCampo(){
  document.getElementById('exibir2').innerHTML = '';
  document.getElementById('exibir3').innerHTML = '';
}
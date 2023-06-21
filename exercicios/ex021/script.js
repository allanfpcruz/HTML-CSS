var tipo = window.document.querySelector('h2#tipo')
var artigo = window.document.querySelector('section#noticia')
var titulo = window.document.querySelector('h3#article-title')
var imagem = window.document.querySelector('img#img')
var texto = window.document.querySelector('p#texto')

function politica(){
    tipo.innerHTML = ("Política")
    tipo.style.backgroundColor = "#DB4700"
    artigo.style.backgroundColor = "#DB470081"
    titulo.innerHTML = ("PL2630/2020 (PL da Censura)")
    imagem.src = "imagenss/pl-da-censura.jpg"
    texto.innerHTML = "O PL 2630/2020, também conhecido como PL das Fake News, debate a regulação das plataformas digitais e coloca em disputa interesses de diferentes grupos políticos e setores da sociedade. De um lado, há quem defenda que a proposta visa controlar conteúdos que contenham notícias falsas, por outro lado, há quem acredite que trata-se de uma censura e fim da liberdade de expressão. Os episódios de invasão ao Congresso Nacional no dia 8 de janeiro e os ataques nas escolas que resultaram em tragédias despertaram a necessidade de definir caráter de urgência à tramitação do Projeto de Lei 26630/2020.PL das Fake News ou PL da Censura, o projeto prevê uma série de medidas e responsabilidades sobretudo às big techs."
}

function esporte(){
    tipo.innerHTML = ("Esporte")
    tipo.style.backgroundColor = "#26DC00"
    artigo.style.backgroundColor = "#26DC0081"
    titulo.innerHTML = ("Messi vai receber o Oscar do Esporte?")
    imagem.src = "imagenss/pl-da-censura.jpg"
    texto.innerHTML = "O cenário parece perfeito. Em Paris, onde mora, Messi deve ser premiado pela segunda vez na carreira como o melhor atleta do último ano na cerimônia do Prêmio Laureus, que acontece hoje, às 14h, em Paris. Eleito o melhor do mundo no futebol uma dezena de vezes em diversar premiacoes, uma nova coroação entre todos os esportes na capital francesa tinha tudo para ser um momento de glória, mas por enquanto, o jogador do PSG não confirmou presença para recebeu seu troféu. Os motivos para a dúvida são claros para qualquer um em Paris. Desde que chegou à cidade, em agosto de 2021, o jogador argentino nunca viveu um momento de crise como agora. Prestes a encerrar seu contrato, o jogador enfrentou protestos dos torcedores do PSG no clube e em sua casa, insatisfeitos com suas atuações. Tudo ficou ainda pior com uma viagem não autorizada para a Arábia Saudita, repreendida pelo clube, em que o craque teve que pedir desculpas na volta."
}
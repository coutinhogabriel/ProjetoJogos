Relatório do Projeto: Piano Virtual

Introdução:
O projeto consiste em um piano virtual interativo, que permite aos usuários tocar notas musicais pressionando as teclas do teclado ou clicando nas teclas na interface gráfica. Ele oferece a funcionalidade de alternar entre a exibição dos nomes das teclas e ocultá-los com um interruptor (checkbox), bem como um design estilizado para criar a aparência de um piano.

Tecnologias Utilizadas:

HTML: A estrutura básica da página web.
CSS: Para a estilização e layout da interface do usuário.
JavaScript: Para a lógica de interatividade do piano.
Áudios (formato WAV): Para reproduzir as notas musicais do piano.
Funcionalidades:

Reprodução de Notas: O projeto permite aos usuários tocar notas musicais pressionando as teclas do teclado (como Tab, 1, q, 2, w, etc.) ou clicando nas teclas visuais na interface do piano. Cada tecla reproduz o som correspondente a uma nota musical.

Alternância de Exibição: O projeto inclui um interruptor (checkbox) que permite alternar entre a exibição dos nomes das teclas e a ocultação dos nomes. Isso facilita o uso para iniciantes e permite que os músicos mais experientes ocultem as dicas visuais.

Design Estilizado: A interface gráfica foi estilizada para criar uma aparência de piano realista. Isso inclui teclas brancas e pretas, bem como uma caixa de piano com bordas arredondadas.

Sons Autênticos: O projeto incorpora arquivos de áudio (formato WAV) para cada nota musical, proporcionando uma experiência sonora autêntica ao tocar o piano virtual.

Lógica do JavaScript:

A reprodução das notas é controlada por funções playNote(), que usam a classe Audio para tocar arquivos de áudio correspondentes a cada nota.

As teclas são configuradas para responder a eventos de clique do mouse e eventos de pressionamento de tecla usando event listeners. As teclas pretas e brancas têm suas próprias funções de tratamento de eventos.

O interruptor (checkbox) controla a exibição ou ocultação dos nomes das teclas. Os nomes das teclas são controlados diretamente no JavaScript, alterando a propriedade de opacidade dos elementos <span> dentro das teclas.

Estilização com CSS:

O CSS é responsável por dar estilo à interface do piano. Ele define as cores, tamanhos, bordas, margens e posições de todos os elementos, incluindo as teclas do piano e o interruptor.

As teclas do piano são estilizadas com cores brancas e pretas, bordas arredondadas e sombras para criar uma aparência autêntica.

Conclusão:

O projeto do piano virtual é uma implementação interativa e estilizada de um piano musical. Ele oferece funcionalidades para tocar notas musicais, alternar a exibição dos nomes das teclas e tem um design que se assemelha a um piano real. Este projeto pode ser usado como uma ferramenta educacional para aprender a tocar músicas no piano ou simplesmente para diversão e entretenimento musical.


Relatório: Projeto de Contador Regressivo

1. Introdução:

O projeto consiste em um contador regressivo desenvolvido em HTML, CSS e JavaScript. O contador permite definir um tempo em minutos e segundos, iniciar, pausar, reiniciar, zerar e inverter a contagem. A interface é construída utilizando o framework Bootstrap para melhor organização e estilização.

2. Estrutura e Funcionalidades:

O projeto é estruturado em três principais partes: o HTML define a estrutura da página, o CSS cuida do estilo e layout, e o JavaScript gerencia a lógica e interatividade.

    HTML:
        Barra de Navegação: Implementada com o framework Bootstrap, fornece navegação para diferentes seções da página.
        Título: Exibe o título "Contador regressivo".
        Relógio: Apresenta três colunas (minutos, segundos, milissegundos) para a contagem regressiva.
        Botões e Inputs: Para iniciar, parar, reiniciar, zerar e inverter a contagem, além de definir o tempo por meio de inputs.

    CSS:
        Define o estilo da página, incluindo cores de fundo, fontes, tamanhos, e posicionamento dos elementos. Utiliza o Bootstrap para estilização adicional.

    JavaScript:
        Funcionalidades Principais:
            Definir Tempo: Permite o usuário definir o tempo em minutos e segundos e iniciar a contagem regressiva.
            Iniciar Contagem: Inicia a contagem regressiva com base no tempo definido.
            Pausar Contagem: Pausa a contagem, permitindo sua retomada posterior.
            Reiniciar Contagem: Reinicia a contagem a partir do tempo inicialmente definido.
            Zerar Contagem: Zera o contador, resetando-o para zero.
            Inverter Contagem: Inverte a contagem, permitindo uma contagem progressiva ou regressiva.
        Interação com o DOM:
            Manipula os elementos HTML para exibir e atualizar a contagem, habilitar/desabilitar botões e interagir com o usuário.
        Modal para Definir Tempo:
            Utiliza um modal para permitir que o usuário defina o tempo inicial antes de iniciar a contagem.

3. Conclusão:

O projeto de contador regressivo oferece uma interface intuitiva para definir e controlar uma contagem regressiva. Permite uma experiência interativa ao usuário, facilitando a gestão do tempo e tornando-se útil em várias situações, como contagem para atividades, prazos, entre outros. A estrutura bem organizada, o estilo atraente e as funcionalidades bem implementadas contribuem para uma aplicação eficaz e de fácil utilização.

Relatório do Projeto: Jogo da velha

Introdução 
O script JavaScript fornecido implementa a lógica do jogo da velha para a página web. Ele define os jogadores, controla a lógica do jogo e verifica se houve um vencedor ou se o jogo terminou em empate.

Estrutura Geral
Inicialização da Página
window.onload: Esta função é executada quando a página é completamente carregada. Neste caso, ela esconde a div com o id game.
Definição de Jogadores
Jogador(nome, forma): Esta função é um construtor para criar objetos de jogador. Cada jogador tem um nome (nome) e uma forma (forma) que será usada para marcar as células do tabuleiro (X ou O).
Variáveis Globais
jogador1, jogador2: Representam os jogadores.
jogadorAtual: Indica qual jogador está atualmente em sua rodada.
formas: Um array contendo as formas que os jogadores usam para marcar as células (X e O).
index: Variável não utilizada no script, permanece como null.
Tabuleiro
tabuleiro: Um array de 9 elementos que representa o estado do tabuleiro. As posições preenchidas por X ou O são armazenadas aqui.
Inicialização do Jogo
initGame(): Esta função é chamada quando o botão "Iniciar" é clicado. Ela obtém os nomes dos jogadores do formulário, cria os objetos de jogador e inicia o jogo, tornando a div com o id game visível.
Funções de Verificação
tabuleiroIsFilled(): Verifica se todas as células do tabuleiro estão preenchidas. Retorna verdadeiro se o tabuleiro estiver completamente preenchido.
allElementsInSomeLine(): Verifica se algum jogador ganhou em alguma linha horizontal.
allElementsInSomeColumn(): Verifica se algum jogador ganhou em alguma coluna vertical.
allElementsInSomeDiagonal(): Verifica se algum jogador ganhou em alguma diagonal.
Atualização do Jogador Atual
setLabelJogadorAtual(): Atualiza o texto que indica qual jogador está na rodada atual.
Marcação de Células do Tabuleiro
setOnCeil(cel, pos): Esta função é chamada quando uma célula do tabuleiro é clicada. Ela verifica se a célula já está marcada, caso contrário, marca com a forma do jogador atual. Em seguida, atualiza o jogador da rodada e chama as funções de verificação de vencedores.
Reiniciar o Jogo
reset(): Esta função é chamada quando o jogo precisa ser reiniciado. Ela recarrega a página, reiniciando todo o estado do jogo.
Conclusão
O script JavaScript fornece a lógica necessária para a implementação de um jogo da velha funcional. Ele controla a interação do usuário, verifica o estado do tabuleiro e determina se houve um vencedor ou se o jogo terminou em empate. Além disso, permite a reinicialização do jogo quando necessário. Recomenda-se testar o script em conjunto com a estrutura HTML fornecida para uma experiência completa do jogo.

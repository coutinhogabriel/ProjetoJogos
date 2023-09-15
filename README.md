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

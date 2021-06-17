# Ferramentas utilizadas
O projeto foi desenvolvido em HTML, JavaScript e CSS, com auxílio do framework bootstrap + sass para a estilização de alguns poucos componentes.

# Breve descrição do projeto
O presente repositório faz parte do projeto de desenvolvimento de uma interface de login simples, contendo um formulário que utiliza validação de campos para informar se a operação foi realizada com sucesso. O principal intuito do presente projeto foi testar habilidades de desenvolvimento frontend utilizando HTML5, CSS3, JavaScript e o framework bootstrap + sass.

# Ambientes de desenvolvimento
O projeto foi desenvolvido utilizando o VSCode com algumas extensões que auxiliaram bastante o desenvolvimento como o live code, para acompanhar as mudanças no código em tempo real o a extensão prettifier utilizada para auxiliar na identação do código e outros eventuais pequenos erros. 

# Lógica de desenvolvimento
Para este projeto optou-se por desenvolver um site responsivo com layout baseado em duas colunas para desktop, onde uma coluna teria um form com validação em JS e outra uma carrossel de imagens que trocassem automaticamente, porém esta funcionalidade em aparelhos mobile seria transformada em um cabeçalho, dando maior destque para o formulário.

Como já mencionado o layout foi construído utilizando duas principais colunas, para isso optou-se por criar uma section que posteriormente foi divida em uma div que comportou o formulário e outra section contendo o carrossel. O bootstrap foi utilizado pontualmente, para estilizar alguns componentes, principalmente o botão, para isso optou-se por instalar o framework via npm com  o sass utilizando a gem e os arquivos do SASS foram referenciados nas tags scripts do HTML e para fazer essa alteração foi necessário alterar algumas propriedades da class btn nos arquivos SASS.

Por fim, para criar o carrossel e validar os campos do formulário foi utilizado javascript. Para o primeiro foi utilizado uma lógica de transição de imagens manipulando a class "selecionada" criada para modificar o valor da propriedade opactity, visto que todas as imagens foram sobrepostas, e dentro de um loop while que variava pelo intervalo definido pelo número de imagens apenas uma imagem por vez era selecionada para receber a class que modificava o valor da propriedade opacity de 0 para 1. Já no segundo a lógica consistia de receber o conteúdo digitado no campo input e validar de acordo com algumas regras, para o usuário e para a senha deveria conter pelo menos 8 caracteres, já para o e-mail foi utilizada uma regex que reconhecia o padrão "seuemail@dominio.extensao".

# Sugestões & feedbacks
Como dev jr. acredito que ainda tenho muito a aprender e estou aberto a receber conselhos e feedbacks. Caso tenha interesse de me comunicar algo que poderia fazer para melhorar este projeto pode entrar em contato comigo através de silvacabraljoaoguilherme@gmail.com ficarei muito feliz!

Ah... e caso queira acessar o site e dar uma olhadinha no resultado final, pode clicar no link ao lado: https://site-responsivo-gray.vercel.app/

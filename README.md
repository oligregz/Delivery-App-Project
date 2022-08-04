                                                :> Descrição <:


HEY GUYS, esta aplicação se chama App de Delivery(ou Delivery App, como quiser ;) ).

  É uma aplicação Fullstack de um aplicativo de compra e entrega de bebidas, onde se tem o cadastro de novos usuários, o login de usuários já existentes e o login do administrador.
  O desenvolvimento dessa aplicação foi feito por mim e mais cinco(5) colegas onde dividimos um tempo para nos conhecer melhor, afinal foi o primeiro contato com alguns integrantes, falarmos sobre nossas demandas, pontos fortes e fracos no intuito de primeiramente estarmos bem alinhados como uma baita equipe para aí sim podermos darmos início ao mapeamento, começarmos as tomadas de decisões e darmos o let's no projeto.

  Juntamente a equipe foi decidido que todos os dias de projeto teríamos DMs pelo incrível e maravilhoso Discord, pois foi o nosso primeiro contato com esse tipo de desenvolvimento Full em equipe e com todas as tecnologias usadas de forma conjunta. Decidimos que usaríamos o Trello(kanban) como nossa metodologia ágil para nos oraganizar e termos a noção exata do que estava sendo feito e como estava o andamento, dei iníco ao quadro, apresentei aos colegas e deixei bem claro a ideia de que era aberto e necessário a implementação de mudanças para um melhor aproveitamento do que estava sendo paltado. Por fim, dois dias depois do início das atividades, lá estava o quadro, melhor, mais limpo, mais organizado, mais bonito(agradável aos olhos) e mais fácil de entender, com os upgrades dos colegas onde fiz até um post sobre(link do post - https://www.linkedin.com/feed/update/urn:li:activity:6956245903590453248/)

                              |||{>---------- Tecnologias Utilizadas ----------<}|||

  Neste projeto utilizamos várias tecnologias, boa parte delas baseadas em JS.
  No Front-ent utilizamos REACT moderno(com Hooks), CSS puro, Sass, Axios, Style-lint, ES-Lint ... afim de termos um bom e rápido desenvolvimento. Nessa parte foi de suma importância a vizualizção através de esboço do FIGMA, dessa forma sabíamos exatamente onde ir e o que por no seu devido lugar.
  Já no Back-end foi feito um CRUD no padrão RESTApi utilizando Node.js, ORM(Sequelize), MySql, Docker(ficou a critério de cada membro pode escolher utilizar ou não, afinal ficar subindo e derrubando container para testar custou um bom tempo para um dos integrantes tendo em vista que foi um prazo OK, mas essa decisão atrapalhou o mesmo na questão do tempo), modelo MSC, utilizamos também Middlewares, Seeders, Migrations, Variáveis de Ambiente (.env), JsonWebToken, Express, express-async-erros(para tratar e deixar os controllers mais limpos), MD5 além também do JS puro com HOFs...

                                          :: Como Foi Desenvolvido ::

  O projeto teve o desenvolvimento guiado a testes pela lib PM2 já implementados pelo curso(Trybe), tanto para o front quanto para o back.
  Teve a branch principal(main-group-13) que a partir dela foram criadas outras branchs com um padrão, por exemplo: 'main-group-13-create-nav-bar', 'main-group-13-create-card' ...
  onde eram implementadas as novas funcionalidades, testadas, feitas Code Review e só então atendendo a aprovação dessas fases, era feito o merge afim de matermos SEMPRE, EVER e "SEMPREVER" as boas práticas de desenvolvimento.

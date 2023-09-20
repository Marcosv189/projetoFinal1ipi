var lista_de_produtos =[]

while (true ){


    var opcao = prompt ( `
    
    Bem vindo ao cadastro de produtos 

    1.Cadastrar novos produtos
    2.Editar produto
    3.Remover produto
    4.Vizualizar produtos

    ` )

    if (opcao == 1){
    cadastro()
}else if (opcao == 2){
    editar()
}else if (opcao == 3){
    remover()
}else if (opcao == 4){
    visualizar()
}
else {
    alert("nenhumas das opçoes foi selecionadas")
}
}

// Função para adicionar um objeto à lista
function cadastro() {

    // Cria um objeto vazio com propriedades nome, marca e preço

    var objeto = {
        nome: "",
        marca: "",
        preco: "",
    }

    // Solicita ao usuário que insira valores para as propriedades do objeto
    objeto.nome = prompt("nome");
    objeto.marca = prompt("marca");
    objeto.preco = prompt("preço");

    // Adiciona o objeto preenchido à lista
    lista_de_produtos.push(objeto);

}


//abrimos a 2 funçao para adicionar produto

function editar() {
// Verifica se a lista está vazia

if (lista_de_produtos.length === 0) {
    alert("não a nada na lista.")
    return; // Sair da função
}

// Exibe a lista de produtos para o usuário escolher qual editar
var listaProdutos = "produtos para ediçao\n";

/**vamos usar o loop para a lista
 * 
 * Ó laço i for menor que o tamanho da lista (`lista.lengthlista.length), 
 * garantindo que todos os produtos sejam processados.
 * 
 *  "|" é usado para melhorar a legibilidade e a formatação de informações 
 * ao criar uma representação textual com várias partes distintas.
 *  
 * listaProdutos += i + 1é usado para numerar os produtos na lista,
 *  adicionando "i + 1" à variável listaProdutos, onde ié o índice atual do loop. 
 * Isso permite que os produtos sejam organizados com números sequenciais (1, 2, 3, ...)
 *  ao invés de começarem em 0.
 */

for (let i = 0; i < lista_de_produtos.length; i++) {
    listaProdutos += i + 1 + "- Nome: " + lista_de_produtos[i].nome + " | Marca: " + lista_de_produtos[i].marca + " | Preço: " + lista_de_produtos[i].preco + "\n";
}

var edit = prompt(listaProdutos + "Digite o número do produto que quer editar:");

/**  Verifica se o edit é válido 
 * 
 *  ||É usado para combinar duas ou 
 * mais condições lógicas e verdadeiro retorna (true)
 *  se pelo menos uma das condições for verdadeira.
 */

if (edit < 1 || edit > lista_de_produtos.length) {
    alert(" esse peoduto nao tem");
    return; // Sai da função
}

// Solicita ao usuário os novos valores para o produto
var novoNome = prompt("Digite o novo nome do produto:");
var novaMarca = prompt("Digite a nova marca do produto:");
var novoPreco = prompt("Digite o novo preço do produto:");

/**Atualiza as informações do produto escolhido  subtrair 1 de 
edit servir para ajustar o produto, tornando-o compatível com a lista
baseada em zero.*/

lista_de_produtos[edit - 1].nome = novoNome;
lista_de_produtos[edit - 1].marca = novaMarca;
lista_de_produtos[edit - 1].preco = novoPreco;

alert("Produto editado com sucesso!");
}




function remover() {
/**  Verifica se a lista está vazia
 *  se não há nenhum produto cadastrado. 
 * Se a lista estiver vazia, exibimos um alerta
 *  informando que não há produtos na lista e saímos da função usando return.
*/

if (lista.length === 0) {
    alert("Não há produtos na lista.");
    return; // Sair da função
}

/** Exibe a lista de produtos para o usuário escolher qual remover
 * . Usamos um loop forpara percorrer cada produto na lista e formatamos
 *  as informações do produto, incluindo seu nome, marca e preço.
*/

var listaProdutos = "Produtos para remoção:\n";

for (let i = 0; i < lista_de_produtos.length; i++) {
    listaProdutos += i + 1 + "- Nome: " + lista_de_produtos[i].nome + " | Marca: " + listaProdutos[i].marca + " | Preço: " + listaProdutos[i].preço + "\n";
}

var remover = prompt(listaProdutos + "Digite o número do produto que deseja remover:");

/**  Verifica se o índice é válido 
 * Subtraímos 1 para ajustar o índice, já que as listas geralmente começam em 0
 *         
 *          Em seguida, verificamos se o indiceé válido:
 * remove < 0 verifica se o índice é negativo, ou se não é válido
 * 
 * removee >= lista.length verifica se o remove é maior ou igual ao tamanho da lista, 
 * ou que =numero que o remove está fora dos limites da lista.
*/

var remove = (remove) - 1;

if ( remove || remove < 0 || remove >= lista_de_produtos.length) {
    alert("Índice inválido. Não foi possível remover o produto.");
    return; // Sair da função
}

/**  Remove o produto da lista
 * Usamos splice para remover o produto da lista. O primeiro argumento remove especifica
 *  o remove do elemento a ser removido, e o segundo argumento 1 o produto que queremos remover
 *  apenas um elemento.
 */

lista.splice(remove, 1);
alert("Produto removido com sucesso!");
}


/**Função para visualizar os objetos 
* na lista pela funçao "adcionar"*/
function visualizar() {
var texto = ""

// Percorre a lista de objetos e formata as informações em uma string
for (let i = 0; i < lista_de_produtos.length; i++) {
    texto += `nome: ${lista_de_produtos[i].nome} - marca: ${lista_de_produtos[i].marca} - preço ${lista_de_produtos[i].preco} \n `
}


alert(texto)
}

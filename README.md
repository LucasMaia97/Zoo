# Zoo
Olá! Você foi contratado para ajudar na organização de um zoológico. Sua missão será construir a lógica para indicar os recintos onde novos animais se sintam confortáveis.

RECINTOS EXISTENTES
O zoológico possui os seguintes recintos disponíveis.

número	bioma	tamanho total	animais existentes
1	savana	10	3 macacos
2	floresta	5	vazio
3	savana e rio	7	1 gazela
4	rio	8	vazio
5	savana	9	1 leão
ANIMAIS
O zoológico só está habilitado a tratar dos animais abaixo. A tabela mostra o espaço que cada indivíduo ocupa e em quais biomas se adapta.

espécie	tamanho	bioma
LEAO	3	savana
LEOPARDO	2	savana
CROCODILO	3	rio
MACACO	1	savana ou floresta
GAZELA	2	savana
HIPOPOTAMO	4	savana ou rio
REGRAS PARA ENCONTRAR UM RECINTO
Um animal se sente confortável se está num bioma adequado e com espaço suficiente para cada indivíduo
Animais carnívoros devem habitar somente com a própria espécie
Animais já presentes no recinto devem continuar confortáveis com a inclusão do(s) novo(s)
Hipopótamo(s) só tolera(m) outras espécies estando num recinto com savana e rio
Um macaco não se sente confortável sem outro animal no recinto, seja da mesma ou outra espécie
Quando há mais de uma espécie no mesmo recinto, é preciso considerar 1 espaço extra ocupado
Não é possível separar os lotes de animais nem trocar os animais que já existem de recinto (eles são muito apegados!). Por exemplo, se chegar um lote de 12 macacos, não é possível colocar 6 em 2 recintos.
ENTRADAS E SAÍDAS
O programa deve receber tipo e quantidade de animal (nessa ordem)
O programa deve retornar uma estrutura contendo a lista de todos os recintos viáveis ordenada pelo número do recinto (caso existam) e a mensagem de erro (caso exista)
A lista de recintos viáveis deve indicar o espaço livre que restaria após a inclusão do(s) animal(is) e o espaço total, no formato "Recinto nro (espaço livre: valorlivre total: valortotal)"
Caso animal informado seja inválido, apresentar erro "Animal inválido"
Caso quantidade informada seja inválida, apresentar erro "Quantidade inválida"
Caso não haja recinto possível, apresentar erro "Não há recinto viável"  

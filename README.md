# Questões do Desafio Técnico: 

[Código com respostas das questões](https://github.com/DevKelvinK/Desafio-Tecnico-EstagioRP/blob/main/script.js)

---

1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

---
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

---
3) Observe o trecho de código abaixo: 

```
int INDICE = 12, SOMA = 0, K = 1; 

enquanto K < INDICE faça { 
  K = K + 1; 
  SOMA = SOMA + K; 
}

imprimir(SOMA);
```
Ao final do processamento, qual será o valor da variável SOMA?

SOMA = <strong><code>77</code></strong>

---

4) Descubra a lógica e complete o próximo elemento:

a- 1, 3, 5, 7, <strong><code>9</code></strong>

b- 2, 4, 8, 16, 32, 64, <strong><code>128</code></strong>

c- 0, 1, 4, 9, 16, 25, 36, <strong><code>49</code></strong>

d- 4, 16, 36, 64, <strong><code>100</code></strong>

e- 1, 1, 2, 3, 5, 8, <strong><code>13</code></strong>

f- 2, 10, 12, 16, 17, 18, 19, <strong><code>200</code></strong>

---
5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

```
Resposta:

Deixo o interruptor 1 desligado e o 2 e 3 ligados, vou a uma das salas, se for uma sala com lâmpada desligada, sei que é do interruptor 1, volto e desligo o interruptor 2, vou para uma próxima sala, se estiver acesa é do interruptor 3, se estiver apagada, é do interruptor 2, assim descobrindo a ordem de cada um. 

Mas caso na primeira ida, a sala estiver com a lâmpada ligada, volto e desligo o interruptor 2, entro na próxima sala, se estiver ligada, essa sala que entrei pertence ao interruptor 3, se estiver desligada, ela pertence ao interruptor 1 ou 2, e automaticamente a última sala é a do interruptor 3 que ficou ligada.  

No fim só dá pra descobrir quais interruptores pertencem a cada uma das lâmpadas caso eu ter a sorte de encontrar a primeira sala com a lâmpada desligada, se caso não, vou descobrir a lâmpada de apenas 1 interruptor. 
```
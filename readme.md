# Trabalho Sistemas da informação 2021.2
Este projeto tem por objetivo criar uma plataforma simples para promover o letramento digital de idosos e dessa forma prover uma melhor qualidade de vida para os mesmos

# Requisitos:
Este projeto foi desenvolvido em Angular, dessa forma para sua execução é necessário que algumas ferramentas estejam instaladas.

## Nodejs
Disponível em https://nodejs.org/en/

## Angular
```  
npm install -g @angular/cli@13.3.2
```
Para mais informações visite a documentação oficial em https://angular.io/cli

## Como executar?
No terminal, clone o projeto:  
```  
git clone https://github.com/DanielrCardoso/TrabalhoSI-2021.2.git
``` 
Entre na pasta do projeto:
```  
cd TrabalhoSI-2021.2
```
Instale as dependências do projeto:
```  
npm install
``` 

Existem duas maneiras de executar o projeto:

## 1 - Execução simples:
Execute o frontend:
```  
cd Front-end
```
```  
ng serve
``` 
Execute o Backend:
```  
cd Back-end
```
```  
node index.js
```

## 2 - Execução como Progressive Web App
Execute o frontend:
```  
cd Front-end
```
```  
ng build --prod
```
```  
cd dist/TrabalhoSI-2021.2
```
```  
npx serve
```
Execute o Backend:
```  
cd Back-end
```
```  
node index.js
```

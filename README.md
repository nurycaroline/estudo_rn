# React Native

1. Preparação do ambiente de desenvolvimento **Android**
2. Criando um aplicativo
3. Executando o App
4. Executando o app no Celular
5. Instalação do EsLint

## Projetos

* [1. APP1 - Gerando numeros randômicos](https://github.com/nurycaroline/estudo_rn/tree/master/app1NumeroRandomico)
* [2. APP2 - Frase do dia](https://github.com/nurycaroline/estudo_rn/tree/master/app2FraseDoDia)
* [3. APP3 - Jokenpo](https://github.com/nurycaroline/estudo_rn/tree/master/app3Jokenpo)
* [4. APP4 - Catalogo de Produtos](https://github.com/nurycaroline/estudo_rn/tree/master/app4Catalogo)

## Links Interessantes
* [React Native for React Developers - Vinicius Dacal Lopes](https://blog.coderockr.com/react-native-for-react-developers-769cca5ca6cc#.lt7xkms4h)
* [Why You Can’t Ignore React Native In 2017](https://medium.com/jetruby/why-you-cant-ignore-react-native-in-2017-5af27ddfdfc4#.3ds0d9f39)
* [The philosophy of React](https://medium.com/@malinnaleach/the-philosophy-of-react-e2c126c61af3#.8m03kaz8x)


## 1. Introdução:

### Preparação do ambiente de desenvolvimento Android:
### Programas necessarios Android:
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html?ssSourceSiteId=otnpt)
    * Kit de desenvolvimento do java
* [Python 2 - Recomendado pela documentação do React Native](https://www.python.org/)
    * Pré requisito do React Nativo
* [NodeJS - NPM](https://nodejs.org/en/)
    * NodeJs: plataforma para a execucao de codigos javascript. Interface entre os scripts javascript e o sistema operacional, permitindo assim a criacao de aplicacoes nativas utilizando javascript.
    * Npm: gerenciador de pacotes/dependencias do Node.
* [Android Studio](https://developer.android.com/studio/index.html)
    * Necessario para viabilizar a geracao do executavel de aplicacoes para Android, e os testes no simulador e no dispositivo.
* [React Cli](https://www.npmjs.com/package/react-native-cli)
    * Utilitario de linha de comando, que permite iniciar um projeto com toda a estrutura basica para o desenvolvimento, e atraves dele é executado o comando para simular o projeto.
    * Para instalar é só acessar o terminal e digitar:
        ```
        npm install -g react-native-cli
        ```

### Variaveis de ambiente:
Variaveis do usuario:
* JAVA_HOME: caminho para o java jdk - (Recomendado - C:\Program Files\Java\jdk1.8.0_112) 
* Path: (platform-tools do Android Studio)


## 2. Criando um aplicativo
### Gerando os arquivo necessarios:
* No terminal, localizar a pasta que deseja realizar a criacao do aplicativo e executar o comando para criar toda a estrutura basica.
    ```
    react-native init nome_app
    ```

* Apos criado a estrura inicial, abra o projeto no Android Studio. 
Pode ser que apresente alguns erros ao criar a build, por falta de algumas dependencias, basta baixa-las.

### Configurando o Android Studio
1. No Android Studio:
    * Open an existing Android Studio project 
    * Abrir o projeto android criado na pasta do seu projeto

2. No caso de erros,  Executar a instalação necessarias
![Erro Build](https://github.com/nurycaroline/estudo_react_native/blob/master/screen%20shots/Erro%20build.png)
![Erro Build2](https://github.com/nurycaroline/estudo_react_native/blob/master/screen%20shots/Erro%20build2.png)
![Erro Build2](https://github.com/nurycaroline/estudo_react_native/blob/master/screen%20shots/build%20OK.png)

## 3. Executando o App:
* No caso de processdores AMD, é recomendado o uso da execução diretamente no celular.

1. No android studio -> Tools -> Android -> AVD Manager -> Criar Virtual Device
![Config avd](https://github.com/nurycaroline/estudo_react_native/blob/master/screen%20shots/config%20avd.png)

2. Escolher Conofuguraçoes conforme o projeto android e Finalizar.

3. Na lista apresentada, executar o emulador:
![config avd2](https://github.com/nurycaroline/estudo_react_native/blob/master/screen%20shots/config%20avd%202.png)

4. Com o simulador em execucao, digitar o seguinte comando na pasta do projeto:
```
    react-native run-android
```

## 4. Executando o app no Celular:
1. Habilitar deburação USB no Celular
2. Acessar a pasta do projeto no terminal:

```
    react-native run-android
```  

## 5. Instalação do EsLint
```
    npm install --save-dev eslint-config-rallycoding
```

### Criando arquivo de Configuracao
1. Na pasta do projeto criar um novo arquivo **.eslintrc**:
``` 
{
    "extends": "rallycoding"
}
``` 

## 6. Densidade
### O que é? 
Densidade é a quantidade de pixels dentro de um determinado intervalo.
Quanto mais densidade melhor visibilidade.


## 7. Estilos CSS
### Aplicando estilos const:
``` 
    const Estilo = {
        estiloText: {
            fontSize: 50
        }
    }
``` 

E utilizar a props **style**:
``` 
    <Text style={Estilo.estiloText}>Olá</Text>
``` 

### CSS

```
    fontSize: 30,
    backgroundColor: '#000',
    margin: 30, 
```

### Sombras
* Cor da sombra:
    ```
        shadowColor: '#000'
    ```
* Tamanho da sombra:
    ´´´
        shadowOffset: {width: 0, height: 5}
    ´´´
* Opacidade
    ```
        shadowOpacity: 1
    ```

### Flexbox
* View

## 8. Axios




# Referencias 
http://facebook.github.io/react-native/releases/0.40/

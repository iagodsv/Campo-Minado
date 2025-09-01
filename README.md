# Campo Minado

Este é um projeto de Campo Minado desenvolvido em React Native utilizando Expo.

## Funcionalidades

- Seleção de nível de dificuldade (Fácil, Médio, Difícil)
- Interface responsiva para dispositivos móveis
- Contagem de bandeiras restantes
- Reiniciar jogo a qualquer momento

## Instalação

1. **Clone o repositório:**
    ```sh
    git clone https://github.com/seu-usuario/campo-minado.git
    cd campo-minado
    ```

2. **Instale as dependências:**
    ```sh
    npm install
    ```

3. **Execute o projeto:**
    ```sh
    npm start
    ```
    Ou para rodar diretamente em um dispositivo:
    ```sh
    npm run android
    npm run ios
    npm run web
    ```

## Estrutura do Projeto

```
src/            # Código fonte do aplicativo
  components/   # Componentes reutilizáveis (Campo, Bandeira, Mina, Cabeçalho, Tabuleiro)
  screens/      # Telas do app (Seleção de nível)
  functions.tsx # Lógica do jogo
  params.tsx    # Parâmetros globais do jogo
App.tsx         # Componente principal
index.ts        # Ponto de entrada do app
app.json        # Configuração do Expo
```

## Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)

## Licença

Este projeto é apenas para fins educacionais.
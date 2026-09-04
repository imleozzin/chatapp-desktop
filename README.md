# ChatApp — código-fonte do app desktop

Esse repositório guarda o código do app (Electron) **e** publica os instaladores
automaticamente através do GitHub Actions — sem precisar rodar nada no seu
computador.

## Como publicar uma atualização a partir de agora

1. Suba os arquivos novos aqui (arrastando pela interface do GitHub, substituindo
   os antigos), lembrando de **aumentar o número da `version` em `package.json`**
   antes de subir.
2. Pronto. O GitHub já builda e publica sozinho — acompanhe em **Actions** (aba
   no topo do repositório). Leva uns 5-10 minutos.
3. Quando terminar (ícone verde ✅ na aba Actions), a nova versão aparece em
   **Releases**, e o app de quem já tiver instalado detecta sozinho.

Não precisa mais rodar `npm install`, `npm run build:win` nem `npm run release`
na sua máquina pra publicar — isso tudo agora roda na nuvem do GitHub.

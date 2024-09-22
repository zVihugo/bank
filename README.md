# Bank Application
Este é um projeto de aplicação de login simples usando Vite e TypeScript.
## Descrição
A aplicação permite que os usuários façam login com um email e senha. Se as credenciais estiverem corretas, o login será bem-sucedido.
## Funcionalidades
- Login com email e senha
- Verificação de credenciais
## Tecnologias Utilizadas
- Vite
- TypeScript
- React
## Instalação
Clone o repositório:
```bash
git clone https://github.com/zVihugo/bank.git
```
Navegue até o diretório do projeto:
```bash
cd bank
```
Instale as dependências:
```bash
npm install
```
## Uso
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).
## Deploy
A aplicação está implantada no GitHub Pages. Você pode acessá-la [aqui](#).
## Estrutura do Projeto
```
bank/
├── public/
├── src/
│   ├── api/
│   │   └── index.ts
│   ├── components/
│   ├── services/
│   │   └── login/
│   │       └── login.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```
## Código de Exemplo
Aqui está um trecho do código de login:
```ts
import { api } from "../../api";
export const login = async (email: string, senha: string): Promise<boolean> => {
  const data: any = await api;
  console.log(data);
  if (email !== data.email || senha !== data.password) {
    return false;
  }
  return true;
};
```

## Deploy
- https://main--penguimbanks.netlify.app/

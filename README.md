# 📸 Gerador de Fotos 3x4 para Impressão

Um aplicativo web desenvolvido em **React** que permite ao usuário fazer upload de uma imagem, realizar o corte (crop) na proporção 3:4 e gerar um arquivo PDF pronto para impressão em papel fotográfico (10x15cm / A6).


## ✨ Funcionalidades

- **Upload de Imagem:** Suporte para arquivos JPG, PNG e outros formatos de imagem.
- **Corte Inteligente:** Interface de recorte fixada na proporção 3:4 para evitar distorções.
- **Configuração de Quantidade:** Escolha quantas fotos deseja gerar no PDF.
- **Layout Otimizado:** Organização automática de até 9 fotos por folha (grade 3x3) com espaçamento configurado para facilitar o corte manual.
- **Responsivo:** Funciona perfeitamente em computadores e dispositivos móveis.

## 🚀 Tecnologias Utilizadas

- [React.js](https://reactjs.org/) - Biblioteca para a interface.
- [react-easy-crop](https://github.com/ValentinH/react-easy-crop) - Ferramenta de recorte de imagem.
- [jsPDF](https://rawgit.com/MrRio/jsPDF/master/docs/index.html) - Biblioteca para geração de documentos PDF.
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Estilização personalizada e responsiva.

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/fotosprint.git](https://github.com/Erikps013/fotosprint.git)
Entre na pasta do projeto:

Bash
cd fotosprint
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm start
O projeto abrirá automaticamente no seu navegador em http://localhost:3000.

📐 Especificações Técnicas de Impressão
O sistema foi calibrado para gerar PDFs com as seguintes medidas:

Tamanho do Papel: A6 (105mm x 148mm).

Tamanho da Foto: 30mm x 40mm.

Espaçamento entre Fotos: 2mm.

Grade Máxima: 9 fotos por página.

🤝 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

Desenvolvido por Erick Pereira 🚀
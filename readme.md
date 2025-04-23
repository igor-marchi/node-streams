# Export CSV Node

Este projeto é uma aplicação Node.js desenvolvida para exportar dados em formato CSV de maneira eficiente, utilizando **streams** para lidar com grandes volumes de dados sem sobrecarregar a memória.

## Funcionalidades

- Exportação de dados para arquivos CSV.
- Uso de **streams** para processar dados de forma eficiente e escalável.
- Integração com banco de dados para leitura de dados dinâmicos.
- Configuração simples e extensível.

## Destaque: Uso de Streams

O projeto utiliza o conceito de **streams** do Node.js para processar e exportar dados. Isso permite:

- **Eficiência de memória**: Os dados são processados em partes (chunks), evitando o carregamento completo na memória.
- **Escalabilidade**: Ideal para lidar com grandes volumes de dados.
- **Velocidade**: Processamento contínuo e assíncrono.

### Exemplo de Uso de Streams no Projeto

O arquivo [`src/service/export.ts`](src/service/export.ts) contém a lógica principal de exportação, onde streams são utilizados para escrever os dados no arquivo CSV de forma eficiente.

## Estrutura do Projeto

- **src/**: Diretório principal do código-fonte.
  - **index.ts**: Ponto de entrada da aplicação.
  - **db/**: Configuração e inicialização do banco de dados.
  - **service/**: Contém a lógica de exportação e manipulação de dados.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- Docker (opcional, para uso com docker-compose)

## Instalação

1. Clone o repositório.

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente, se necessário.

## Uso

1. Execute a aplicação:

   ```bash
   npm run dev
   ```

2. O arquivo CSV será gerado no diretório especificado.

# Parte 2 - Sidebar

## Anotações importantes

- `interface NavItemProps` - o `icon: ElementType` é uma tipagem que pode ser utilizada no lugar de `ReactNode`, e ainda facilita a referência de elementos na criação de elementos

## Pattern Composition on Next

O padrão de composição é um conceito fundamental na criação de interfaces de usuário em React e frameworks relacionados, como o Next.js. A composição permite que você construa componentes complexos ao combinar componentes menores e reutilizáveis. No Next.js, a composição de componentes funciona da mesma maneira que em React, pois o Next.js é baseado no React.

Aqui estão os princípios básicos do padrão de composição no Next.js/React:

1. **Componentização**: Você quebra a interface do usuário em pequenos pedaços reutilizáveis chamados componentes. Cada componente representa uma parte específica da interface.

2. **Composição de Componentes**: Você pode criar componentes maiores combinando outros componentes menores. Isso permite que você reutilize funcionalidades e mantenha um código mais organizado.

3. **Props (Propriedades)**: Os componentes podem receber dados de entrada chamados "props". Isso permite que você passe informações de um componente pai para um componente filho. As props são imutáveis e ajudam a configurar o comportamento do componente.

4. **Reutilização**: A composição permite que você reutilize componentes em diferentes partes da aplicação. Isso ajuda a manter a consistência visual e a funcionalidade.

5. **Hierarquia de Componentes**: Os componentes podem ser organizados em uma hierarquia, com componentes pais e componentes filhos. Os dados podem fluir de cima para baixo na hierarquia, e os eventos podem fluir de baixo para cima.

Aqui está um exemplo simples de composição no Next.js/React:

```jsx
// Um componente de botão reutilizável
function Button(props) {
  return <button onClick={props.onClick}>{props.label}</button>;
}

// Um componente de formulário que usa o componente Button
function Form(props) {
  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Componente Button sendo usado aqui */}
      <Button label="Enviar" onClick={handleSubmit} />
    </form>
  );
}
```

Neste exemplo, o componente `Form` compõe o componente `Button`. O componente `Form` recebe uma prop `label` e uma prop `onClick`, que são passadas para o componente `Button`. Isso permite reutilizar o componente `Button` em diferentes partes da aplicação, tornando o código mais modular e fácil de manter.

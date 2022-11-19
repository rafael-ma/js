# Formatação de _Numbers_

Para definir quantidade de casas decimais.
```js
n.toFixed(d)

// n = Número
// d = Quantidade de casas decimais
```

Para repor certos caracteres ou números
```js
n.replace('.', ',')

// Irá repor o . por ,
```

Para formatar os números em valores monetários nacionais.
```js
n.toLocaleString('pr-BR', {style: 'currency', currency:'BRL'})

//USD -> Dólares
//EUR -> Euroas
```


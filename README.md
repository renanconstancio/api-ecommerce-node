# API ECOMMERCE COM TYPE SCRIPT E NODEJS

### [GET]/v1/clientes?nome=%Nome%&email=%Email

- [x] listagem dos clientes
- [x] Query stringa para uma busca mais avançada

```
{
  "from": 1,
  "to": 1,
  "per_page": 15,
  "total": 1,
  "current_page": 1,
  "prev_page": null,
  "next_page": null,
  "last_page": 1,
  "data": [
    {
      "id": 1,
      "nome": "Renan Henrique",
      "email": "renan@dcisuporte.com.br",
      "cnpj": "",
      "ie": "",
      "cpf": "",
      "rg": "",
      "telefone": "1632621365",
      "celular": "",
      "operadora": "",
      "nascim": null,
      "admin": false,
      "created_at": null,
      "updated_at": null
    }
  ]
}
```

### [GET]/v1/clientes/:id

- [x] lista apenas um unico cliente da lista
- [x] Query stringa para uma busca mais avançada

### [POST] /v1/clientes

- [] não será permitido cadastro de dois ou mais email
- [] senha sempre será criptografada sem a necessidade de ser exibida em URI

### [PUT] /v1/clientes/:id

- [x] ID deve ser passado via paramentro
- [x] alterações dos dados do cliente

## [DELETE] /v1/

```

```

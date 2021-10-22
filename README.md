# API ECOMMERCE COM TYPE SCRIPT E NODEJS

### [POST] /v1/clientes

- [x] não será permitido cadastro de dois ou mais email
- [x] senha sempre será criptografada sem a necessidade de ser exibida em URI

```

{
"id": 1,
"nome": "Nome do Cliente",
"email": "email@docliente.com.br",
"cnpj": "123123123",
"ie": "123123123",
"cpf": "123123123",
"rg": "123123123",
"telefone": "123123123",
"celular": "123123123",
"operadora": "operadora",
"nascim": "00/00/0000",
"admin": 0,
"created_at": null,
"updated_at": null
}

```

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
        "nome": "Nome do Cliente",
        "email": "email@docliente.com.br",
        "cnpj": "123123123",
        "ie": "123123123",
        "cpf": "123123123",
        "rg": "123123123",
        "telefone": "123123123",
        "celular": "123123123",
        "operadora": "operadora",
        "nascim": "00/00/0000",
        "admin": 0,
        "created_at": null,
        "updated_at": null
      }
    ]
  }
```

### [GET]/v1/clientes/:id

- [x] lista apenas um unico cliente da lista
- [x] ID deve ser passado na URI

### [PUT] /v1/clientes/:id

- [x] ID deve ser passado via paramentro
- [x] alterações dos dados do cliente

## [DELETE] /v1/clientes/:id

- [x] ID deve ser passado via paramentro

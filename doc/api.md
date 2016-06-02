# Post Free API DOC

## Schemas

#### _User:

| name   | description       | type |
| ------ | ----------------- | ---- |
| objectId   | primary key  | number|
| username  |  | string|
| password |      | string|
| likes | 收藏的明信片列表     | relation|
| follows | 关注的用户列表     | relation|
| createdAt | create time    | Date|
| updatedAt | patch time     | Date|
| isDeleted |      | boolean|


#### UserInfo:

| name   | description       | type |
| ------ | ----------------- | ---- |
| objectId   | primary key  | number|
| user  |  | pointer(_User)|
| whatsup |   个性签名   | string|
| phone |   手机号   | string|
| email |   邮箱   | string|
| gender | 性别     | string|
| createdAt | create time    | Date|
| updatedAt | patch time     | Date|
| isDeleted |      | boolean|

#### Area(中国所有省市表):

| name   | description       | type |
| ------ | ----------------- | ---- |
| id   | primary key  | number|
| name  | 省/市名称 | string|
| type |   省市类型   | {0,1,2}|

#### Address:

| name   | description       | type |
| ------ | ----------------- | ---- |
| id   | primary key  | number|
| dest  | 地址名称 | string|
|receiver|名字|string|
|creator| |pointer(_User)|
|code|邮编|string|
| createdAt | create time    | Date|
| updatedAt | patch time     | Date|
| isDeleted |      | boolean|

#### PostCard:

| name   | description       | type |
| ------ | ----------------- | ---- |
| id   | primary key  | number|
|smallPic|渲染后的小图|AVFile|
| renderedPic  | 渲染后的图片  | AVFile|
| originPic |  原始图片    | AVFile|
| description | 明信片描述   | string|
| creator   | 创建者  | pointer(_User)|
||
| createdAt | create time    | Date|
| updatedAt | patch time     | Date|
| isDeleted |      | boolean|

#### Order:

| name   | description       | type |
| ------ | ----------------- | ---- |
| id   | primary key  | number|
| orderId  |   | string|
| creator |      | _User|
| address   |   | Address|
|state|         |{"pending","finished","cancled","unpaid"}|
|price|          |             |
|postCardList||[ {PostCard} ]|
| createdAt | create time    | Date|
| updatedAt | patch time     | Date|
| isDeleted |      | boolean|

## API Definition

### GET     /api/v1/form

#### description:

get form list

#### arguments:

| name  | type   | description                 |
| ----- | ------ | --------------------------- |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success   | [(SimpleForm)] |
| 400    | error     |              |


### GET    /api/v1/form/:id

#### description:

get form by id

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id    | path      | form's id                   | number|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | 执行成功  | json格式的form内容 |
| 400    | error     |              |

### POST    /api/v1/form

#### description:

create new form

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| body  | body      | json格式的form内容           | string|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | 创建成功  | {} |
| 400    | error     |              |

### PATCH    /api/v1/form/:id

#### description:

patch form by id

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id    | path      | form's id                   | number|
| body  | body      | json格式的form内容           | string|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | 修改成功  | {} |
| 400    | error     |              |

### DELETE    /api/v1/form/:id

#### description:

delete form by id

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id    | path      | form's id                   | number|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | 删除成功  | {} |
| 400    | error     |              |


### GET    /api/v1/user/:id

#### description:

get user by id, 如果id==-1 则get当前用户信息

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id    | path      | user's id                   | number|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {simpleUser } |
| 400    | error     |              |

### GET    /api/v1/user/

#### description:

admin接口, get user list

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {[simpleUser] } |
| 400    | error     |              |


### POST    /api/v1/user/login

#### description:

用户登录

#### arguments:

| name  | located in| description                 | type |default|
| ----- | ------    | --------------------------- | ---- | ----- |
| email    | body      | | string||
| password    | body      | | string||
| patient | body | | string | 'patient' |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {id } |
| 400    | error     |              |

### POST    /api/v1/user/register

#### description:

用户注册

#### arguments:

| name  | located in| description                 | type | default |
| ----- | ------    | --------------------------- | ---- | ------- |
| code    | body      | | string||
| username    | body      | | string||
| password    | body      | | string||
| email    | body      | | string||
| role     | body      | | string |'patient'|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {id } |
| 400    | error     |              |

### GET    /api/v1/user/dispatcher/:id

#### description:

admin接口，遍历数据库中信息，发送邀请码至邮箱

#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id    | path      | | number |


#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {} |
| 400    | error     |              |

### POST    /api/v1/user/email

#### description:

admin接口，添加对应邮箱未激活账户至数据库
#### arguments:

| name  | located in| description                 | type | default |
| ----- | ------    | --------------------------- | ---- | ------- |
| email    | body      | | string||
| role    | body      | | string|'patient'|

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {} |
| 400    | error     |              |

### GET    /api/v1/user/logout

#### description:

用户登出
#### arguments:

| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |


#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success  | {} |
| 400    | error     |              |

### POST    /api/v1/file
#### description:
调用此api后，将首先检测文件名是否存在，存在的话返回失败（目前不能存在相同的文件名），若不存在则保存文件，url、name存入数据库，返回id和文件名。
#### arguments:
| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| name | body | | string |
|file | files | | file |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success,return file_id and filename  | {id,name} |
| 400    | error     |  error message  |

### POST    /api/v1/file/auth
#### description:
调用此api后，首先在file、user数据库中查询有无对应id，都有的话，将创建新的授权auth，保存入数据库并返回成功信息。
#### arguments:
| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| user_id | body | | number |
|file_id | body | | number |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success message | {} |
| 400    | error     |  error message  |

### DELETE    /api/v1/file/:id
#### description:
调用此api后，将在file库中寻找file_id，找到的话则将该条数据deleted设置为true,之后将auth库中所有相关授权删除，并将本地文件重命名，并在文件名后添加删除时间。
#### arguments:
| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| id | path | | number |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success message | {} |
| 400    | error     |  error message  |

### POST    /api/v1/file/unauth
#### description:
调用此api后，在auth数据库中寻找对应的授权数据，若找到则从数据库中删除，并返回成功，否则返回异常信息。（暂时未检测user是否在user数据库中）
#### arguments:
| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| user_id | body | | number |
|file_id | body | | number |

#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success message | {} |
| 400    | error     |  error message  |

### GET    /api/v1/file/:user_id
#### description:
调用此api后，在auth数据库中查找对应用户id的授权，并通过file_id在file db中查找所有该用户授权的文件，返回list，list中每个json包含文件id，文件名和文件保存路径。
#### arguments:
| name  | located in| description                 | type |
| ----- | ------    | --------------------------- | ---- |
| user_id | path | | number |


#### response:

| code | description | return       |
| ---- | ----------- | ------------ |
| 200    | success | list of {id:file_id,name,url} |
| 400    | error     |  error message  |

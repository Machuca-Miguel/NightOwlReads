Entidades Principales:
=============


Usuarios:
--------

user_id (clave primaria)
username
email
password_hash
Otros campos como nombre completo, fecha de registro, etc.

Libros:
--------
book_id (clave primaria)
title
author
description
Otros campos como ISBN, año de publicación, género, etc.

Bibliotecas de Usuarios:
--------

library_id (clave primaria)
user_id (clave foránea de la tabla Usuarios)
book_id (clave foránea de la tabla Libros)
Campos adicionales como fecha de adición, estado de lectura (por ejemplo, leído, en proceso, por leer), puntuación, etc.

Reseñas:
--------

review_id (clave primaria)
user_id (clave foránea de la tabla Usuarios)
book_id (clave foránea de la tabla Libros)
rating (puntuación)
comment (texto de la reseña)
Otros campos como fecha de publicación, votos útiles, etc.

Grupos de Lectura:
--------

group_id (clave primaria)
name
Otros campos como descripción, fecha de creación, etc.

Miembros de Grupos:
--------

membership_id (clave primaria)
group_id (clave foránea de la tabla Grupos de Lectura)
user_id (clave foránea de la tabla Usuarios)
Campos adicionales como fecha de unión al grupo, rol (administrador, miembro), etc.

Relaciones:
--------

Un usuario puede tener muchos libros en su biblioteca, y un libro puede estar en muchas bibliotecas de usuarios. Por lo tanto, hay una relación de muchos a muchos entre Usuarios y Libros a través de la tabla Bibliotecas de Usuarios.

Un usuario puede escribir muchas reseñas, y una reseña está asociada a un único usuario y un único libro. Por lo tanto, hay una relación de uno a muchos entre Usuarios y Reseñas, y entre Libros y Reseñas.

Un grupo de lectura puede tener muchos miembros, y un usuario puede pertenecer a muchos grupos de lectura. Por lo tanto, hay una relación de muchos a muchos entre Grupos de Lectura y Usuarios a través de la tabla Miembros de Grupos.




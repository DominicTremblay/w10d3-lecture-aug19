# Advanced Lecture: Introduction to GraphQL

## Content

- GraphQL Notions
  - What is GraphQL
  - Why GraphQL?
- Demo 1: Simple Demo
- Demo 2: Todo API Demo (MongoDB?, pg?)

## What is GraphQL

- Strongly typed query language for getting data from your app

  - Type of data needs to be explicit otherwise the query fails

- Created by Facebook
- Open sourced
- GraphQL provides incredible flexibility to the client in terms of specifying the exact data that they want

### GraphQL VS REST

- Main difference

  - REST uses multiple Url endpoints with different verbs
  - GraphQL use a single Url
  - With REST, the structure of the result (shape) is defined by the server
  - With GraphQL, the shape is determined by the client
  - With REST, you might need to constantly add new endpoints to respond to different needs of the client

### Why GraphQL

- Can perform much more flexible requests
- Allows to query an API more efficiently

for example, if we need to get a list of projects and a list of todos for each. We might have to query multiple endpoints in a REST API

`GET /projects`

`GET /projects/:id/todos`

- Things are starting to be somewhat inneficient

- A GraphQL query would do a single query using the following

```js
{
  projects {
    id
    name
    description
    todos {
      id
      task
      completed
    }
  }
}
```

- Another drawback of REST is that you get back the full list of properties even if it's not useful. For example, if we only need the name of the projects and the task, we then perform the following query.

```js
{
  projects {
    name
    todos {
      task
    }
  }
}
```

The GraphQL request would return only those properties. This is way more efficient!

## Core Concepts

GraphQL has a clear separation of structure and behaviour.

- Schema
- Resolvers

### GraphQL SDL

- GraphQL defines a schema for an API
- In the schema, we can define

  - Types

    - scalar types (String, Int, Float, Boolean )
    - define custom types (type Project)

  - Queries - Read operations (list of projects)

  - Mutations - Create, Update, Delete

### Resolvers

- A GraphQL server invokes all the resolver functions for the fields specified in the query

- IOW, Resolvers functions will utimately sends back the data according to the schema

## Tools

- GraphQL Server (Apollo, GraphQL Yoga)
- GraphQL Playground
- Node-Postgres to perform the actual queries
- Postgres Database

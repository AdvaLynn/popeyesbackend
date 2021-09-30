# Popeyes Backend Sanity
This is a simple replication of the https://www.popeyes.com/ backend. Using a sanity schema to descibe the menu items, categories, combos, and variants.

## Sanity desk
https://popeyesbackend.sanity.studio/

## Graphql instance
https://61avj9vo.api.sanity.io/v1/graphql/production/default

### Example Queries:

Query all categories:
```
query {
    allCategory{
    title
  }
}
```

Query all menu items in category Nuggets:
```
query {
    allCategory(where: {title: {eq: "Nuggets"}}) {
    menuItems {
      title
    }
  }
}
```

## How to deploy to Sanity/Graphql
1. Clone this repository.
2. Make changes to the schema
3. run:
```
sanity deploy
```
Or if you only need to deploy it to graphql:
```
sanity graphql deploy
```

## Running locally
```
yarn install
yarn start
Go to http://localhost:3333
```

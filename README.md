# Pinsomaniac Angular

Petit projet pédagogique **Angular** autour d'un catalogue de produits.

Le dépôt illustre une architecture simple avec composants, modèle de données et service pour alimenter l'affichage d'une liste de produits.

## Stack

- Angular 15.2
- TypeScript 4.9
- RxJS
- SCSS

## Structure

```text
src/app/
├── header/        # en-tête
├── product/       # affichage d'un produit
├── product-list/  # liste/catalogue
├── models/        # modèle Product
└── services/      # service de données produits
```

## Installation

```bash
git clone https://github.com/LeoPonchon/PinsomaniacAngular.git
cd PinsomaniacAngular
npm install
```

## Développement

```bash
npm start
```

ou :

```bash
npx ng serve
```

Ouvrez ensuite l'URL indiquée par Angular CLI, généralement :

```text
http://localhost:4200
```

## Build

```bash
npm run build
```

## Tests

```bash
npm test
```

## Contexte

Ce dépôt est un exercice Angular et non une boutique de production : son intérêt principal est la séparation entre composants, modèle et service de données.

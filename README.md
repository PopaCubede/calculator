# Description

Here is a test to make a basic CalculatorApp with prioritization of the operators, using NodeJS/TypeScript and React.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the app.

First you need to build de backend, from the root folder you can type:

```bash
cd back && npm i && npm run build
```

Then, you can get the packages for the front:

```bash
cd .. && cd front && npm i
```

Finally, you can run both apps by going to the root folder and launch the docker-compose file:

```bash
cd .. && docker-compose up
```

## Usage

Once the container is up, you can access:
- **Swagger** at [http://localhost:5000/docs](http://localhost:5000/docs)
- **CalculatorApp** at [http://localhost:3000/docs](http://localhost:3000)

If you want to test the backend via [Postman](https://www.postman.com/):
- open a new tab
- select POST call
- enter **http://localhost:5000/calc** as the URL
- in the Body tab, select "raw" in the radio buttons and JSON in the dropdown list
- in the input type something like:
```bash
{
    "finalFormula": ["9", "/", "6", "-", "18.5", "*", "2"]
}
```
Or, to make it easier, I've exported you a collection file to import directly into your Postman app (named: *Calculator.postman_collection.json*)

Enjoy computing values!

## License
[MIT](https://choosealicense.com/licenses/mit/)
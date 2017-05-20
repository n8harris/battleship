## Battleship

For this coding challenge you'll build a simplified version of battleship. You'll have 3 ships that will be placed on a 10 by 10 grid which is the battleground. Each cell in the battleground is identified by its space on an x,y axis with [0,0] being the cell in the bottom left corner. Each ship is 1 cell wide and 3 cells long. On initial placement, each ship is oriented vertically. To initialize the playing field you'll receive a 2 dimensional array where each element in the array contains the x,y coordinates of each ship's topmost cell.

For instance, one sample initialization could be `[[1,3],[2,4],[3,5]]`.

Your game interface will be a basic HTTP API. You will implement two endpoints `POST /create-game` and `POST /make-move`. `/create-game` will take the two dimensional initialization array as input and create a gameboard based on the array. `/make-move` will take an array as input (e.g. [x,y]) and will output whether or not the coordinates were a hit. If the hit sunk a ship, the API will respond with `sunk`. If the hit sunk all of the ships, the API will respond with `won`. If the hit was a regular hit, the API will just respond with `hit`. You will have to maintain state somehow in your application. The sample app is set up partially to use MongoDB, but you can use whatever persistence mechanism you prefer.

Please unit test your code and make sure all of your tests pass before submitting. Bonus points if you can design a UI to interface with the API.

## Submission

- You must first create a new branch off of the master branch.
- You do not have to use the provided template, but it may help as it has already been set up with a testing framework and structure for setting up api endpoints.
- Upon completion, submit finished work as a pull request. Please include setup instructions if you do not use the provided template.

## Template Setup

- To get started, run `npm install` from the root of the project
- To start the server, run `npm run serve`
- To run the tests, run `npm test`
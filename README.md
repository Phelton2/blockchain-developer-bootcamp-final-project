# blockchain-developer-bootcamp-final-project

## Final Project Overview

Petit's Rentals: A online booking site to simulate paying for a nightly room and getting it approved.There are two methods of paying (Paypal, Metamask).

## Directory Structure
- ```build``` Contains json files
- ```contracts``` Contains my smart contracts
- ```migrations``` They are my migration files
- ```node_modules``` They are just dependencies
- ```tests``` They contains my smart contract tests

### Instructions (Metamask)

First connect your metamask to the website via the "Connect to metamask" button(the rinkeby test network is used for the transaction). Then you may press the "Book now" button it should take between 5-15seconds to complete. Afterward the site will alert you that the booking was made

## Project walk through
https://drive.google.com/file/d/1nWtF9t67dqZ5Dm4wzqe4ATRAe7BznE4y/view?usp=sharing


## Project URL

https://petitsrentals.netlify.app/

##  Install Dependencies
- Run ```npm```

## Truffle test instructions
## 1. Start the test network
- Open gnache gui or cli
- Make sure the port is ```7545```

## 2. Compile the Contract
- use the command ```truffle migrate --reset```
## 3. Run the tests
- Use the command ```truffle test```

## Warning
Please not not complete the paypal transaction it is not a simulation it deduct the money from your paypal account


//Get the button variable
const metamask_button=document.getElementById("metamask")

//open metamask when the button is clicked
metamask_button.onclick = async () => {
    console.log("It worked?")
    await ethereum.request({method:
     'eth_requestAccounts'})
}

// Allows to create a booking in the smart contract
const storeBooking_button=document.getElementById("storeBooking")
storeBooking_button.onclick = async () => {
   storeBooking()
}

 //Connecting to my smart contract
const web3 = new Web3(window.ethereum)

//the addresses of the deployed contract
const rentalAddress = "0xA6C009056e6e259f9d2e838B5add01ea987e0D16"

//The abi of my deyloyed smart contract
const ABI = [
	{
		"inputs": [],
		"name": "getBooking",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_time",
				"type": "string"
			}
		],
		"name": "storeBooking",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

//Create an instance of the rental smart contract
const rentalContract = new web3.eth.Contract(ABI, rentalAddress)

//I am assigning the smart contract to the web3 provider
//rentalContract.setProvider(web3.givenProvider)

//rentalContract.methods.storeBooking("Monday", "6pm").call().then(console.log)
async function storeBooking(){
 await rentalContract.methods.storeBooking("Monday", "6pm").send({from: web3.givenProvider.selectedAddress})
   .then(function(result){
       alert("Booking was made")
   })
}

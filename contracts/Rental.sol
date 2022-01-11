// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Rental {

    //VARIABLES

    //Contract onwer address
    address owner= msg.sender;

    //Storage for date and time
    struct Booking{
        string date;
        string time;
    }

    //Connecting the users address to the booking
    mapping (address => Booking) internal bookingDatabase;

    string result="Booking was stored";
    /**
     * @dev Paying for the booking
     */
    
    //function paymentTransaction() public payable {
        //Get the users address
        //Make esure of suffient funds
        //Send the funds to the contract owners account
        // Create the booking then store it
    //}



    /**
     * @dev Storing  the booking for a specfic address
     */
    
    
    //function storeBooking(string memory _date, string memory _time) public returns (string memory){
    function storeBooking(string memory _date, string memory _time) public returns (string memory){
        //Creating a new booking in the data base
        bookingDatabase[msg.sender]=  Booking({
            date:_date,
            time:_time
        });
        //return result; 
    }

    function getBooking() public view returns (string memory){
        return string(abi.encodePacked(bookingDatabase[msg.sender].date, bookingDatabase[msg.sender].time));
    }

    
}   
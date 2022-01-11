const Rental = artifacts.require("Rental");

contract("Rental", function (accounts) {
  it("should deploy the Rental contract", async function () {
    await Rental.deployed();
    return assert.isTrue(true);
  });

  it("should store the booking", async() => {
    const rental = await Rental.deployed();
    //const actualresponse = await rental.storeBooking("Monday", {from: accounts[0]});
    await rental.storeBooking("Monday,Noon", {from: accounts[0]});
    const actualresponse = await rental.getBooking( {from: accounts[0]});
    const expectedresponse = "Booking was stored";
    assert.equal(actualresponse, expectedresponse,  `${actualresponse} was not the message we expected!`);
  });

});
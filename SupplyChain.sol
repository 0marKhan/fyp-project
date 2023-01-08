// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.9.0;

import "./Manufacturer.sol";
import "./Distributor.sol";
import "./Retailer.sol";

contract SupplyChain is Manufacturer,Distributor,Retailer{

    address owner;
    uint public productCount;
    uint public manufacturerCount;
    uint public distributorCount;
    uint public retailerCount;
    uint productCode;
    mapping(address => uint) balance;

    enum stage {
        produced,
        packed,
        sold,
        shipped,
        received
    }

    stage constant defaultStage=stage.produced;

    event produced(uint id);
    event packed(uint id);
    event sold(uint id);
    event shipped(uint id);
    event received(uint id);

    constructor() public{
        owner=msg.sender;
        productCode=1;
        productCount=0;
        manufacturerCount=0;
        distributorCount=0;
        retailerCount=0;
    }

    struct Product{
        uint pc;
        uint productId;    
        uint productPrice;
        string name;
        string manufacturingDate;
        string manufacturerName;
        stage productStage;    
        address manufactuer;
        address distributor;
        address retailer;
    }

    mapping(uint => Product) public products;
    
    modifier OnlyOwner() {
        require(msg.sender==owner,"Only Owner is allowed!");
        _;
    }

    modifier isAmountEnough(uint price) {
        require(msg.value >= price, "Paid amount is insufficient");
        _;
    }

    modifier transferAmount(uint id){
        _;
        uint price = products[id].productPrice;
        uint returnAmount = msg.value - price;
        msg.sender.transfer(returnAmount);
    }

    modifier Produced(uint id){
        require(products[id].productStage == stage.produced, "Item is not yet produced");
        _;
    }

    modifier Packed(uint id){
        require(products[id].productStage == stage.packed, "Item is not yet packed");
        _;
    }

    modifier Sold(uint id){
        require(products[id].productStage == stage.sold, "Item is not yet sold");
        _;
    }

    modifier Shipped(uint id){
        require(products[id].productStage == stage.shipped, "Item is not yet shipped");
        _;
    }

    modifier Received(uint id){
        require(products[id].productStage == stage.received, "Item is not yet received");
        _;
    }

    function getStatus(uint _pc) public view returns(stage){
        return products[_pc].productStage;
    }

    function addProduct(uint _id,string memory _name,string memory _date,string memory _manufacturerName) public payable onlyManufacturer(){
        products[productCode]= Product(productCode,_id,5,_name,_date,_manufacturerName,stage.produced,msg.sender,address(0),address(0)); 
        productCode++;
        emit produced(_id);
    }

    function packProduct(uint _pc) public Produced(_pc) onlyManufacturer(){
        products[_pc].productStage=stage.packed;
        emit packed(_pc);
    }

    function sellProduct(uint _pc) public payable Packed(_pc) onlyDistributor() isAmountEnough(products[_pc].productPrice) transferAmount(_pc){
        products[_pc].distributor = msg.sender;
        products[_pc].manufactuer.transfer(products[_pc].productPrice);
        products[_pc].productStage = stage.sold;
        emit sold(_pc);
    }

    function shipProduct(uint _pc,uint _price) public Sold(_pc) onlyDistributor(){
        products[_pc].productStage=stage.shipped;
        products[_pc].productPrice=_price;
        products[_pc].distributor=msg.sender;
        emit shipped(_pc);
    }

    function receivedProduct(uint _pc) public payable Shipped(_pc) onlyRetailer() isAmountEnough(products[_pc].productPrice) transferAmount(_pc){
        products[_pc].retailer = msg.sender;
        products[_pc].distributor.transfer(products[_pc].productPrice);
        products[_pc].productStage = stage.received;
        emit received(_pc);
    }

}


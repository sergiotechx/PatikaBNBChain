// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

contract Counter{
    uint256 private counter;
    constructor(){
        counter = 0;
    }
    function getCounter() public view returns(uint256){
        return counter;
    }
    function add1() public {
        counter = counter + 1;
    }
}
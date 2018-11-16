pragma solidity ^0.4.23;

contract Random {
  uint public nonce = 0;

  function generateRandom() public returns(uint randomNumber) {
    uint rand = uint(keccak256(abi.encodePacked(now, msg.sender, nonce)));
    nonce = nonce + 1;
    return (rand);
  }
}

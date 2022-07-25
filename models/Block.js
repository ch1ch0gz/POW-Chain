const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(){
    this.transactions = [];
    this.nonce = 0;
    this.timestamp = Date.now();
  }

  addTransaction(tx) {
  this.transactions.push(tx);
  }

  hash() {
    return SHA256(this.nonce + "" +this.timestamp).toString()
  }
}

module.exports = Block;

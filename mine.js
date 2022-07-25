const Block = require('./models/Block')
const db = require('./db')
const TARGET_DIFFICULTY = BigInt("0x0" + "F".repeat(63));


  let mining = true;
  mine();

  function startMining() {
    mining = true;
    mine();
  }

  function stopMining() {
    mining = false;
  }

  function mine() {
    if(!mining) return;

    const block = new Block();
    console.log("hash")
    console.log(block.hash())

    while(BigInt('0x' + block.hash()) >= TARGET_DIFFICULTY) {
      block.nonce++;
      //console.log(block.hash())
    }

    db.blockchain.addBlock(block);
    console.log(`Mined block #${db.blockchain.blockHeight()} at nonce ${block.nonce}`);

    setTimeout(mine, 5000);
  }

module.exports = {mine};

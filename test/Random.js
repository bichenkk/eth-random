/* eslint-disable */

const Random = artifacts.require('./Random.sol')
const BigNumber = require('bignumber.js')

contract('Test Random', (accounts) => {
  it('should generate random numbers', async () => {
    const instance = await Random.deployed()
    const number1 = await instance.generateRandom.call()
    await instance.generateRandom()
    const nonce1 = await instance.nonce()
    const number2 = await instance.generateRandom.call()
    await instance.generateRandom()
    const nonce2 = await instance.nonce()
    console.log('number1', new BigNumber(number1))
    console.log('number2', new BigNumber(number2))
    console.log(nonce1)
    console.log(nonce2)
  })
})

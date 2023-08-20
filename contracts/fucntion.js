import contract from './connect'; // Import the contract instance you set up

const web3 = require('web3');

// Replace 'YourOwnerPrivateKeyHere' with your actual owner's private key

export async function initializeWallet() {
    try {
        console.log("inside initialize wallet",process.env.CONTRACT_ADDRESS) ;
        const ownerAccount = web3.eth.accounts.privateKeyToAccount("0x79fcda32052e82f2dab1904555e02b820af3c76fdb5599bddb44de3ef1473031");

        // Replace 'yourWalletAddressToInitialize' with the actual wallet address
        console.log(ownerAccount.address) ;
        const tx = await contract.methods.initializeWallet().send({
            from: ownerAccount.address,
            gas: 10000000
        });

        console.log('Transaction Hash:', tx.transactionHash);

    } catch (error) {
        console.log("error initializing wallet", error) ;
    }
}

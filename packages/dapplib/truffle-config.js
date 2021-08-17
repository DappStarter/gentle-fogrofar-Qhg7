require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'guess clock other sugar fan rebel rural unusual hunt credit frame gaze'; 
let testAccounts = [
"0xf7192c42f4501c6625f95c6bfc51d43d272fb3eef5d384c7f14cbb97c8fbaeda",
"0x55f3455d98fdca8f6e8ed1e27729e17e83af6872da0384228a088d7af3b69f55",
"0x4e81153a82c96138260008f9ef09010d11bf3d7a25979d7054252df7be4f1ae3",
"0xef617c252f05357efafbbea603ac8a61c617e2cf981948ad9b74908cfc0eb1b8",
"0xcfe465bb73b88e8f780faaab67b446998ecbbd457abe9a24d2b8f56ae27fd729",
"0x7ac18d9281537ca12193847cd67878bffe282b869cff16971ce31d09bdb5a1f3",
"0xe0e6fa16170f336601ef0d540778d42831404df730a0544c9afab5e98be64478",
"0x5aa3ead1731dc17c4662c7575ed9fda600740f95d6371efa045bffee8748701e",
"0x3787d3127674bf8d633262ea5e4522245d99c5d9d3e8e44eab7bcd8e75561819",
"0xee60e8cbf4455d2213850f7b363ad55fb4ded6248c2c2a8d85fa1b263ff0da9e"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



// import 'dotenv/config'
import { IceteaWeb3 } from '@iceteachain/web3';

const instances = {};
const contracts = {};

const MAIN_URL = 'wss://rpc.icetea.io/websocket';
const WS_URL = 'wss://rpc.icetea.io/websocket';
const HTTP_URL = 'https://rpc.icetea.io';
let CONTRACT = 'teat1nfvgtg0mcndk9g6nrxurs02cchmav2xq4gaqe9';

export const getWeb3 = (url = MAIN_URL) => {
  if (!instances[url]) {
    instances[url] = new IceteaWeb3(MAIN_URL);
  }
  return instances[url];
};

export const getWsWeb3 = () => getWeb3(WS_URL);
export const getHttpWeb3 = () => getWeb3(HTTP_URL);

export const getContract = (address = CONTRACT) => {
  if (!contracts[address]) {
    contracts[address] = getWeb3().contract(address);
  }
  return contracts[address];
};

export const getAliasContract = () => getContract('system.alias');
export const getDidContract = () => getContract('system.did');

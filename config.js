export const STORAGE_ADDRESS = "0x97F76a5a687DE1146378A0974ae45DB98F46b914";

export const STORAGE_ABI = [
  {
    constant: false,
    inputs: [],
    name: "removeRetailer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isManufacturer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "distributorCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "retailerCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isRetailer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addManufacturer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addDistributor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "products",
    outputs: [
      {
        name: "pc",
        type: "uint256",
      },
      {
        name: "productId",
        type: "uint256",
      },
      {
        name: "productPrice",
        type: "uint256",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "manufacturingDate",
        type: "string",
      },
      {
        name: "manufacturerName",
        type: "string",
      },
      {
        name: "productStage",
        type: "uint8",
      },
      {
        name: "manufactuer",
        type: "address",
      },
      {
        name: "distributor",
        type: "address",
      },
      {
        name: "retailer",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "addRetailer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_account",
        type: "address",
      },
    ],
    name: "isDistributor",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "removeDistributor",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manufacturerCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "productCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "removeManufacturer",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "produced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "packed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "sold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "shipped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
    ],
    name: "received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "RetailerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "RetailerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "DistributorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "DistributorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "ManufacturerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_account",
        type: "address",
      },
    ],
    name: "ManufacturerRemoved",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "getStatus",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
      {
        name: "_name",
        type: "string",
      },
      {
        name: "_date",
        type: "string",
      },
      {
        name: "_manufacturerName",
        type: "string",
      },
    ],
    name: "addProduct",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "packProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "sellProduct",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
      {
        name: "_price",
        type: "uint256",
      },
    ],
    name: "shipProduct",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_pc",
        type: "uint256",
      },
    ],
    name: "receivedProduct",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
];

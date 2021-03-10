import { IMAGE_ICON } from "@assets/Icon";
import colors from "@utils/colors";

export const WALLETS = [
  {
    id: "1",
    name: "example december",
    walletIcon: "cash",
    balance: 1000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
  {
    id: "2",
    name: "example december 1",
    walletIcon: "creditCard",
    balance: 2000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
  {
    id: "3",
    name: "example december 2",
    walletIcon: "eWallet",
    balance: 3000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
  {
    id: "4",
    name: "example december 2",
    walletIcon: "eWallet",
    balance: 3000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
  {
    id: "5",
    name: "example december 2",
    walletIcon: "eWallet",
    balance: 3000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
  {
    id: "6",
    name: "example december 2",
    walletIcon: "eWallet",
    balance: 3000,
    imageBackGround: require("@assets/Dashboard/wallet.png"),
  },
];

export const TRANSACTIONS = [
  {
    id: "1",
    icon: "tShirt",
    title: "Shopping at Tokyo Life",
    date: "15 Dec 2020",
    balance: 428000,
    income: true,
  },
  {
    id: "2",
    icon: "tShirt",
    title: "Shopping at Tokyo Life1",
    date: "15 Dec 2020",
    balance: 428000,
    income: true,
  },
  {
    id: "3",
    icon: "tShirt",
    title: "Shopping at Tokyo Life1",
    date: "15 Dec 2020",
    balance: 428000,
    income: true,
  },
];

export const WALLET_ALL = [
  {
    id: "1",
    name: "Cash",
    walletIcon: "cash",
  },
  {
    id: "2",
    name: "Credit Card",
    walletIcon: "creditCard",
  },
  {
    id: "3",
    name: "Debit Card",
    walletIcon: "debitCard",
  },
  {
    id: "4",
    name: "Bank Account",
    walletIcon: "bankAccount",
  },
  {
    id: "5",
    name: "E-Wallet",
    walletIcon: "eWallet",
  },
];

export const LIST_TRANSACTIONS = [
  {
    title: "Today 02, December",
    content: [
      {
        id: "1",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "2",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "3",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
    ],
  },
  {
    title: "Today 02, December",
    content: [
      {
        id: "1",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "2",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "3",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
    ],
  },
  {
    title: "Today 02, December",
    content: [
      {
        id: "1",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "2",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
      {
        id: "3",
        icon: "tShirt", // key code
        title: "Shopping at Tokyo Life1",
        date: "15 Dec 2020",
        balance: 428000,
        income: true,
      },
    ],
  },
];

export const TOTAL_TRANSACTION = {
  income: 12458,
  expense: 12458,
};

export const LIST_CATEGORY = [
  {
    id: 2,
    parentId: null,
    name: "Food & Drinks",
    icon: "ic002",
    type: "expense",
    createdAt: null,
    updatedAt: null,
    children: [
      {
        id: 11,
        parentId: 2,
        name: "Groceries",
        icon: "ic011",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 12,
        parentId: 2,
        name: "Restaurant",
        icon: "ic012",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 13,
        parentId: 2,
        name: "Bar, Cafe",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
    ],
  },
  {
    id: 3,
    parentId: null,
    name: "Shopping",
    icon: "ic002",
    type: "expense",
    createdAt: null,
    updatedAt: null,
    children: [
      {
        id: 14,
        parentId: 2,
        name: "Clothes",
        icon: "ic011",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 15,
        parentId: 2,
        name: "Health & beauty",
        icon: "ic012",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 16,
        parentId: 2,
        name: "Kids",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 17,
        parentId: 2,
        name: "Pets",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 18,
        parentId: 2,
        name: "Home decor, funiture",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 19,
        parentId: 2,
        name: "Electronics",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 20,
        parentId: 2,
        name: "Gifts, joy",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
      {
        id: 21,
        parentId: 2,
        name: "Drug-store, chemist",
        icon: "ic013",
        type: "expense",
        createdAt: null,
        updatedAt: null,
      },
    ],
  },
];

export const LIST_CATEGORY_BACKUP = [
  {
    title: "Food & Drinks",
    icon: "food",
    content: [
      {
        id: "1",
        name: "Groceries",
        icon: "cart",
      },
      {
        id: "2",
        name: "Restaurant",
        icon: "cash",
      },
      {
        id: "3",
        name: "Bar, cafe",
        icon: "bottle",
      },
    ],
  },
  {
    title: "Shopping",
    icon: "shopping",
    content: [
      {
        id: "4",
        name: "Clothes",
        icon: "tShirt",
      },
      {
        id: "5",
        name: "Health & beauty",
        icon: "bottle",
      },
      {
        id: "6",
        name: "Kids",
        icon: "bottle",
      },
      {
        id: "7",
        name: "Pets",
        icon: "bottle",
      },
      {
        id: "8",
        name: "Home decor, furniture",
        icon: "bottle",
      },
    ],
  },
  {
    title: "Housing",
    icon: "housing",
    content: [],
  },
  {
    title: "Transportation",
    icon: "transportation",
    content: [],
  },
  {
    title: "Life & Entertainment",
    icon: "lifeEntertainment",
    content: [],
  },
  {
    title: "Financial Expenses",
    icon: "financialExpenses",
    content: [],
  },
  {
    title: "Income",
    //icon: "income",
    content: [],
  },
];

export const CURRENCIES = [
  {
    id: "1",
    name: "Argentina",
    description: "Peso Argentina",
    currency: "ARS",
    code: "",
  },
  {
    id: "2",
    name: "Kingdom of England",
    description: "British Pound",
    currency: "GBP",
    code: "",
  },
  {
    id: "3",
    name: "Japan",
    description: "Japanese Yen",
    currency: "JPY",
    code: "",
  },
  {
    id: "4",
    name: "United States Of America",
    description: "United States Of America",
    currency: "USD",
    code: "",
  },
  {
    id: "5",
    name: "India",
    description: "Rupee",
    currency: "INR",
    code: "",
  },
  {
    id: "6",
    name: "Viet Nam",
    description: "Viet nam dong",
    currency: "VND",
    code: "",
  },
  {
    id: "",
    name: "China",
    description: "Chinese Yuan",
    currency: "CNY",
    code: "",
  },
];

// CURRENT DATA

export const MY_WALLET_DATA = [
  {
    id: 0,
    walletType: 0,
    amount: 111,
  },
  {
    id: 1,
    walletType: 2,
    amount: 12,
  },
  {
    id: 2,
    walletType: 3,
    amount: 123,
  },
  {
    defaultWallet: true,
  },
];

export const LATEST_TRANSACTION_EXAMPLE_DATA = [
  // {
  //   id: "1",
  //   icon: "tShirt",
  //   title: "Shopping at Tokyo Life",
  //   date: "15 Dec 2020",
  //   balance: 428000,
  //   income: true,
  // },
  // {
  //   id: "2",
  //   icon: "tShirt",
  //   title: "Shopping at Tokyo Life",
  //   date: "15 Dec 2020",
  //   balance: 428000,
  //   income: true,
  // },
  // {
  //   id: "3",
  //   icon: "tShirt",
  //   title: "Shopping at Tokyo Life",
  //   date: "15 Dec 2020",
  //   balance: 428000,
  //   income: true,
  // },
  // {
  //   id: "4",
  //   icon: "tShirt",
  //   title: "Shopping at Tokyo Life",
  //   date: "15 Dec 2020",
  //   balance: 428000,
  //   income: true,
  // },
  // {
  //   id: "5",
  //   icon: "tShirt",
  //   title: "Shopping at Tokyo Life",
  //   date: "15 Dec 2020",
  //   balance: 428000,
  //   income: true,
  // },
];

export const WALLET_TYPE_DATA = [
  {
    id: 0,
    imageIcon: IMAGE_ICON.wallet,
    title: "All wallets",
  },
  {
    id: 1,
    imageIcon: IMAGE_ICON.cash,
    title: "Cash",
  },
  {
    id: 2,
    imageIcon: IMAGE_ICON.debitCard,
    title: "Vietcombank VISA",
  },
  {
    id: 3,
    imageIcon: IMAGE_ICON.eWallet,
    title: "Start-up Business",
  },
  {
    id: 4,
    imageIcon: IMAGE_ICON.bankAccount,
    title: "Saving Money",
  },
];

export const TRANSACTION_EXAMPLE_DATA = [
  {
    title: "Today 02, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
  {
    title: "Friday 01, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
  {
    title: "Friday 01, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
  {
    title: "Friday 01, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
  {
    title: "Friday 01, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
  {
    title: "Friday 02, December",
    content: [
      {
        id: 0,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428000,
        income: true,
      },
      {
        id: 1,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
      {
        id: 2,
        imageIcon: IMAGE_ICON.tShirt,
        title: "Shopping at Tokyo Life",
        date: "15 Dec 2020",
        amount: 428,
        expense: true,
      },
    ],
  },
];

export const GET_PREMIUM = [
  {
    icon: "cloud",
    title: "Backup & sync",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: "ad",
    title: "Remove ads",
    description: "Lorem ipsum dolor sit amet",
  },
  {
    icon: "wallet",
    title: "Unlimited wallets",
    description: "Lorem ipsum dolor sit amet",
  },
];

export const LOGIN_DATA = [
  {
    image: require("@assets/Login/Monsy.png"),
    title: "Welcome to Monsy",
    description:
      "Monsy is a simple and smart free mobile application that helps you manage your daily cash flow.",
  },
  {
    image: require("@assets/Login/Monsy.png"),
    title: "Welcome to Monsy",
    description:
      "Monsy is a simple and smart free mobile application that helps you manage your daily cash flow.",
  },
  {
    image: require("@assets/Login/Monsy.png"),
    title: "Welcome to Monsy",
    description:
      "Monsy is a simple and smart free mobile application that helps you manage your daily cash flow.",
  },
];

export const FREQUENCY = [
  {
    id: 0,
    title: "Weekly",
  },
  {
    id: 1,
    title: "Monthly",
  },
  {
    id: 2,
    title: "Yearly",
  },
  // {
  //   id: 3,
  //   title: "Custom",
  // },
  // {
  //   id: 4,
  //   title: "All time",
  // },
];

export const CHART_DATA = [
  { name: "Housing", y: 60, color: colors.bleuDeFrance },
  { name: "Others", y: 4, color: colors.emerald },
  { name: "Shopping", y: 16, color: colors.purplePlum },
  { name: "Food &..", y: 20, color: colors.coral },
];

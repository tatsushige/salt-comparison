// data/salts.ts
import { Salt } from "../types/salt";

export const salts: Salt[] = [
  {
    name: "ぬちまーす",
    origin: "沖縄",
    magnesium: 3360,
    potassium: 970,
    calcium: 700,
    totalMinerals: 3360 + 970 + 700,
    sodium: 75.5,
    price: 1242 / 250,
    productionMethod: "逆浸透膜、噴霧乾燥、低温焼成",
    saltType: "海水塩",
    link: "https://www.nutima-su.com/SHOP/19380/list.html",
  },
  {
    name: "雪塩",
    origin: "沖縄",
    magnesium: 3310,
    potassium: 1000,
    calcium: 832,
    totalMinerals: 3310 + 1000 + 832,
    sodium: 72.6,
    price: 3264,
    productionMethod: "逆浸透膜、加熱ドラム",
    saltType: "海水塩",
    link: "https://www.nutima-su.com/SHOP/19380/list.html",
  },
  {
    name: "石垣の塩",
    origin: "沖縄",
    magnesium: 420,
    potassium: 210,
    calcium: 1370,
    totalMinerals: 420 + 210 + 1370,
    sodium: 82,
    price: Math.floor((680 / 158) * 100) / 100,
    productionMethod: "逆浸透膜、平釜",
    saltType: "海水塩",
    link: "https://www.nutima-su.com/SHOP/19380/list.html",
  },
  {
    name: "宗谷の塩",
    origin: "北海道",
    magnesium: 3240,
    potassium: 1010,
    calcium: 1070,
    totalMinerals: 3240 + 1010 + 1070,
    sodium: 71.8,
    price: 890 / 250,
    productionMethod: "逆浸透膜、平釜",
    saltType: "海水塩",
    link: "https://www.nutima-su.com/SHOP/19380/list.html",
  },
];

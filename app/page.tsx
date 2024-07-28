"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { salts } from "../data/salts";
import { Salt } from "../types/salt";

const Home: FC = () => {
  const [sortedSalts, setSortedSalts] = useState<Salt[]>(salts);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Salt;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortBy = (key: keyof Salt) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    const sorted = [...sortedSalts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setSortedSalts(sorted);
    setSortConfig({ key, direction });
  };

  const getSortIndicator = (key: keyof Salt) => {
    if (sortConfig && sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ▲" : " ▼";
    }
    return "";
  };

  return (
    <div className="container mx-auto p-4 text-slate-900">
      <h1 className="text-lg font-bold mb-4">🧂 塩成分比較表（100gあたり）</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-blue-400 text-slate-50">
              <th
                className="border  px-4 py-2 cursor-pointer "
                onClick={() => sortBy("name")}
              >
                商品名{getSortIndicator("name")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("magnesium")}
              >
                マグネシウム{getSortIndicator("magnesium")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("potassium")}
              >
                カリウム{getSortIndicator("potassium")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("calcium")}
              >
                カルシウム{getSortIndicator("calcium")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("totalMinerals")}
              >
                ミネラル合計{getSortIndicator("totalMinerals")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("sodium")}
              >
                食塩相当量{getSortIndicator("sodium")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("price")}
              >
                1g参考価格{getSortIndicator("price")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("origin")}
              >
                産地{getSortIndicator("origin")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("productionMethod")}
              >
                製法{getSortIndicator("productionMethod")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => sortBy("saltType")}
              >
                種類{getSortIndicator("saltType")}
              </th>
              <th className="border px-4 py-2">購入</th>
            </tr>
          </thead>
          <tbody>
            {sortedSalts.map((salt: Salt, index: number) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border px-4 py-2">{salt.name}</td>
                <td className="border px-4 py-2">{salt.magnesium}mg</td>
                <td className="border px-4 py-2">{salt.potassium}mg</td>
                <td className="border px-4 py-2">{salt.calcium}mg</td>
                <td className="border px-4 py-2">
                  {salt.magnesium + salt.potassium + salt.calcium}mg
                </td>
                <td className="border px-4 py-2">{salt.sodium}mg</td>
                <td className="border px-4 py-2">{salt.price}円</td>
                <td className="border px-4 py-2">{salt.origin}</td>
                <td className="border px-4 py-2">{salt.productionMethod}</td>
                <td className="border px-4 py-2">{salt.saltType}</td>
                <td className="border px-4 py-2 ">
                  <Link
                    href={salt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 pr-1 underline hover:no-underline"
                  >
                    公式
                  </Link>
                  /
                  <Link
                    href={salt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black px-1 underline hover:no-underline"
                  >
                    Amazon
                  </Link>
                  /
                  <Link
                    href={salt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 px-1 underline hover:no-underline"
                  >
                    楽天
                  </Link>
                  /
                  <Link
                    href={salt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 pl-1 underline hover:no-underline"
                  >
                    yahoo
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

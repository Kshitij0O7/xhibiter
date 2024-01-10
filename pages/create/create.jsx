import React from "react";
import ExploreNav from "../collection/exploreNav";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function Create() {
  return (
    <div className="mx-auto px-4 py-32">
      <h1 className="text-3xl text-center font-bold mb-4">Create</h1>

      {/* First Card */}
      <Link href="/create">
        <div
          className="flex items-center justify-between gap-4 mb-8 p-4  rounded-lg shadow-md hover:shadow-xl hover:transition-shadow hover:bg-gray-500 transition-shadow duration-300 cursor-pointer"
          style={{ maxWidth: "800px", margin: "auto" }}
        >
          <div className="flex items-center">
            {/* Replace with actual icons */}
            <div className="mr-4">
              <img
                src="/images/dropCollection.svg"
                alt="Collection Icon"
                className="h-6 w-6 dark:invert filter"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Drop a collection</h3>
              <p className="text-gray-500 mt-2">
                Launch your NFT collection for others to mint.
              </p>
            </div>
          </div>
          <MdArrowForwardIos className="text-gray-600" />
        </div>
      </Link>

      {/* Second Card */}
      <Link href="/create">
        <div
          className="flex items-center justify-between gap-4 mt-8 p-4  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          style={{ maxWidth: "800px", margin: "auto" }}
        >
          <div className="flex items-center">
            {/* Replace with actual icons */}
            <div className="mr-4">
              <img
                src="/images/mintNFT.svg"
                alt="Mint Icon"
                className="h-6 w-6 dark:invert"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Mint an NFT</h3>
              <p className="text-gray-500 mt-2">
                Create a collection and mint NFTs directly to your wallet.
              </p>
            </div>
          </div>
          <MdArrowForwardIos className="text-gray-600" />
        </div>
      </Link>
    </div>
  );
}

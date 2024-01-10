/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { tranding_category_filter } from "../../data/categories_data";
import { HeadLine } from "../../components/component";
import Top_collection_Copy from "../../components/collectrions/Top_Collection_Copy";
import Feature_collections_data from "../../data/Feature_collections_data";
import Latest_Drop_Notable from "../../components/collectrions/Latest_Drop_Notable";
import Collection_dropdown from "../../components/dropdown/collection_dropdown";
import Explore_collection_item from "../../components/collectrions/explore_collection_item";
import Meta from "../../components/Meta";
import { collectCollectionData } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Collection from "../collection/collectionNav";

const ExploreInMix = () => {
  const dispatch = useDispatch();
  const [collectionFilteredData, setCollectionFilteredData] = useState(
    Feature_collections_data
  );
  const [filterVal, setFilterVal] = useState(0);

  const handleItemFilter = (text) => {
    if (text === "all") {
      setCollectionFilteredData(Feature_collections_data);
    } else {
      setCollectionFilteredData(
        Feature_collections_data.filter((item) => item.category === text)
      );
    }
  };

  useEffect(() => {
    dispatch(collectCollectionData(collectionFilteredData.slice(0, 8)));
  }, [dispatch, collectionFilteredData]);

  return (
    <>
      <Meta title="Explore Collection || Xhibiter | NFT Marketplace Next.js Template" />
      <section className="relative mt-24 lg:pb-48 pb-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            width={1519}
            height={773}
            priority
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full"
          />
        </picture>

        <div className="container">
          <Top_collection_Copy />

          <Latest_Drop_Notable />

          <HeadLine
            text="Explore In Mix"
            classes="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white"
          />

          {/* <!-- Filter --> */}
          <Collection />
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 gap-[1.875rem] md:grid-cols-3 lg:grid-cols-4">
            <Explore_collection_item itemFor="explore-collection" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreInMix;

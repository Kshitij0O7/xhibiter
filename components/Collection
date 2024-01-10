import React, { useState } from "react";
import { useRouter } from "next/router";
import { collection_item_data } from "../../data/collection_data";
import Auctions_dropdown from "../../components/dropdown/Auctions_dropdown";
import Social_dropdown from "../../components/dropdown/Social_dropdown";
import Collection_items from "../../components/collectrions/Collection_items";
import Image from "next/image";
import Link from "next/link";
import Meta from "../../components/Meta";
import Collection_category_filter from "../../components/collectrions/collection_category_filter";

const Collection = () => {
  const [likesImage, setLikesImage] = useState(false);
  const router = useRouter();
  const pid = router.query.collection;

  const handleLikes = () => {
    if (!likesImage) {
      setLikesImage(true);
    } else {
      setLikesImage(false);
    }
  };

  return (
    <div>
      <Collection_category_filter />
    </div>
  );
};

export default Collection;

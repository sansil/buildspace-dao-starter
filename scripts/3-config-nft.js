import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xf14BF85D71cFb3AA7F195b0c518F5ce3e5F86AF8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Soccer DAO",
        description: "This NFT will give you access to SoccerDAO!",
        image: readFileSync("scripts/assets/soccer.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
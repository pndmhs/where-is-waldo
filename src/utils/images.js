import beachThumbnail from "../assets/thumbnail/beach_sm.jpg";
import skiSlopesThumbnail from "../assets/thumbnail/ski-slopes_sm.jpg";
import trackAndFieldThumbnail from "../assets/thumbnail/track-and-field_sm.jpg";

import beachImage from "../assets/game-images/beach.webp";
import skiSlopesImage from "../assets/game-images/ski-slopes.webp";
import trackAndFieldImage from "../assets/game-images/track-and-field.webp";

const games = [
  {
    name: "Beach",
    route: "beach",
    image: beachImage,
    thumbnail: beachThumbnail,
  },
  {
    name: "Ski Slopes",
    route: "ski-slopes",
    image: skiSlopesImage,
    thumbnail: skiSlopesThumbnail,
  },
  {
    name: "Track and Field",
    route: "track-and-field",
    image: trackAndFieldImage,
    thumbnail: trackAndFieldThumbnail,
  },
];

export default games;

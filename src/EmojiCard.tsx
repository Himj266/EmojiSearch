import React, { useEffect, useState } from "react";
import emojiSearch from "./emojiSearch";
import "./styles.css";

interface IEmojiCardProps {
  searchKey: string;
  changeHeading(emojiLeft: string, emojiRight: string): void;
}
const EmojiCard: React.FunctionComponent<IEmojiCardProps> = ({
  searchKey,
  changeHeading
}) => {
  // const [emojiArray, setEmojiArray] = React.useState([] as any);
  const emojiArray = emojiSearch(searchKey);

  // let left = "💟";
  // let right = "💟";
  // if (emojiArray[0]) left = emojiArray[0].symbol;
  // if (emojiArray[1]) right = emojiArray[1].symbol;
  // changeHeading(left, right);
  useEffect(() => {
    // setEmojiArray(emojiSearch(searchKey));
    let left = "💟";
    let right = "💟";
    if (emojiArray[0]) left = emojiArray[0].symbol;
    if (emojiArray[1]) right = emojiArray[1].symbol;
    changeHeading(left, right);
  }, [searchKey]);

  const emoiCards = emojiArray.map((emoji) => {
    return (
      <div key={emoji.title} className="EmojiCard">
        <h2> {emoji.symbol} </h2>
        <h3> {emoji.title} </h3>
      </div>
    );
  });

  return <div className="Emoji">{emoiCards}</div>;
};

export default EmojiCard;

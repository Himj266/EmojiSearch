import React, { useEffect } from "react";
import emojiSearch, { Iemoji } from "./emojiSearch";
import "./styles.css";

interface IEmojiCardProps {
  searchKey: string;
  changeHeading(emojiLeft: string, emojiRight: string): void;
  copyOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}
const EmojiCard: React.FunctionComponent<IEmojiCardProps> = ({
  searchKey,
  changeHeading,
  copyOnClick
}) => {
  const [emojiArray, setEmojiArray] = React.useState([] as Iemoji[]);
  const [emojiCards, setEmojiCards] = React.useState([] as JSX.Element[]);

  useEffect(() => {
    // console.log("Rendered EmojiArray", emojiArray.length);
    setEmojiArray(emojiSearch(searchKey));
  }, [searchKey]);

  useEffect(() => {
    // console.log("Rendered real cards", emojiArray.length);
    const cards = emojiArray.map((emoji: Iemoji) => {
      return (
        <div key={emoji.title} className="EmojiCard" onClick={copyOnClick}>
          <h2 data-id="symbol"> {emoji.symbol} </h2>
          <h3> {emoji.title} </h3>
        </div>
      );
    });
    setEmojiCards(cards);
  }, [emojiArray, copyOnClick]);

  useEffect(() => {
    let left = "💟";
    let right = "💟";
    if (emojiArray[0]) left = emojiArray[0].symbol;
    if (emojiArray[1]) right = emojiArray[1].symbol;
    changeHeading(left, right);
  }, [searchKey, emojiArray, changeHeading]);

  // const emojiCards = emojiArray.map((emoji: Iemoji) => {
  //   return (
  //     <div key={emoji.title} className="EmojiCard" onClick={copyOnClick}>
  //       <h2> {emoji.symbol} </h2>
  //       <h3> {emoji.title} </h3>
  //     </div>
  //   );
  // });

  return <div className="Emoji">{emojiCards}</div>;
};

export default EmojiCard;

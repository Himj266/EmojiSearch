import React from "react";
import "./styles.css";

interface ISearchProps {
  searchKey: string;
  emojiHeading: {
    left: string;
    right: string;
  };
  searchChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
const Search: React.FunctionComponent<ISearchProps> = ({
  searchKey,
  searchChange,
  emojiHeading
}) => {
  return (
    <header>
      <div className="Search">
        <h1>
          {emojiHeading.left} Type to search Emojis {emojiHeading.right}
        </h1>
        <p>(Click on Card to Copy Emoji)</p>
        <input value={searchKey} onChange={searchChange} />
      </div>
    </header>
  );
};

export default Search;

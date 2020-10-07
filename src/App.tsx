import React, { useState, useCallback } from "react";
import Search from "./Search";
import EmojiCard from "./EmojiCard2";
import "./styles.css";

const App: React.FunctionComponent = () => {
  // console.log("App Rendering");
  const [searchValue, setSearchValue] = useState("");

  const emojiInitialValue = {
    left: "",
    right: ""
  };
  const [emojiHeading, setEmojiHeading] = useState(emojiInitialValue);

  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event) return;
    if (!(event.target instanceof HTMLInputElement)) return;

    const newValue = event.target.value;
    setSearchValue(newValue);
  };

  const changeHeading = useCallback((emojiLeft: string, emojiRight: string) => {
    setEmojiHeading({ left: emojiLeft, right: emojiRight });
  }, []);

  const copyOnClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const selection = window.getSelection();
      if (!selection) return;
      const range = document.createRange();
      const selectedDiv = event.currentTarget as HTMLDivElement;
      const symbol = selectedDiv.querySelector("[data-id='symbol']");
      if (!symbol) return;
      range.selectNodeContents(symbol);
      selection.addRange(range);
      document.execCommand("Copy");
      alert(`Copied ${symbol.textContent} to clipboard`);
      selection.removeAllRanges();
    },
    []
  );
  return (
    <div className="App">
      <Search
        searchKey={searchValue}
        searchChange={searchChange}
        emojiHeading={emojiHeading}
      />
      <EmojiCard
        searchKey={searchValue}
        changeHeading={changeHeading}
        copyOnClick={copyOnClick}
      />
    </div>
  );
};

export default App;

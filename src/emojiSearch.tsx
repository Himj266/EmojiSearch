import { emojiData } from "./emojiData";

export interface Iemoji {
  title: string;
  symbol: string;
  keywords: string;
}
const emojiSearch = (searchKey: string): Iemoji[] => {
  return emojiData.filter((emoji: Iemoji) => {
    let key = searchKey.toLowerCase();
    if (emoji.title.toLowerCase().includes(key)) return true;
    if (emoji.keywords.toLowerCase().includes(key)) return true;
    return false;
  });
};

export default emojiSearch;

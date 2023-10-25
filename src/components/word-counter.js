import React, { useState } from "react";
import "./word-counter.css";

const ResponsiveParagraphWordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    const wordCount = text.split(" ").length;
    setWordCount(wordCount);
  };

  return (
    <div className="container">
      <textarea
        className="word-counter-input"
        onInput={handleInputChange}
        placeholder="Enter your paragraph here..."
      />
      <p className="word-count-output">Word count: {wordCount}</p>
    </div>
  );
};

export default ResponsiveParagraphWordCounter;
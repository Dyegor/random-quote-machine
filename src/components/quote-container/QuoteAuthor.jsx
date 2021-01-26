import React, { useContext } from "react";
import Context from "../context/Context";

export default function QuoteAuthor() {
    const { currentQuoteAuthor } = useContext(Context);

    return (
        <p className="quote-author">{currentQuoteAuthor}</p>
    );
}
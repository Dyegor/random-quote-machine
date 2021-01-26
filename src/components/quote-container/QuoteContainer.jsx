import React from "react";
import QuoteAuthor from "../quote-container/QuoteAuthor";
import QuoteText from "../quote-container/QuoteText";

export default function QuoteContainer() {
    return (
        <div className="quote-container">
            <QuoteText />
            <QuoteAuthor />
        </div>
    );
}
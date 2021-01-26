import React, { useContext } from "react";
import Context from "../context/Context";

export default function QuoteText() {
    const { currentQuote , FontAwesomeIcon} = useContext(Context);

    return (
        <p className="quote-text">
            <FontAwesomeIcon icon={["fas", "quote-left"]} /> {currentQuote}
        </p>
    );
}

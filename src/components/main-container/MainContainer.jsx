import React from "react";
import GetQuoteButton from "../button-components/GetQuoteButton";
import QuoteContainer from "../quote-container/QuoteContainer";

export default function MainContainer() {
    return (
        <div className="main-container">
            <h1>Random Quote</h1>
            <QuoteContainer />
            <GetQuoteButton />
        </div>
    );
}
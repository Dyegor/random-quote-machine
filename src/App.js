import React, { Component } from "react";
import Context from "./components/context/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import quotesArr from "./components/text/QuotesDB";
import MainContainer from "./components/main-container/MainContainer";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            quotes: quotesArr,
            currentQuotePos: 0,
            currentQuote: "",
            currentQuoteAuthor: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const randNum = Math.floor(Math.random() * this.state.quotes.length);

        this.setState({
            currentQuotePos: randNum,
            currentQuote: this.state.quotes[randNum].quote,
            currentQuoteAuthor: this.state.quotes[randNum].author
        });
    }

    handleSubmit() {
        this.setState((prevState) => {
            return {
                currentQuotePos: prevState.currentQuotePos + 1,
                currentQuote: this.state.quotes[prevState.currentQuotePos + 1].quote,
                currentQuoteAuthor: this.state.quotes[prevState.currentQuotePos + 1].author
            };
        });
    }

    render() {
        let currentQuote = this.state.currentQuote;
        let currentQuoteAuthor = this.state.currentQuoteAuthor;
        let handleSubmit = this.handleSubmit;

        return (
            <Context.Provider
                value={{
                    FontAwesomeIcon,
                    currentQuote,
                    currentQuoteAuthor,
                    handleSubmit
                }}
            >
            <MainContainer />
            </Context.Provider>
        );
    }
}
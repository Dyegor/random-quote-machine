import React, { useContext } from "react";
import Context from "../context/Context";
import Button from '@material-ui/core/Button';

export default function GetQuoteButton() {
    const { handleSubmit } = useContext(Context);

    return (
        <Button 
            className="get-quote-button"
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
        >
            Get New Quote
        </Button>
    );
}
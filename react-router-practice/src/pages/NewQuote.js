import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../hooks/hooks/use-http';
import { addQuote } from '../lib/lib/api';

import QuoteForm from './../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);
    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);

    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
    );
};

export default NewQuote;
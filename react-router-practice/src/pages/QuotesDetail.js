import { Route, useParams } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: "Vlad", text: 'Learning React is fun!' },
    { id: 'q2', author: "Vladimir", text: 'Learning React is great!' }
];

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote!</p>;
    }

    return (
        <section>
            <HighlightedQuote author={quote.author} text={quote.text} />
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;
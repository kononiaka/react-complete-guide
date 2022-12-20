import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import { getSingleQuote } from "../lib/lib/api";
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return <div className="centered">
            <LoadingSpinner></LoadingSpinner>;
        </div>;
    }

    if (error) {
        return <div className="centered focused">{error}</div>;
    }

    if (!loadedQuote.text) {
        return <p>No quote!</p>;
    }

    return (
        <section>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Loading comment</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;
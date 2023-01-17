//our-domain.com/news/something-important

import { useRouter } from 'next/router';

const DetailPage = () => {
    const router = useRouter();
    const newsId = router.query.newsId;
    console.log(newsId);

    return (<h1>Detailed Page!</h1>);
};

export default DetailPage;
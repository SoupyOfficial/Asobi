import React from 'react';

import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';

const CardPage = () =>
{
    return(
        <div>
            <LoggedInName />
            <CardUI />
        </div>
    );
}

export default CardPage;
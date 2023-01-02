import React from 'react';
import Banner from '../Banner/Banner';
import History from '../History/History';
import PeopleInformation from '../PeopleInformation/PeopleInformation';
import Quote from '../Quote/Quote';


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Quote></Quote>
            <PeopleInformation/>
            <History/>
        </div>
    );
};

export default Home;
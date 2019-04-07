import React from 'react';

import Address from './Address/Address';
import CallToAction from './CallToAction/CallToAction';
import Social from './Social/Social';
import Title from './Title/Title';

const Contacts = () => (
    <div className="contacts__container">
        <Title />
        <Social />
        <Address />
        <CallToAction />
    </div>
);

export default Contacts;
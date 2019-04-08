import React from 'react';

import Address from './Address/Address';
import CallToAction from './CallToAction/CallToAction';
import Social from './Social/Social';
import Title from './Title/Title';

const Contacts = () => (
    <section className="contacts__container">
        <Title />
        <Social />
        <Address />
        <CallToAction />
    </section>
);

export default Contacts;
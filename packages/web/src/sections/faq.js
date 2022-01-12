import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How much does it cost to be a credit card merchant?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How can I open a merchant account?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How long does the application take?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can I make payment outside of Hong Kong?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How do I get the payment complete?',
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          styles={styles.blockTitle}
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  blockTitle: {
    textAlign: 'center',
  }
};

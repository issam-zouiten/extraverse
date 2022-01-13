import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import Image from 'components/image';

import icon1 from 'assets/icons/Faster.svg';
import icon2 from 'assets/icons/minimal.svg';
import icon3 from 'assets/icons/modern.svg';
import icon4 from 'assets/icons/secure.svg';

const SERVICES_DATA = [
  {
    icon: icon2,
    title: 'Minimal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon3,
    title: 'Modern',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon1,
    title: 'Faster',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    icon: icon4,
    title: 'Secure',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
 
];

const Services = () => {
  return (
    <Box sx={styles.services} id="services">
      <Container>
        <BlockTitle
          slogan="Quality features"
          title="Meet exciting feature of app"
          styles={styles.blockTitle}
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <Box
              className="service-card"
              sx={styles.serviceCard}
              key={`service-post-${index}`}
            >
              <Box className="service-icon" sx={styles.icon}>
                <Image src={service.icon} alt="" />
              </Box>
              <Heading as="h3">{service.title}</Heading>
              <Text as="p">{service.text}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
   
  },
  blockTitle: {
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridGap: ['30px', null, null, null, null, '160px'],
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr 1fr',
      null,
      '1fr 1fr 1fr 1fr',
    ],
  },
  icon: {
    display: 'flex',
    ml: 'auto',
    mr: 'auto',
    width: ['80px', null, null, '210px'],
    height: ['80px', null, null, '210px'],
    justifyContent: 'center',
    alignItems: 'center',
    // boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    // border: '0.5mm ridge rgba(170, 50, 220, .6)',
    borderRadius: ['20px', null, null, '40px'],
    
  },
  serviceCard: {
    textAlign: 'center',
    h3: {
      margin: 0,
      fontSize: ['18px', null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1,
      color: 'black',
      mt: ['30px', null, null],
      mb: ['20px', null, null],
    },
    p: {
      margin: 0,
      fontSize: [0, null, null, '15px'],
      color: 'heading_secondary',
      width: '100%',
      maxWidth: [null, null, null, null, '84%', '100%'],
      mx: [null, null, null, null, 'auto', '0'],
    },
  },
};

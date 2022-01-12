/** @jsx jsx */
import { jsx, Image, Box, Heading } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Heading as="h1">
        MetaNord
      </Heading></Box>
      {/* <Image src={logo} sx={{ display: 'flex' }} alt="MetaNord logo" /> */}
    </Link>
  );
}

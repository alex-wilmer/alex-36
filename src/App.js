import './App.css';
import { ThemeProvider, Flex } from 'theme-ui'
import cat from './cat.jpeg'
import underline from './underline.png'

export const theme = {
  fonts: {
    body: 'Raleway, sans-serif',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
}

function Line() {
  return <img alt="underline" src={underline} />
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex sx={{
        flexDirection: ['column-reverse', 'row']
      }}>
        <Flex sx={{
          mt: [0, '-5rem'],
          p: '3rem',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          <Flex sx={{
            fontStyle: 'italic',
            fontSize: '3rem',
          }}>Alex's 36th</Flex>
          <Line />
          <Flex sx={{ fontSize: '1.3rem', pb: '0.8rem' }}>Celebrating:</Flex>
          <Flex>1 month sober</Flex>
          <Flex>16 years of friendship</Flex>
          <Flex>36 spins around the sun</Flex>
          <Flex sx={{
            p: '0.8rem'
          }}>❤️❤️❤️</Flex>
          <Flex sx={{ fontSize: '1.3rem', p: '0.8rem' }}>Activities:</Flex>
          <Flex>Hang out with Glitch</Flex>
          <Flex>Dinner & Movie</Flex>
        </Flex>
        <Flex sx={{
          flex: 1
        }}>
          <img alt="cat" style={{
            backgroundSize: 'cover',
            width: '100%'
          }} src={cat} />
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;

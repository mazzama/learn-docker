// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fill,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import Terminal from "spectacle-terminal";

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  dockerLogo : require('./assets/docker-logo-software.png'),
  containers : require('./assets/containers.jpeg'),
  dockerContainer : require('./assets/docker-container.png'),
  vmXcontainer : require('./assets/vm-vs-container.png'),
  architecture : require('./assets/architecture.svg'),
  thankYou : require('./assets/giphy.webp')
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide transition={['slide']} bgImage={images.containers}>
          <Heading size={3} textColor="secondary" bgColor="primary">Docker Introduction</Heading>
        </Slide>
        <Slide>
          <Heading size={5} caps>
            Agenda
          </Heading>
          <Layout>
            <Fill>
              <List textColor="tertiary">
                <ListItem>What is Container?</ListItem>
                <ListItem>VMs vs Containers</ListItem>
                <ListItem>What is Docker?</ListItem>              
                <ListItem>Docker Architecture</ListItem>
                <ListItem>Installation</ListItem>
                <ListItem>Hands On</ListItem>
              </List>
            </Fill>
            <Fill>
              <Image fits src={images.dockerLogo} width={500}></Image>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Appear fid={0}>
            <Heading textColor="tertiary" size={5}>What is a Container?</Heading>
          </Appear>
          <Appear fid={0}>
            <Image src={images.dockerContainer}></Image>
          </Appear>
          <Appear fid={1}>
            <Text textSize={28}>
              A standardized unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. 
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" size={5}>VMs vs Containers</Heading>
          <Image src={images.vmXcontainer}></Image>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" size={5}>What is Docker?</Heading>
          <Layout>
            <Appear fid={0}>
            <Fill>
              <Text margin={10} textSize={22} textAlign="left">
                Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.
              </Text>
              <Image src={images.dockerLogo} width={500}/>
            </Fill>
            </Appear>
            <Appear fid={1}>
            <Fill>
              <List margin={20}>
                <ListItem textSize={20}>Standard: Docker created the industry standard for containers, so they could be portable anywhere</ListItem>
                <ListItem textSize={20}>Lightweight: Containers share the machine’s OS system kernel and therefore do not require an OS per application, driving higher server efficiencies and reducing server and licensing costs</ListItem>
                <ListItem textSize={20}>Secure: Applications are safer in containers and Docker provides the strongest default isolation capabilities in the industry</ListItem>
              </List>
            </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" size={5}>Architecture</Heading>
          <Image src={images.architecture} width={800}></Image>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" size={5}>Installations</Heading>
          <Terminal title="mazzama@azzam-thinkpad-x270: ~(zsh)" output={[
            "sudo add-apt-repository deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable",
            "sudo apt-get install docker-ce docker-ce-cli containerd.io",
            "sudo docker run hello-world"
            ]}
          />
        </Slide>
        <Slide>
            <Heading> Let's get your hand dirty!</Heading>
        </Slide>
        <Slide>
            <Heading size={3}>Thank you</Heading>
            <Image src={images.thankYou}/>
        </Slide>
      </Deck>
    );
  }
}

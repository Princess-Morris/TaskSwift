import { TabPanels, TabList, Tabs, Tab, TabPanel } from "@chakra-ui/react";
import { List, ListIcon, ListItem, ListPanel } from "@chakra-ui/react";
import { EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon } from "@chakra-ui/icons";


export default function Prof(){
    return(
        <Tabs mt='40px' p='20px'colorScheme="blue" variant='enclosed'>
            <TabList>
            <Tab _selected={{color: 'white', bg: 'gray'}}>Account Info</Tab>
            <Tab _selected={{color: 'white', bg: 'gray'}}>Task History</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <List spacing='4'>
                  <ListItem>
                    <ListIcon as={EmailIcon} />
                    Email: okpataprincessmorris3@gmail.com
                  </ListItem>

                  <ListItem>
                    <ListIcon as={ChatIcon} />
                    Lorem ipsum dolor sit amet.
                  </ListItem>

                  <ListItem>
                    <ListIcon as={StarIcon} />
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                  </ListItem>
                </List>
              </TabPanel>

              <TabPanel>
                <List>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='teal.400' />
                    Lorem ipsum dolor sit amet consectetur.
                  </ListItem>

                  <ListItem>
                    <ListIcon as={CheckCircleIcon} />
                    Lorem ipsum dolor sit amet consectetur.
                  </ListItem>

                  <ListItem>
                    <ListIcon as={WarningIcon} color='red.400' />
                    Lorem ipsum dolor sit amet consectetur.
                  </ListItem>

                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='teal.400' />
                    Lorem ipsum dolor sit amet consectetur.
                  </ListItem>

                  <ListItem>
                    <ListIcon as={WarningIcon} color='red.400' />
                    Lorem ipsum dolor sit amet consectetur.
                  </ListItem>
                </List>
              </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
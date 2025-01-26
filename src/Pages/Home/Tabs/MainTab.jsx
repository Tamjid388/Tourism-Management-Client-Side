import {Title} from '../../../Component/SectionTitle/Title'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { OurPackagesHome } from './OurPackagesHome';
import { MeetOurGuidesHome } from './MeetOurGuidesHome';

export const MainTab = () => {
  return (
    <div className='container mx-auto'>
   <div>
    <Title 
    subheading={'Explore Our Packages & Meet the Guides'}
    heading={'Packages &  Guides'}>

    </Title>

    <Tabs>
    <TabList>
      <Tab>Our Packages</Tab>
      <Tab>Tour Guides</Tab>
    </TabList>

    <TabPanel>
      <OurPackagesHome></OurPackagesHome>
    </TabPanel>
    <TabPanel>
      <MeetOurGuidesHome></MeetOurGuidesHome>
    </TabPanel>
  </Tabs>
   </div>
        </div>
  )
}

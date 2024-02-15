import './App.css';
import { Avatar, Button, Layout, Typography, theme } from 'antd';
import Home from './pages/Home';
import { useContext, useState } from 'react';
import { SettingFilled } from '@ant-design/icons';
import SettingsDrawer from './pages/SettingsDrawer';
import { StationContext } from './StationContext';

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { selectedDate } = useContext(StationContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'space-between',
          height: 'auto',
          padding: '0px 5%',
        }}
      >
        <Avatar size='large' shape='square' src='./pinwheel.png' />
        <Typography.Title style={{ textAlign: 'center' }}>
          {selectedDate === 0 ? 'Current Conditions' : 'Historical View'}
        </Typography.Title>
        <Button icon={<SettingFilled />} onClick={() => setIsOpen(true)} />
        <SettingsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>
      <Content style={{ padding: '10px 30px' }}>
        <div style={{ background: colorBgContainer }}>
          <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Made with ❤️ by{' '}
        <Button type='dashed' href='https://n818pe.com'>
          Ryan Hunter
        </Button>
      </Footer>
    </Layout>
  );
}

export default App;

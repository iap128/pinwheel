import './App.css';
import { Button, Layout, theme } from 'antd';
import Home from './pages/Home';
import { useState } from 'react';
import { SettingFilled } from '@ant-design/icons';
import SettingsDrawer from './pages/SettingsDrawer';

const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Button icon={<SettingFilled />} onClick={() => setIsOpen(true)} />
        <SettingsDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Header>
      <Content style={{ padding: '10px 50px' }}>
        <div style={{ background: colorBgContainer, boxShadow: '5px 5px 3px #222', borderRadius: '5px' }}>
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

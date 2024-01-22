import './App.css';
import { Button, Layout, theme } from 'antd';
import Home from './pages/Home';

const { Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Content style={{ padding: '0 50px' }}>
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

import './App.css';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

import NavBar from './components/NavBar.jsx';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/platformer.loader.js',
    dataUrl: 'build/platformer.data',
    frameworkUrl: 'build/platformer.framework.js',
    codeUrl: 'build/platformer.wasm',
  });

  return (
    <>
      <NavBar />
      <Container className='mt-4'>
        <Unity
          style={{
            width: '100%',
            height: '90%',
            justifySelf: 'center',
            alignSelf: 'center',
          }}
          unityProvider={unityProvider}
        />
      </Container>
    </>
  );
}

export default App;

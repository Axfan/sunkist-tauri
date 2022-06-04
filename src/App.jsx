import { useState } from 'react'
import { WebviewWindow } from '@tauri-apps/api/window'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const launchFlyff = () => {
    const webview = new WebviewWindow('Flyff', {
      title: 'Flyff Universe',
      url: 'https://universe.flyff.com/play'
    })

    webview.once('tauri://created', function () {
      webview.show()
    })
    
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Sunkist Test</p>
        <p>
          <button type="button" onClick={() => launchFlyff()}>
            Launch Flyff
          </button>
        </p>
      </header>
    </div>
  )
}

export default App

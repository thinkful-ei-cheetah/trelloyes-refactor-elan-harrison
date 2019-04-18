import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './STORE';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={STORE} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

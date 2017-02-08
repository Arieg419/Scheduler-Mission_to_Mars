import React from 'react';
import Form from './Form';
import cn from 'classnames';
import { render } from 'react-dom';

import localizer from 'react-big-calendar/lib/localizers/globalize';
import globalize from 'globalize';

localizer(globalize);

import 'react-big-calendar/lib/less/styles.less';
import './styles.less';
import './prism.less';


const Example = React.createClass({
  getInitialState(){
    return {
      selected: 'popup',
    };
  },

  render() {
    let selected = this.state.selected;
    let Current = {
      popup: require('./demos/popup')
    }[selected];

    return (
      <div className='app'>
      <div className="jumbotron">
        <div className="container">
          <h1>Mission to Mars <i className='fa fa-calendar'/></h1>
          <p>Algorithms in Logic</p>
        </div>
      </div>
        <div className='examples'>
          <div className='example'>
            <Current className='demo' />
          </div>
        </div>
        <div className='docs'>
          <div className="container">
            <Form className='contain col-md-4' />
          </div>
        </div>
      </div>
    );
  },

  select(selected, e){
    e.preventDefault();
    this.setState({ selected })
  }
});

render(<Example/>, document.getElementById('root'));

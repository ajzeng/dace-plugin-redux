import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { loadComponents } from 'loadable-components';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routes';
import createStore from './createStore';

const store = createStore();

// 在渲染前加载好所需要的组件
loadComponents().then(() => {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes, { store })}
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});

if (module.hot) {
  module.hot.accept();
}

// if (process.env.NODE_ENV !== 'production') {
//   // 为了调试方便
//   window.React = React;
//
//   if (module.hot) {
//     module.hot.accept('./components/App', () => {
//       console.log('--accept: /components/App');
//       hydrate(
//         <Provider store={store}>
//           <BrowserRouter>
//             {renderRoutes(routes, { store })}
//           </BrowserRouter>
//         </Provider>,
//         mountNode
//       );
//       // hydrate(
//       //   <Provider store={store}>
//       //     <App />
//       //   </Provider>,
//       //   document.getElementById('root')
//       // );
//     });
//   }
// }

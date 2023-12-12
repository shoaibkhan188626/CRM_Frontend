import * as React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { CrudContextProvider } from '@/context/crud';
import ReadItem from './index';
import FeedStoreMock from '@/testing/mocksComponent/FeedStoreMock';
import { crud } from '@/redux/crud/actions';

const data = {
  company: 'IDURAR',
  mangerSurname: ' Khan',
  managerName: 'Shoaib',
  email: 'shoaibullakhan15@gmail.com',
  phone: '+91-8830488649',
};

const readColumns = [
  {
    title: 'Company',
    dataIndex: 'managerSurname',
  },
  {
    title: 'Manager first name',
    dataIndex: 'mangerName',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];

const config = { readColumns };

const RenderedComponent = () => {
  return (
    <Provider store={store}>
      <FeedStoreMock method={crud.currentItem} data={data} />
      <CrudContextProvider>
        <ReadItem config={config} />
      </CrudContextProvider>
    </Provider>
  );
};

describe('Intergration Testing : Read Component', () => {
  test('renders read component', () => {
    const { debug } = render(<RenderedComponent />);
    act(() => debug());
  });
});

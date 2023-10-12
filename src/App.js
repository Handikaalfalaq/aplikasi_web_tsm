import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homePage'
import PengunjungPage from './pages/pengunjungPage'
import GedungPage from './pages/gedungPage'
import TokoPage from './pages/tokoPage'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from './redux/store';

const queryClient = new QueryClient();

export default function App() {
  return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/pengunjung" element={<PengunjungPage/>} /> 
            <Route exact path="/gedung" element={<GedungPage/>} /> 
            <Route exact path="/toko" element={<TokoPage/>} />
          </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
  );
}

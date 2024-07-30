import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Destination from './Destination';
import DestinationDetail from './DestinationDetail';

function DestinationRoute() {
  return (
    <Routes>
      <Route path="/" element={<Destination />} />
      <Route path=":name" element={<DestinationDetail />} />
    </Routes>
  );
}

export default DestinationRoute;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { DashBoard, DrawingPolygonWithFillPattern, DrawingPolygons, DrawingPolygonsMapBox, DrawingPolygonsMapBoxWithFillPattern, DrawingPolygonsWithDimensions, Header, IndoorLeafLetMapWithMarkerBoundWithCoordinates, IndoorMapBoxMapWithMarkerBoundWithCoordinates, IndoorMapWithMarkerBoundWithCoordinates, MapBoxMapToMarkPoint, MapBoxMapWithSearchBar, MapToMarkPoint, MapsWithSearchBar, Sidebar } from './components';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div style={{display:"flex",height:"100%"}}>
          <Sidebar />
          <div className="content">
            {/* Content goes here */}
            <Routes>
              <Route path="/My-Maps/" element={<DashBoard />} />

              <Route path="/Google/DrawingPolygons" element={<DrawingPolygons />} />
              <Route path="/Google/DrawingPolygonWithFillPattern" element={<DrawingPolygonWithFillPattern />} />
              <Route path="/Google/IndoorMapWithMarkerBoundWithCoordinates" element={<IndoorMapWithMarkerBoundWithCoordinates />} />
              <Route path="/Google/DrawingPolygonsWithDimensions" element={<DrawingPolygonsWithDimensions />} />
              <Route path="/Google/MapsWithSearchBar" element={<MapsWithSearchBar />} />
              <Route path="/Google/MapToMarkPoint" element={<MapToMarkPoint />} />

              <Route path="/MapBox/DrawingPolygonsMapBox" element={<DrawingPolygonsMapBox />} />
              <Route path="/MapBox/DrawingPolygonsMapBoxWithFillPattern" element={<DrawingPolygonsMapBoxWithFillPattern />} />
              <Route path="/MapBox/IndoorMapBoxMapWithMarkerBoundWithCoordinates" element={<IndoorMapBoxMapWithMarkerBoundWithCoordinates />} />
              <Route path="/MapBox/MapBoxMapToMarkPoint" element={<MapBoxMapToMarkPoint />} />
              <Route path="/MapBox/MapBoxMapWithSearchBar" element={<MapBoxMapWithSearchBar />} />

              <Route path="/LeafLet/IndoorLeafLetMapWithMarkerBoundWithCoordinates" element={<IndoorLeafLetMapWithMarkerBoundWithCoordinates />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

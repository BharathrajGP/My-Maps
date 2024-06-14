import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const [expandedItem, setExpandedItem] = useState(() => {
        return sessionStorage.getItem('expandedItem') || null;
    });
    const currentLocation = useLocation();

    useEffect(() => {
        sessionStorage.setItem('expandedItem', expandedItem);
    }, [expandedItem]);

    const handleItemClick = (item) => {
        if (expandedItem === item) {
            setExpandedItem(null);
        } else {
            setExpandedItem(item);
        }
    };

    const handleSubItemClick = (e) => {
        e.stopPropagation();
    };

    const isItemExpanded = (item) => {
        return expandedItem === item;
    };

    const isLinkActive = (link) => {
        return currentLocation.pathname === link;
    };

    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    <li onClick={() => handleItemClick('DashBoard')} style={{ color: expandedItem === 'Google' ? 'orange' : 'white' }}><Link to={"/"} style={{ color: isLinkActive('/') ? 'orange' : 'white', textDecoration: "none" }}>DashBoard</Link></li>
                    <li onClick={() => handleItemClick('Google')} style={{ color: expandedItem === 'Google' ? 'orange' : 'white' }}>
                        Google
                        {isItemExpanded('Google') && (
                            <ul>
                                <li onClick={handleSubItemClick}><Link to={"/Google/DrawingPolygons"} style={{ color: isLinkActive('/Google/DrawingPolygons') ? 'orange' : 'white', textDecoration: "none" }}>Polygon</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/Google/DrawingPolygonsWithDimensions"} style={{ color: isLinkActive('/Google/DrawingPolygonsWithDimensions') ? 'orange' : 'white', textDecoration: "none" }}>PolygonsDimensions</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/Google/DrawingPolygonWithFillPattern"} style={{ color: isLinkActive('/Google/DrawingPolygonWithFillPattern') ? 'orange' : 'white', textDecoration: "none" }}>FillPolygon</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/Google/IndoorMapWithMarkerBoundWithCoordinates"} style={{ color: isLinkActive('/Google/IndoorMapWithMarkerBoundWithCoordinates') ? 'orange' : 'white', textDecoration: "none" }}>FloorPlan</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/Google/MapToMarkPoint"} style={{ color: isLinkActive('/Google/MapToMarkPoint') ? 'orange' : 'white', textDecoration: "none" }}>MarkPoint</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/Google/MapsWithSearchBar"} style={{ color: isLinkActive('/Google/MapsWithSearchBar') ? 'orange' : 'white', textDecoration: "none" }}>Search</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleItemClick('MapBox')} style={{ color: expandedItem === 'MapBox' ? 'orange' : 'white' }}>
                        MapBox
                        {isItemExpanded('MapBox') && (
                            <ul>
                                <li onClick={handleSubItemClick}><Link to={"/MapBox/DrawingPolygonsMapBox"} style={{ textDecoration: "none", color: isLinkActive('/MapBox/DrawingPolygonsMapBox') ? 'orange' : 'white' }}>Polygon</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/MapBox/DrawingPolygonsMapBoxWithFillPattern"} style={{ textDecoration: "none", color: isLinkActive('/MapBox/DrawingPolygonsMapBoxWithFillPattern') ? 'orange' : 'white' }}>FillPolygon</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/MapBox/IndoorMapBoxMapWithMarkerBoundWithCoordinates"} style={{ textDecoration: "none", color: isLinkActive('/MapBox/IndoorMapBoxMapWithMarkerBoundWithCoordinates') ? 'orange' : 'white' }}>FloorPlan</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/MapBox/MapBoxMapToMarkPoint"} style={{ textDecoration: "none", color: isLinkActive('/MapBox/MapBoxMapToMarkPoint') ? 'orange' : 'white' }}>MarkPoint</Link></li>
                                <li onClick={handleSubItemClick}><Link to={"/MapBox/MapBoxMapWithSearchBar"} style={{ textDecoration: "none", color: isLinkActive('/MapBox/MapBoxMapWithSearchBar') ? 'orange' : 'white' }}>Search</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => handleItemClick('LeafLet')} style={{ color: expandedItem === 'LeafLet' ? 'orange' : 'white' }}>
                        LeafLet
                        {isItemExpanded('LeafLet') && (
                            <ul>
                                <li onClick={handleSubItemClick}><Link to={"/LeafLet/IndoorLeafLetMapWithMarkerBoundWithCoordinates"} style={{ textDecoration: "none", color: isLinkActive('/LeafLet/IndoorLeafLetMapWithMarkerBoundWithCoordinates') ? 'orange' : 'white' }}>FloorPlan</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export { Sidebar };

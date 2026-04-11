import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCountries } from '../data/countries';

export default function WorldMap() {
  const mapRef = useRef(null);
  const tooltipRef = useRef(null);
  const initRef = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (initRef.current) return;
    initRef.current = true;

    const countries = getAllCountries();
    const highlighted = {};
    countries.forEach(c => {
      highlighted[c.isoNumeric] = { name: c.name, id: c.id };
    });

    const loadScripts = async () => {
      if (!window.d3) {
        await new Promise((resolve) => {
          const s = document.createElement('script');
          s.src = 'https://d3js.org/d3.v7.min.js';
          s.onload = resolve;
          document.head.appendChild(s);
        });
      }
      if (!window.topojson) {
        await new Promise((resolve) => {
          const s = document.createElement('script');
          s.src = 'https://unpkg.com/topojson-client@3';
          s.onload = resolve;
          document.head.appendChild(s);
        });
      }

      const d3 = window.d3;
      const topojson = window.topojson;
      const container = mapRef.current;
      const tooltip = tooltipRef.current;
      if (!container || !d3 || !topojson) return;

      // Clear any existing SVG (guards against StrictMode double-mount)
      container.innerHTML = '';

      const width = 960;
      const height = 500;

      const svg = d3
        .select(container)
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMidYMid meet');

      const projection = d3
        .geoNaturalEarth1()
        .scale(160)
        .translate([width / 2, height / 1.8]);

      const path = d3.geoPath().projection(projection);

      const world = await d3.json('https://unpkg.com/world-atlas@2.0.2/countries-110m.json');
      const features = topojson.feature(world, world.objects.countries).features;

      svg
        .selectAll('path')
        .data(features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('class', (d) =>
          highlighted[d.id] ? 'map-country active' : 'map-country'
        )
        .on('mouseover', function (event, d) {
          if (highlighted[d.id]) {
            tooltip.style.opacity = 1;
            tooltip.innerText = highlighted[d.id].name;
          }
        })
        .on('mousemove', function (event) {
          const rect = container.getBoundingClientRect();
          tooltip.style.left = event.clientX - rect.left + 20 + 'px';
          tooltip.style.top = event.clientY - rect.top - 10 + 'px';
        })
        .on('mouseout', function () {
          tooltip.style.opacity = 0;
        })
        .on('click', function (event, d) {
          if (highlighted[d.id]) {
            navigate(`/${highlighted[d.id].id}`);
          }
        });
    };

    loadScripts();
  }, [navigate]);

  return (
    <div className="map-wrapper">
      <div ref={mapRef} id="map" />
      <div ref={tooltipRef} className="map-tooltip" />
    </div>
  );
}

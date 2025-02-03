import React from "react";
import { Dropdown } from "react-bootstrap";

function SortableHeader({ label, sortKey, sortConfig, requestSort }) {
  const handleSelect = (direction) => {
    requestSort(sortKey, direction);
  };

  return (
    <th style={{ position: "relative" }}>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="link" id="dropdown-basic">
          {label} {sortConfig.key === sortKey ? (sortConfig.direction === "ascending" ? "↑" : sortConfig.direction === "descending" ? "↓" : "↕") : ""}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="ascending">Ascending</Dropdown.Item>
          <Dropdown.Item eventKey="descending">Descending</Dropdown.Item>
          <Dropdown.Item eventKey="natural">Natural</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </th>
  );
}

export default SortableHeader;
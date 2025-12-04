import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import dropdownArrow from "./../../../public/dropdown.svg";

const SearchBar = () => {
  const [open, setOpen] = useState({ rooms: false, dates: false, guests: false });
  const [rooms, setRooms] = useState("Rooms & Suites");
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState({ adults: 2, children: 0, infants: 0 });

  const containerRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen({ rooms: false, dates: false, guests: false });
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const toggle = (key) => {
    setOpen((prev) => ({ rooms: false, dates: false, guests: false, [key]: !prev[key] }));
  };

  const inc = (field) => setGuests((g) => ({ ...g, [field]: g[field] + 1 }));
  const dec = (field) => setGuests((g) => ({ ...g, [field]: Math.max(0, g[field] - 1) }));

  const handleSearch = () => {
    console.log({ rooms, dates, guests });
    alert(`Search → ${rooms} | ${dates.checkIn} → ${dates.checkOut} | guests: ${guests.adults}A ${guests.children}C ${guests.infants}I`);
  };

  return (
    <div className="sb-wrapper">
      <div className="searchbar-container" ref={containerRef}>
        <div className="sb-field" onClick={() => toggle("rooms")}>
          <div className="sb-label">{rooms}</div>
          <div className="sb-arrow"><img src={dropdownArrow} /></div>

          {open.rooms && (
            <div className="sb-dropdown sb-dropdown-left">
              <div className="rooms-list">
                <button onClick={(e) => { e.stopPropagation(); setRooms("Classic Room"); setOpen({ rooms: false, dates: false, guests: false }); }}>Classic Room</button>
                <button onClick={(e) => { e.stopPropagation(); setRooms("Deluxe Room"); setOpen({ rooms: false, dates: false, guests: false }); }}>Deluxe Room</button>
                <button onClick={(e) => { e.stopPropagation(); setRooms("Suite"); setOpen({ rooms: false, dates: false, guests: false }); }}>Suite</button>
              </div>
            </div>
          )}
        </div>

        <div className="divider" />

        <div className="sb-field" onClick={() => toggle("dates")}>
          <div className="sb-label">Check in &amp; Check out</div>
          <div className="sb-arrow"><img src={dropdownArrow} /></div>

          {open.dates && (
            <div className="sb-dropdown sb-dropdown-center" onClick={(e) => e.stopPropagation()}>
              <label>
                Check In
                <input
                  type="date"
                  value={dates.checkIn}
                  onChange={(e) => setDates((d) => ({ ...d, checkIn: e.target.value }))}
                />
              </label>
              <label>
                Check Out
                <input
                  type="date"
                  value={dates.checkOut}
                  onChange={(e) => setDates((d) => ({ ...d, checkOut: e.target.value }))}
                />
              </label>
              <div className="sb-dropdown-actions">
                <button onClick={() => setDates({ checkIn: "", checkOut: "" })}>Clear</button>
                <button onClick={() => setOpen({ rooms: false, dates: false, guests: false })}>Done</button>
              </div>
            </div>
          )}
        </div>

        <div className="divider" />

        <div className="sb-field" onClick={() => toggle("guests")}>
          <div className="sb-label">Guests</div>
          <div className="sb-arrow"><img src={dropdownArrow} /></div>

          {open.guests && (
            <div className="sb-dropdown sb-dropdown-right" onClick={(e) => e.stopPropagation()}>
              <div className="guest-row">
                <div className="guest-name">Adults</div>
                <div className="guest-controls">
                  <button onClick={() => dec("adults")}>−</button>
                  <span>{guests.adults}</span>
                  <button onClick={() => inc("adults")}>+</button>
                </div>
              </div>
              <div className="guest-row">
                <div className="guest-name">Children</div>
                <div className="guest-controls">
                  <button onClick={() => dec("children")}>−</button>
                  <span>{guests.children}</span>
                  <button onClick={() => inc("children")}>+</button>
                </div>
              </div>
              <div className="guest-row">
                <div className="guest-name">Infants</div>
                <div className="guest-controls">
                  <button onClick={() => dec("infants")}>−</button>
                  <span>{guests.infants}</span>
                  <button onClick={() => inc("infants")}>+</button>
                </div>
              </div>
              <div className="sb-dropdown-actions">
                <button onClick={() => setGuests({ adults: 2, children: 0, infants: 0 })}>Reset</button>
                <button onClick={() => setOpen({ rooms: false, dates: false, guests: false })}>Done</button>
              </div>
            </div>
          )}
        </div>

        <div className="divider" />

        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;

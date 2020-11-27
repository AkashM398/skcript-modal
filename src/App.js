import React from "react";
import "./App.css";
import Modal from "./Modal";
import Mousetrap from "mousetrap";

function App() {
  const list = [
    { id: 1, name: "TestURL-1", url: "https://www.skcript.com", key: "1" },
    { id: 2, name: "TestURL-2", url: "https://www.microsoft.com", key: "2" },
    { id: 3, name: "TestURL-3", url: "https://www.google.com", key: "3"},
    { id: 4, name: "TestURL-4", url: "https://www.google.com", key: "4" },
    { id: 5, name: "TestURL-5", url: "https://www.google.com", key: "5" },
    { id: 6, name: "TestURL-6", url: "https://www.google.com", key: "6" },
    { id: 7, name: "TestURL-7", url: "https://www.google.com", key: "7" },
    { id: 8, name: "TestURL-8", url: "https://www.google.com", key: "8" },
    { id: 9, name: "TestURL-9", url: "https://www.google.com", key: "9" },
  ];

  const modalRef = React.useRef();

  Mousetrap.bind(['ctrl+0', 'command+0'], function() {openModal()}); 

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <div className="home-content">
        <h2 className="home-text">Press Ctrl+0 / Command+0 to open/close modal</h2>
        <button className="home-button" onClick={openModal}>Open Modal</button>
      </div>
      <Modal ref={modalRef} dataList={list} />
    </div>
  );
}

export default App;

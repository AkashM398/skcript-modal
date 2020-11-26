import React from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const list = [
    { id: 1, name: "TestURL", url: "https://www.google.com", key: "1" },
    { id: 2, name: "FestURL", url: "https://www.skcript.com", key: "2"},
    { id: 3, name: "GestURL", url: "https://www.google.com", key: "3" },
    { id: 4, name: "HestURL", url: "https://www.google.com", key: "4" },
    { id: 5, name: "PestURL", url: "https://www.google.com", key: "5" },
    { id: 6, name: "DestURL", url: "https://www.google.com", key: "6" },
    { id: 7, name: "JestURL", url: "https://www.google.com", key: "7" },
    { id: 8, name: "YestURL", url: "https://www.google.com", key: "8" },
    { id: 9, name: "VestURL", url: "https://www.google.com", key: "9" },
  ];

  const modalRef = React.useRef();
  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef} dataList={list} />
    </div>
  );
}

export default App;

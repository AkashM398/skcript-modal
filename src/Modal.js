import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import Mousetrap from "mousetrap";
import { Scrollbars } from "react-custom-scrollbars";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);
  const [text, setText] = React.useState("");

  useImperativeHandle(ref, () => {
    return {
      openModal: () => openClose(),
      close: () => openClose(),
    };
  });

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const openClose = () => {
    setDisplay(!display);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={openClose} className={"modal-backdrop"} />
        <div className={"modal-box"}>
          <div id="search-input">
            <input
              id="search"
              onChange={handleSearch}
              type="search"
              placeholder="Enter something"
            />
          </div>
          <div className="content">
            <Scrollbars>
              {text
                ? props.dataList
                    .filter((data) => data.name.toLowerCase().includes(text.toLowerCase()))
                    .map((filteredName) => (
                      <a
                        href={filteredName.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="content-button">
                          {filteredName.name}
                        </button>
                      </a>
                    ))
                : props.dataList.map((data) => {

                    Mousetrap.bind(`${data.id}`, function() {window.open(`${data.url}`, '_blank')}); 
                    return (
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="content-button">
                          <div className="button-items">
                            <div className="button-icon"><FaExternalLinkSquareAlt/></div>
                            <div className="button-label">{data.name}</div>
                            <div className="button-key">{data.key}</div>
                          </div>
                        </button>
                      </a>
                    );
                  })}
            </Scrollbars>
          </div>
        </div>
      </div>,
      document.getElementById("root")
    );
  }
  return null;
});

export default Modal;

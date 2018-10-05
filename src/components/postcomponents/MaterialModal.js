import React from 'react';
import Modal from 'react-modal';
let MaterialModal = (props) => (
  <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      className="modal"
      // overlayClassName="modal-overlay"
      contentLabel="Add Material"
  >
      {props.amazonSearch.map(item => (
          <div className="amazon browsePost" onClick={() => {
              props.update('materialtitle', item.title);
              props.update('materialasin', item.ASIN);
              props.closeModal();
          }}>
              <div className="amazon-img">
              <img src={item.image} alt={item.title} /></div>
              <div className="amazon-text-container">
                  <div className="amazon-title">{item.title.slice(0,100) + (item.title.length > 100 ? '...' : '')}</div>
                  <div className="amazon-price">{item.price}</div>
              </div>
          </div>
      ))}
  </Modal>
);
export default MaterialModal
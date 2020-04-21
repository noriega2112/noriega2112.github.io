import React from 'react';
import ReactModal from 'react-modal'; 
class ExampleApp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  
  render () {
    let button;
    if(this.props.repo.web == null){
    button = <button className="btn demo-btn" onClick={this.handleOpenModal}>Demo</button>;
    }
    else {
    button =<a className="btn demo-btn" href={this.props.repo.web} target="_blank" rel="noopener noreferrer">Demo</a> ;
    }
    

    
    
    return (
      <div>
        <li className="flex items-center">
             <div className="w-10/12 overflow-x-hidden">
                 <h4 className="text-blue-600 font-bold truncate">{this.props.repo.name}</h4>
                 <p className="text-sm text-gray-800 overflow-y-hidden truncate" style={{height:"1.5em"}}>{this.props.repo.description}</p>
             </div>
        </li>
             <div className="demo">
                 <a className="btn-codigo demo-btn" href={this.props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver código</a>
                
                 {button}
                
             </div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           className="modal"
        >
          <div className="inner-modal">
            <img className="live-demon sm:live-demo" src={this.props.repo.image} alt="Prueba"/>
          </div>
          <button className="btn modal-close" onClick={this.handleCloseModal}>Cerrar</button>
        </ReactModal>
      </div>
    );
  }
}

export default ExampleApp;






// export default (props) => {

//     const [modalShow, setModalShow] = useState(false);

//     return(
//         <>
//         <li className="flex items-center">
//             <div className="w-10/12 overflow-x-hidden">
//                 <h4 className="text-blue-600 font-bold truncate">{props.repo.name}</h4>
//                 <p className="text-sm text-gray-800 overflow-y-hidden truncate" style={{height:"1.5em"}}>{props.repo.description}</p>
//             </div>
//             <div className="flex-1 text-right">
//                 <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver </a>
//             </div>
//         </li>
//         </>
//     );
// }
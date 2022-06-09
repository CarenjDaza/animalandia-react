import './Razas.css';

function ModalRazas(props) {
    return (
        <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.pm3}</h5>
                    
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <img src={props.pm6} className="card-img-top mx-auto d-block mb-2"  alt={props.pm6} />
                    <h4>Acerca de:</h4><p>{props.pm5}</p>
              <h4>Pais:</h4><p>{props.pm7}</p>
              <h4>Tamaño:</h4><p>{props.pm9}</p>
              <h4>Vida:</h4><p>{props.pm8}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRazas;
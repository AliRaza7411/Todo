import React,  { useState }  from 'react'
function IncomeModal({isIncomModalOpen, handleIncomModalClose, handleIncome}) {
    const [amount, setAmount] = useState(0);
    if (isIncomModalOpen == false) {
        return null;
    }

    // send income to app
    const putIncome =  () => {
        handleIncome(amount);
        setAmount(0);
    }
    return (
        <div className="mdl-overlay" >
            <div className="mdl-container" >
                <div className="mdl-header">
                    <button onClick={handleIncomModalClose} className="close-button">X</button>
                </div>
                <div className="mdl-body">
                    <h5>Add Income</h5>
                    <div className='form-group d-flex gap-2'>
                        <input type="text" onChange={(e) => setAmount(e.target.value)}  className='form-control' placeholder="Enter Income" />
                        <button className="btn btn-primary btn-sm"  onClick={putIncome} >Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IncomeModal
import './style.css';

const Content = ({setIsOpen}) =>{
    return(
        <div className="modal_content">
          <p className='text_modal'>To get a trial class, send a message "trial" to the number +1-111-123-45-67. Our manager will contact you to schedule your trial class.</p>
          <button className='closebtn' onClick ={() => setIsOpen(false)}>Close</button>
        </div>
    )
}
export default Content;
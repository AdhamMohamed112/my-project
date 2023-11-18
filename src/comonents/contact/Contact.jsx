import mf from '../../assets/mf.jfif'
import './contact.css'
import Swal from 'sweetalert2';

const Contact = () => {
  function con(){
    Swal.fire({
      title: "Submit your Message",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Send The Message",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: `Your Message've Been Sent`,
        });
      }
    });
  }
  return (
    <div>
      <div className="cards">
        <div className="card c">
          <img src={mf} alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <button onClick={con}>Contact</button>
        </div>
        <div className="card c">
          <img src={mf} alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <button onClick={con}>Contact</button>
        </div>
        <div className="card c">
          <img src={mf} alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <button onClick={con}>Contact</button>
        </div>
        <div className="card c">
          <img src={mf} alt="" />
          <p>Lorem ipsum dolor sit.</p>
          <button onClick={con}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

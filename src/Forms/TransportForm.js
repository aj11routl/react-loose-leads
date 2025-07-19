import "../components/components.css";

function TransportForm() {
  return (
    <form name="transport-form">
      TRANSPORT
      <div class="form-row">
        <div class="col-25">
          <label for="fname">First Name</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col-25">
          <label for="lname">Last Name</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            required
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col-25">
          <label for="area">From</label>
        </div>
        <div class="col-75">
          <select type="text" id="area-from" name="area-from" required />
        </div>
      </div>
      <div class="form-row">
        <div class="col-25">
          <label for="area">To</label>
        </div>
        <div class="col-75">
          <select type="text" id="area-to" name="area-to" required />
        </div>
      </div>
    </form>
  );
}

export default TransportForm;

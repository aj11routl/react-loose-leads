import "../components/components.css";

function WalksForm() {
  return (
    <form name="walks-form">
      WALKS WALKS LAWKALWS
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
          <label for="area">Area</label>
        </div>
        <div class="col-75">
          <input
            type="text"
            id="area"
            name="area"
            placeholder="replace with dropdown of area"
            required
          />
        </div>
      </div>
    </form>
  );
}

export default WalksForm;

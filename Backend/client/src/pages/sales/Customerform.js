<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form with Sliding Bar</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <title>Sidebar</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Header</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  {/*google material icon*/}
  <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n    #body{\n      background-color: rgb(255, 255, 255);\n      margin-left: 19%;\n      margin-bottom: 50px;\n    }\n    .nav-link.active {\n      background-color: blue;\n      color: rgb(212, 130, 130);\n    }\n\n    .form-section {\n      display: none;\n    }\n\n    .form-section.active {\n      display: block;\n    }\n    nav{\n            background: #fcfcfc;\n            color: white;\n        }\n    .logo img {\n            width: 100px; /* Adjust the width as desired */\n            height: 75px; /* Maintain aspect ratio */\n        }\n    " }} />
  <div id="sidebar" />
  <div id="header" />
  <div id="body">
    <div className="container mt-4">
      <h2>New Customer</h2>
      <form>
        <div className="form-group row">
          <label htmlFor="customer-type" className="col-sm-2 col-form-label">Customer Type</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="business" defaultValue="business" />
              <label className="form-check-label" htmlFor="business">Business</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="individual" defaultValue="individual" />
              <label className="form-check-label" htmlFor="individual">Individual</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="salutation" className="col-sm-2 col-form-label">Primary Contact</label>
          <div className="col-sm-2">
            <select className="form-control" id="salutation">
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
              <option value="miss">Miss</option>
            </select>
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="first-name" placeholder="First Name" />
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" id="last-name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="company-name" className="col-sm-2 col-form-label">Company Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="display-name" className="col-sm-2 col-form-label">Customer Display Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="display-name" placeholder="Customer Display Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="customer-email" className="col-sm-2 col-form-label">Customer Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="customer-email" placeholder="Customer Email" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="customer-phone" className="col-sm-2 col-form-label">Customer Phone</label>
          <div className="col-sm-5">
            <input type="tel" className="form-control" id="workphone" placeholder="Workphone" />
          </div>
          <div className="col-sm-5">
            <input type="tel" className="form-control" id="mobile" placeholder="Mobile" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="website" className="col-sm-2 col-form-label">Website</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="website" placeholder="Website" />
          </div>
        </div>
      </form>
    </div>
    <div className="container mt-4">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#other-details">Other Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#address">Address</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-persons">Contact Persons</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#custom-fields">Custom Fields</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#reporting-tags">Reporting Tags</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#remarks">Remarks</a>
        </li>
      </ul>
      <form id="other-details" className="form-section active mt-4">
        <h5>Other Details</h5>
        {/* Form fields for Other Details section */}
        <div className="form-group row">
          <label htmlFor="gst-treatment" className="col-sm-2 col-form-label">GST Treatment</label>
          <div className="col-sm-10">
            <select className="form-control" id="gst-treatment">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="place-of-supply" className="col-sm-2 col-form-label">Place Of Supply</label>
          <div className="col-sm-10">
            <select className="form-control" id="place-of-supply">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Tax Preference</label>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="taxable" defaultValue="taxable" />
              <label className="form-check-label" htmlFor="taxable">Taxable</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="tax-exempt" defaultValue="tax-exempt" />
              <label className="form-check-label" htmlFor="tax-exempt">Tax Exempt</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="currency" className="col-sm-2 col-form-label">Currency</label>
          <div className="col-sm-10">
            <select className="form-control" id="currency">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Enable Portal</div>
          <div className="col-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="enable-portal" defaultValue="enable-portal" />
              <label className="form-check-label" htmlFor="enable-portal">Enable Portal</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="portal-language" className="col-sm-2 col-form-label">Portal Language</label>
          <div className="col-sm-10">
            <select className="form-control" id="portal-language">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="twitter" className="col-sm-2 col-form-label">Twitter</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="twitter" placeholder="Twitter" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="facebook" className="col-sm-2 col-form-label">Facebook</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="facebook" placeholder="Facebook" />
          </div>
        </div>
      </form>
      <form id="address" className="form-section mt-4">
        <h5>Billing Address</h5>
        {/* Form fields for Address section */}
        <div className="form-group row">
          <label htmlFor="Attention" className="col-sm-2 col-form-label">Attention</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Attention" placeholder="Attention" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Country" className="col-sm-2 col-form-label">Country</label>
          <div className="col-sm-10">
            <select className="form-control" id="Country">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Address" placeholder="Street 1" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Address" className="col-sm-2 col-form-label" />
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Address" placeholder="Street 2" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="City" className="col-sm-2 col-form-label">City</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="City" placeholder="City" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="State" className="col-sm-2 col-form-label">State</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="State" placeholder="State" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ZipCode" className="col-sm-2 col-form-label">ZipCode</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ZipCode" placeholder="ZipCode" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Phone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Fax" className="col-sm-2 col-form-label">Fax</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Fax" placeholder="Fax" />
          </div>
        </div>
        <h5>Shipping Address</h5>
        {/* Form fields for Address section */}
        <div className="form-group row">
          <label htmlFor="Attention" className="col-sm-2 col-form-label">Attention</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Attention" placeholder="Attention" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Country" className="col-sm-2 col-form-label">Country</label>
          <div className="col-sm-10">
            <select className="form-control" id="Country">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Address" className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Address" placeholder="Street 1" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Address" className="col-sm-2 col-form-label" />
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Address" placeholder="Street 2" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="City" className="col-sm-2 col-form-label">City</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="City" placeholder="City" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="State" className="col-sm-2 col-form-label">State</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="State" placeholder="State" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="ZipCode" className="col-sm-2 col-form-label">ZipCode</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="ZipCode" placeholder="ZipCode" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Phone" placeholder="Phone" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="Fax" className="col-sm-2 col-form-label">Fax</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="Fax" placeholder="Fax" />
          </div>
        </div>
      </form>
      <form id="contact-persons" className="form-section mt-4">
        <h5>Contact Persons</h5>
        {/* Form fields for Contact Persons section */}
        <table className="table">
          <thead>
            <tr>
              <th>Salutation</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Work Phone</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select className="form-control">
                  <option>Select</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </select>
              </td>
              <td>
                <input type="text" className="form-control" placeholder="First Name" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Last Name" />
              </td>
              <td>
                <input type="email" className="form-control" placeholder="Email Address" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Work Phone" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Mobile" />
              </td>
            </tr>
            <tr>
              <td>
                <select className="form-control">
                  <option>Select</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                </select>
              </td>
              <td>
                <input type="text" className="form-control" placeholder="First Name" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Last Name" />
              </td>
              <td>
                <input type="email" className="form-control" placeholder="Email Address" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Work Phone" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="Mobile" />
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <form id="custom-fields" className="form-section mt-4">
        <h5>Custom Fields</h5>
        {/* Form fields for Custom Fields section */}
        <p>Start adding custom fields for your contacts by going to Settings  Preferences  Customers and Vendors. You can add as many as Ten extra fields, as well as refine the address format of your customers from there.</p>
      </form>
      <form id="reporting-tags" className="form-section mt-4">
        <h5>Reporting Tags</h5>
        {/* Form fields for Reporting Tags section */}
      </form>
      <form id="remarks" className="form-section mt-4">
        <h5>Remarks</h5>
        {/* Form fields for Remarks section */}
        <div className="form-group row">
          <div className="col-sm-10">
            <input type="text" className="form-control" id="facebook" placeholder="Remarks" />
          </div>
        </div>
      </form>
      <div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Items Form</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <title>Sidebar</title>
  <style dangerouslySetInnerHTML={{__html: "\n    .nav-link.active {\n      background-color: blue;\n      color: white;\n    }\n\n    .form-section {\n      display: none;\n    }\n\n    .form-section.active {\n      display: block;\n    }\n    #main{\n      width: 83vw;\n      box-sizing: border-box;\n      right: 0;\n      margin-right: 0;\n      position: relative;\n    }\n    #body{\n            margin-left: 19%;\n            margin-bottom: 50px;\n          }\n  " }} />
  <div id="sidebar" />
  <div id="header" />
  <div id="body">
    <div className="container mt-4">
      <h2>New Item</h2>
      <form>
        <div className="form-group row">
          <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="type" id="goods" defaultValue="goods" />
              <label className="form-check-label" htmlFor="goods">Goods</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="type" id="service" defaultValue="service" />
              <label className="form-check-label" htmlFor="service">Service</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="salutation" className="col-sm-2 col-form-label">Name</label>
          <div className="col-md-2">
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
          <label htmlFor="sku" className="col-md-2 col-form-label">SKU</label>
          <div className="col-md-3">
            <input type="text" className="form-control" id="sku" placeholder />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="unit" className="col-sm-2 col-form-label">Unit</label>
          <div className="col-md-3">
            <select className="form-control" id="unit">
              <option value="option1">DOZEN</option>
              <option value="option2">BOX</option>
              <option value="option3">GRAMS</option>
              <option value="option3">KILOGRAMS</option>
              <option value="option3">METERS</option>
              <option value="option3">TABLETS</option>
              <option value="option3">UNITS</option>
              <option value="option3">PIECES</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="digital-service" defaultValue="digital-service" />
              <label className="form-check-label" htmlFor="digital-service">Is it a digital service</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="hsn-code" className="col-sm-2 col-form-label">HSN Code/SAC</label>
          <div className="col-md-3">
            <input type="hsn-code" className="form-control" id="hsn-code" placeholder />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tax-preference" className="col-sm-2 col-form-label">Tax Preference</label>
          <div className="col-sm-10">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="tax-preference" id="taxable" defaultValue="taxable" />
              <label className="form-check-label" htmlFor="taxable">Taxable</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="tax-preference" id="non-taxable" defaultValue="non-taxable" />
              <label className="form-check-label" htmlFor="non-taxable">Non-Taxable</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="tax" className="col-sm-2 col-form-label">If non-taxable, Exemption Reason</label>
          <div className="col-md-3">
            <select className="form-control" id="tax">
              <option value="option1">Delaware</option>
              <option value="option2">White</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="col-sm-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="sales-info-checkbox" />
              <label className="form-check-label" htmlFor="sales-info-checkbox">Sales Information</label>
            </div>
            <div className="form-group row">
              <label htmlFor="sp" className="col-sm-4 col-form-label">Selling Price</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="sp" placeholder="INR" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="account" className="col-sm-4 col-form-label">Account</label>
              <div className="col-sm-8">
                <select className="form-control" id="account">
                  <option value="option1">Discount</option>
                  <option value="option2">General Income</option>
                  <option value="option3">Interest Income</option>
                  <option value="option3">Late Fee Income</option>
                  <option value="option3">Other Charges</option>
                  <option value="option3">Sales</option>
                  <option value="option3">Shipping Charge</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="description" rows={3} defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="purchase-info-checkbox" />
              <label className="form-check-label" htmlFor="purchase-info-checkbox">Purchase Information</label>
            </div>
            <div className="form-group row">
              <label htmlFor="cp" className="col-sm-4 col-form-label">Cost Price</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="cp" placeholder="INR" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="account" className="col-sm-4 col-form-label">Account</label>
              <div className="col-sm-8">
                <select className="form-control" id="account">
                  <option value="option1">Advertising and Marketing</option>
                  <option value="option2">Automobile Expense</option>
                  <option value="option3">Bad Debt</option>
                  <option value="option3">Bank Fees and Charges</option>
                  <option value="option3">Consultant Expense</option>
                  <option value="option3">Credit Card Charges</option>
                  <option value="option3">Depreciation Expense</option>
                  <option value="option3">IT and Internet Expenses</option>
                  <option value="option3">Janitorial Expense</option>
                  <option value="option3">Lodging</option>
                  <option value="option3">Meals and Entertainment</option>
                  <option value="option3">Office Supplies</option>
                  <option value="option3">Other Expenses</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="description" className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <textarea className="form-control" id="description" rows={3} defaultValue={""} />
              </div>
            </div>
          </div>
        </div>  
      </form>
    </div>
    <div className="form-row justify-content-center">
      <div className="col-sm-2">
        <button type="submit" className="btn btn-primary btn-block">Save</button>
      </div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-secondary btn-block">Cancel</button>
      </div>
    </div>
  </div>
</div>

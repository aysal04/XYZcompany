import React from 'react';

const newVendorPayment = () => {
  React.useEffect(() => {
    let ctx = document.getElementById("myChart").getContext("2d");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "income",
            data: [2, 9, 3, 17, 6, 3, 7],
            backgroundColor: "rgba(167, 236, 238, 0.6)",
          },
          {
            label: "expenses",
            data: [2, 2, 5, 5, 2, 1, 10],
            backgroundColor: "rgba(154, 197, 244, 0.6)",
          },
        ],
      },
    });

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
      });

      $('.more-button,.body-overlay').on('click', function () {
        $('#sidebar,.body-overlay').toggleClass('show-nav');
      });
    });
  }, []);

  return (
    <html>
      <head>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Payments</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <script src="https://kit.fontawesome.com/60632f752f.js" crossorigin="anonymous"></script>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        <title>Sidebar</title>
        <link rel="stylesheet" href="../Sidebar Css/bootstrap.min.css" />
        <link rel="stylesheet" href="../Sidebar Css/custom.css" />
        <link rel="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" type="text/css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
        <style>
          .main-con {
            margin-left: 17%;
          }

          .nav-link.active {
            margin-left: 100px;
          }
        </style>
      </head>
      <body>
        <div id="sidebar"></div>
        <div id="header"></div>

        <div className="main-con">
          <div className="col-9 p-2">
            <div className="container">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className="nav-link" href="./account.html">
                    Bill Payment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#tab2">
                    Vendor Advance
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <div className="form-container">
                    <form>
                      <br />
                      <div className="form-group">
                        <label htmlFor="vendorname">
                          Vendor Name<span className="required-field">*</span>
                        </label>
                        <select className="form-control" id="paymentMode" required>
                          <option value="v1">Vendor 1</option>
                          <option value="v2">Vendor 2</option>
                          <option value="v3">Vendor 3</option>
                        </select>
                      </div>
                      <hr />

                      <div className="form-group">
                        <label htmlFor="paymentNumber">
                          Payment#<span className="required-field">*</span>
                        </label>
                        <input type="text" className="form-control" id="paymentNumber" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="paymentMade">
                          Payment Made<span className="required-field">*</span>
                        </label>
                        <input type="text" className="form-control" id="paymentMade" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="tds">TDS</label>
                        <select className="form-control" id="tds" required>
                          <option value="v0">Select a Tax</option>
                          <option value="v1">Vendor 1</option>
                          <option value="v2">Vendor 2</option>
                          <option value="v3">Vendor 3</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="paymentDate">
                          Payment Date<span className="required-field">*</span>
                        </label>
                        <input type="text" className="form-control" id="paymentDate" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="paymentMode">Payment Mode</label>
                        <select className="form-control" id="paymentMode">
                          <option value="cash">Cash</option>
                          <option value="credit">Credit</option>
                          <option value="debit">Debit</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="paidThrough">
                          Paid Through<span className="required-field">*</span>
                        </label>
                        <select className="form-control" id="paidThrough" required>
                          <option value="bank">Bank</option>
                          <option value="paypal">PayPal</option>
                          <option value="creditCard">Credit Card</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="depositto">
                          Deposit to<span className="required-field">*</span>
                        </label>
                        <select className="form-control" id="depositto" required>
                          <option value="bank">Bank</option>
                          <option value="paypal">PayPal</option>
                          <option value="creditCard">Credit Card</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="reference">Reference</label>
                        <input type="text" className="form-control" id="reference" />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </form>
                  </div>
                </div>

                <div className="tab-pane fade" id="tab2">
                  <div className="form-container">
                    <form>
                      <br />
                      <div className="form-group">
                        <label htmlFor="vendorname">
                          Vendor Name<span className="required-field">*</span>
                        </label>
                        <select className="form-control" id="paymentMode" required>
                          <option value="v1">Vendor 1</option>
                          <option value="v2">Vendor 2</option>
                          <option value="v3">Vendor 3</option>
                        </select>
                      </div>
                      <hr />

                      <div className="form-group">
                        <label htmlFor="advanceAmount">
                          Advance Amount<span className="required-field">*</span>
                        </label>
                        <input type="text" className="form-control" id="advanceAmount" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="advanceDate">
                          Advance Date<span className="required-field">*</span>
                        </label>
                        <input type="text" className="form-control" id="advanceDate" required />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3">
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>

        <div className="sidebar-bg"></div>
        <script src="../Sidebar Js/jquery.min.js"></script>
        <script src="../Sidebar Js/popper.min.js"></script>
        <script src="../Sidebar Js/bootstrap.min.js"></script>
        <script src="../Sidebar Js/custom.js"></script>
      </body>
    </html>
  );
};

export default newVendorPayment;

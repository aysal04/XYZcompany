<div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Bootstrap CSS */}
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <title>vendors</title>
  <style dangerouslySetInnerHTML={{__html: "\n        \n      #filter{\n        padding-top: 20px;\n        \n      }\n      #dropdownMenu2{\n        font-size: x-large;\n      }\n      #button{\n        border-radius: 0%;\n        \n        font-size: large;\n      }\n        \n        .right{\n          justify-content: space-around;\n        }\n        #add{\n          color: aliceblue;\n        }\n        td,th{\n          padding: 30px;\n        }\n        table{\n          border-collapse: collapse;\n        }\n        tr{\n          border:dashed;\n          border-width: 1px 0;\n        }\n        \n        .top{\n          display: grid;\n          position: sticky;\n          top:0;\n          background-color: #f2f2f2;\n        }\n       \n        .video{\n            text-align: center;\n            padding: 30px;\n            \n        }\n        .bottom{\n            text-align: center;\n            line-height: 20px;\n        }\n        .link{\n            padding-top:20px;\n           padding-bottom:100px;\n        }\n        .end{\n            text-align: center;\n            background-color: #f2f2f2;\n            \n        }\n        .container{\n            text-align: center;\n        }\n        .expense{\n            background-color: #f2f2f2;\n           display: inline-block;\n          text-align: left;\n            line-height: 40px;\n            padding-bottom: 100px;\n            \n        }\n        .main{\n          margin-left: 18%;\n        }\n      " }} />
  <div id="header" />
  <div id="sidebar" />
  <section className="main">
    <div className="top d-flex">
      <div className="m-3 me-auto">
        <div className="dropdown" id="filter">
          <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
            <b>All Expenses</b>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">All</button></li>
            <li><button className="dropdown-item" type="button">Unbilled</button></li>
            <li><button className="dropdown-item" type="button">Invoice</button></li>
            <li><button className="dropdown-item" type="button">Reimbursed</button></li>
            <li><button className="dropdown-item" type="button">Billable</button></li>
            <li><button className="dropdown-item" type="button">Non-Billable</button></li>
            <li><button className="dropdown-item" type="button">With Receipts</button></li>
            <li><button className="dropdown-item" type="button">Without Receipts</button></li>
          </ul>
        </div>
      </div>
      <div className="m-3">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" style={{color: 'orange'}} id="button" data-bs-toggle="dropdown"><i className="fa-solid fa-envelope-open-text" /></button>
      </div>
      <div className="m-3">
        <a href="add_expenses.html" style={{color: 'white'}} id="button" className="btn btn-info" role="button"><b>+New</b></a>
      </div>
      <div className="m-3">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="button" data-bs-toggle="dropdown">
          <i className="fa-sharp fa-solid fa-gear" />
        </button>
      </div>
      <div className="m-3">
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="button" data-bs-toggle="dropdown">
            <i className="fa-solid fa-list" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Created Time</button></li>
            <li><button className="dropdown-item" type="button">Date</button></li>
            <li><button className="dropdown-item" type="button">Expense Account</button></li>
            <li><button className="dropdown-item" type="button">Vendor Name</button></li>
            <li><button className="dropdown-item" type="button">Paid Through</button></li>
            <li><button className="dropdown-item" type="button">Customer Name</button></li>
            <li><button className="dropdown-item" type="button">Amount</button></li>
            <li><button className="dropdown-item" type="button"><i className="fa-solid fa-cloud-arrow-down" /> Import Expenses</button></li>
            <li><button className="dropdown-item" type="button"><i className="fa-solid fa-cloud-arrow-up" /> Export Expenses</button></li>
            <li><button className="dropdown-item" type="button"><i className="fa-solid fa-cloud-arrow-up" /> Export Current View</button></li>
            <li><button className="dropdown-item" type="button"><i className="fa-solid fa-arrows-rotate" /> Refresh List</button></li>
          </ul>
        </div>
      </div>
      <div className="m-3">
        <a href><i className="fa-regular fa-lightbulb" /> Page Tips</a>
      </div>
      <hr />
    </div>
    <div className="video">
      <iframe className="shadow" width={560} height={315} src="https://www.youtube.com/embed/g-hwH6r6dMo" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
    <div className="bottom">
      <h2>Time To Manage Your Expenses!</h2>
      <p>Create and manage expenses that are part of your organization’s operating costs.</p>
      <div className="d-grid gap-2 col-3 mx-auto">
        <a href="C:\Users\ishis\OneDrive\Desktop\basil_project\new_vendor.html" style={{color: 'white'}} id="button" className="btn btn-info btn-lg" role="button"><b>+New</b></a>
      </div>
      <div className="link"><a href>Import Expenses</a></div>
    </div>
    <div className="end">
      <h6>Life Cycle of an Expense</h6>
      <img src="payments.jpeg" /> 
      <hr />
      <div className="container">
        <ul className="expense" style={{listStyleType: 'none'}}>
          <li><h5>In the Expenses section, you can:</h5></li>
          <li><i className="fa-sharp fa-regular fa-circle-check" /> Record a single expense or record expenses in bulk.</li>
          <li><i className="fa-sharp fa-regular fa-circle-check" /> Set mileage rates and record expenses based on the distance travelled.</li>
          <li><i className="fa-sharp fa-regular fa-circle-check" /> Convert an expense into an invoice to get it reimbursed.</li>
        </ul>
      </div>
    </div>
  </section>
  {/* Optional JavaScript; choose one of the two! */}
  {/* Option 1: Bootstrap Bundle with Popper */}
  {/* Option 2: Separate Popper and Bootstrap JS */}
  {/*
    
    
    */}
</div>

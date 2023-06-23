<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <title>vendors</title>
  <style dangerouslySetInnerHTML={{__html: "\n        \n      #filter{\n        padding: 20px;\n        \n      }\n      #dropdownMenu2{\n        font-size: x-large;\n      }\n      #button{\n        border-radius: 0%;\n      }\n     .right{\n          justify-content: space-around;\n        }\n        #add{\n          color: aliceblue;\n        }\n        td,th{\n          padding: 30px;\n        }\n        table{\n          border-collapse: collapse;\n        }\n        tr{\n          border:dashed;\n          border-width: 1px 0;\n        }\n        \n        .top{\n          display: grid;\n          position: sticky;\n          top:0;\n          background-color: #f2f2f2;\n        }\n        \n        .main{\n          margin-left: 18%;\n        }\n      " }} />
  <div id="sidebar" />
  <div id="header" />
  <section classname="main">
    <div classname="top d-flex">
      <div classname="m-3 me-auto">
        <div classname="dropdown" id="filter">
          <button classname="btn dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown">
            <b>All Vendors</b>
          </button>
          <ul classname="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button classname="dropdown-item" type="button">All Vendors</button></li>
            <li><button classname="dropdown-item" type="button">Active Vendors</button></li>
            <li><button classname="dropdown-item" type="button">CRM Vendors</button></li>
            <li><button classname="dropdown-item" type="button">Duplicate Vendors</button></li>
            <li><button classname="dropdown-item" type="button">Inactive Vendors</button></li>
            <li><button classname="dropdown-item" type="button">Vendor Portal Enabled</button></li>
            <li><button classname="dropdown-item" type="button">Vendor Portal Disabled</button></li>
            <li><button classname="dropdown-item" type="button"><b>+</b> New Custom View</button></li>
          </ul>
        </div>
      </div>
      <div classname="m-3">
        <span><i classname="fa-solid fa-triangle-exclamation" />Update GST details htmlFor </span> 520 vendors
      </div>
      <div classname="m-3">
        <a href="new_vendor.html" id="button" classname="btn btn-info" role="button">+New</a>
      </div>
      <div classname="m-3">
        <button classname="btn btn-outline-secondary dropdown-toggle" type="button" id="button" data-bs-toggle="dropdown">
          <i classname="fa-sharp fa-solid fa-gear" />
        </button>
      </div>
      <div classname="m-3">
        <div classname="dropdown">
          <button classname="btn btn-outline-secondary dropdown-toggle" type="button" id="button" data-bs-toggle="dropdown">
            <i classname="fa-solid fa-list" />
          </button>
          <ul classname="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button classname="dropdown-item" type="button">Name</button></li>
            <li><button classname="dropdown-item" type="button">Company Name</button></li>
            <li><button classname="dropdown-item" type="button">Payables</button></li>
            <li><button classname="dropdown-item" type="button">Created Time</button></li>
            <li><button classname="dropdown-item" type="button">Last Modified Time</button></li>
            <li><button classname="dropdown-item" type="button"><i classname="fa-solid fa-cloud-arrow-down" /> Import Expenses</button></li>
            <li><button classname="dropdown-item" type="button"><i classname="fa-solid fa-cloud-arrow-up" /> Export Expenses</button></li>
            <li><button classname="dropdown-item" type="button"><i classname="fa-solid fa-cloud-arrow-up" /> Export Current View</button></li>
            <li><button classname="dropdown-item" type="button"><i classname="fa-solid fa-arrows-rotate" /> Refresh List</button></li>
            <li><button classname="dropdown-item" type="button"><i classname="fa-regular fa-lightbulb" /> Page Tips</button></li>
          </ul>
        </div>
      </div>
      <div classname="m-3">
        <a href><i classname="fa-regular fa-lightbulb" /> Page Tips</a>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th scope="col"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <th scope="col"><b>NAME</b></th>
          <th scope="col"><b>COMPANY NAME</b></th>
          <th scope="col"><b>EMAIL</b></th>
          <th scope="col"><b>WORK PHONE</b></th>
          <th scope="col"><b>PAYABLES</b></th>
        </tr>
      </thead>
      <tbody>
        <tr classname="body">
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>Registered Vendor</td>
          <td>Price, Schiller and Murazik</td>
          <td>RegisteredVendor_7@zylker.com</td>
          <td>..</td>
          <td>Rs928</td>
        </tr>
        <tr>
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>Overseas Vendor</td>
          <td>Langworth - Purdy</td>
          <td>OverseasVendor4@zylker.com</td>
          <td>..</td>
          <td>Rs376</td>
        </tr>
        <tr>
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>SEZ Vendor</td>
          <td>Wunsch, Dicki and Kuvalis</td>
          <td>SEZVendor45@zylker.com</td>
          <td>..</td>
          <td>Rs779</td>
        </tr>
        <tr>
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>Deemed Export Vendor</td>
          <td>Fadel Group</td>
          <td>DeemedExportVendor_100@zylker.com</td>
          <td>..</td>
          <td>Rs346</td>
        </tr>
        <tr>
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>Unregistered Vendor</td>
          <td>Koepp-Beer</td>
          <td>UnregisteredVendor97@zylker.com</td>
          <td>..</td>
          <td>Rs603</td>
        </tr>
        <tr>
          <th scope="row"><input classname="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" /></th>
          <td>Composition Reg Vendor</td>
          <td>Berge LLC</td>
          <td>CompositionRegVendor42@zylker.com</td>
          <td>..</td>
          <td>Rs669</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>

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
  {/*google material icon*/}
  <style dangerouslySetInnerHTML={{__html: "\n    #body{\n      background-color: rgb(255, 255, 255);\n      margin-left: 17%;\n    }\n  " }} />
  <div id="sidebar" />
  <div id="header" />
  <div id="body">
    <div className="container mt-4">
      <h2 className="mb-4">All Customers </h2>
      {/* Create Form */}
      <button type="submit" className="btn btn-primary"><a style={{color: 'black'}} href="customerForm.html">+NEW</a></button>
      <hr />
      {/* Table */}
      <table className="table table-striped" id="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="select-all-checkbox" /></th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Workphone</th>
            <th>Receivables</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>John Doe</td>
            <td>ABC Company</td>
            <td>johndoe@example.com</td>
            <td>123-456-7890</td>
            <td>5000</td>
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Jane Smith</td>
            <td>XYZ Corporation</td>
            <td>janesmith@example.com</td>
            <td>987-654-3210</td>
            <td>8000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

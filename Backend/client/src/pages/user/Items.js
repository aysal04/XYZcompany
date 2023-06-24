<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Items Page</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <title>Sidebar</title>
  <style dangerouslySetInnerHTML={{__html: "\n          #body{\n            margin-left: 17%;\n          }\n\n        " }} />
  <div id="sidebar" />
  <div id="header" />
  <div id="body">
    <div className="container mt-4">
      <h2 className="mb-4">All Items</h2>
      {/* Create Form */}
      <button type="submit" className="btn btn-primary"><a style={{color: 'black'}} href="newitemsform.html">+NEW</a></button>
      <hr />
      {/* Table */}
      <table className="table table-striped" id="data-table">
        <thead>
          <tr>
            <th><input type="checkbox" id="select-all-checkbox" /></th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>RATE</th>
            <th>STOCK ON HAND</th>
            <th>HSN/SAC</th>
            <th>USAGE UNIT</th>
            <th><i className="fas fa-search" /></th>  
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 0</td>
            <td>Item 0- Sales Description</td>
            <td>₹ 951.00</td>
            <td />
            <td>30585</td>
            <td>Mtr</td>
            <td />  
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 1</td>
            <td>Item 1 - Sales Description</td>
            <td>₹ 440.00</td>
            <td />
            <td>11234</td>
            <td>Pcs</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 2</td>
            <td />
            <td />
            <td />
            <td>30967</td>
            <td>Kg</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 3</td>
            <td />
            <td />
            <td />
            <td>77340</td>
            <td>Kg</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 4</td>
            <td>Item 4 - Sales Description</td>
            <td>₹ 938.00</td>
            <td />
            <td>47886</td>
            <td>Ltr</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 5</td>
            <td>Item 5 - Sales Description</td>
            <td>₹ 728.00</td>
            <td />
            <td>40052</td>
            <td>Pcs</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 6</td>
            <td>Item 6 - Sales Description</td>
            <td>₹ 135.00</td>
            <td>255</td>
            <td>97938</td>
            <td>Kg</td>
            <td />
          </tr>
          <tr>
            <td><input type="checkbox" className="entry-checkbox" /></td>
            <td>Item 7</td>
            <td>Item 7 - Sales Description</td>
            <td>₹ 27.00</td>
            <td>337</td>
            <td>23076</td>
            <td>Ltr</td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

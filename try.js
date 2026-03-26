function generateInvoice() {

  // SAFE GET VALUES (use IDs instead of index)
  let strn = document.getElementById("strn")?.value || "";
  let buyer = document.getElementById("buyer")?.value || "";
  let invoiceNo = document.getElementById("invoiceNo")?.value || "INV-" + Date.now();
  let date = document.getElementById("date")?.value || "";
  let value = document.getElementById("value")?.value || 0;
  let tax = document.getElementById("tax")?.value || 0;
  let total = document.getElementById("total")?.value || 0;
  let hsCode = document.getElementById("hsCode").value;
  

  // OPEN NEW WINDOW
  let win = window.open("", "_blank");

  win.document.write(`
  <html>
  <head>
    <title>Invoice</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>

    <style>
      body { font-family: Arial; margin:0; }
      .container { max-width:900px; margin:auto; padding:20px; }

      .header {
        background:#1e3c72;
        color:white;
        padding:15px;
      }

      h2 { margin:0; }

      table {
        width:100%;
        border-collapse:collapse;
        margin-top:20px;
      }

      th, td {
        border:1px solid #ccc;
        padding:10px;
        text-align:right;
      }

      th {
        background:#2c3e50;
        color:white;
      }

      .left { text-align:left; }

      .footer {
        margin-top:30px;
        display:flex;
        justify-content:space-between;
      }

      button {
        padding:10px;
        background:#007bff;
        color:white;
        border:none;
        cursor:pointer;
      }
    </style>
  </head>

  <body>

  <div class="container">

    <div class="header">
      <h2>KOH-E-NOOR TEXTILES</h2>
      <p>ADDRESS: 	PLOT NO. 18-S, QUAID-E-AZAM, INDUSTRIAL ESTATE KOTLOKHPAT, LAHORE </p>
      <p>NTN: 4930313-1 </p>
      <p>STRN: ${3277876243929}</p>
    </div>

    <p><b>Invoice No:</b> ${invoiceNo}</p>
    <p><b>Date:</b> ${date}</p>
    <p><b>Buyer:</b> ${buyer}</p>

    <table>
      <tr>
        <th>Sr#</th>
        <th>H.S Code</th>
        <th class="left">Description</th>
        <th>Qty</th>
        <th>Rate</th>
        <th>Excl Amt</th>
        <th>Tax</th>
        <th>Total</th>
      </tr>

      <tr>
        <td>1</td>
        <td> ${hsCode} </td>        
        <td class="left">Product</td>
        <td>1</td>
        <td>${value}</td>
        <td>${value}</td>
        <td>${tax}</td>
        <td>${total}</td>
      </tr>
    </table>

    <br>

    <div style="text-align:center;">
      <h3>QR Code</h3>
      <div id="qrcode"></div>
    </div>

    <div class="footer">
      <div>Prepared By</div>
      <div>FBR Invoice # ${invoiceNo}</div>
    </div>

    <br>
    <button onclick="window.print()">Download PDF</button>

  </div>

  <script>
    new QRCode(document.getElementById("qrcode"), {
      text: "Invoice: ${invoiceNo} | Buyer: ${buyer} | Total: ${total}",
      width: 120,
      height: 120
    });
  <\/script>

  </body>
  </html>
  `);

  win.document.close();
}
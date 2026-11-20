function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  const rows = Number(rn);
  const cols = Number(cn);

  // Non-numeric value: ignore, table mat banao
  if (rn === null || cn === null || rn.trim() === "" || cn.trim() === "" ||
      isNaN(rows) || isNaN(cols) ||
      !Number.isInteger(rows) || !Number.isInteger(cols)) {
    return;
  }

  // 0 ya negative value: alert dikhao, table mat banao
  if (rows <= 0 || cols <= 0) {
    alert("Please enter positive numbers for rows and columns.");
    return;
  }

  const table = document.getElementById("myTable");
  table.innerHTML = ""; // purani table saaf karo

  for (let i = 0; i < rows; i++) {
    const tr = table.insertRow(i);
    for (let j = 0; j < cols; j++) {
      const td = tr.insertCell(j);
      td.innerText = "Row-" + i + " Column-" + j;
    }
  }
}
var tables = [
  {
    art: "A",
    count: "0",
    name: "name1",
    ean: "802.0079.127",
    marker: "null",
    stammkost: "A",
    tablename: "Hello",
  },
  {
    art: "A",
    count: "0",
    name: "2",
    ean: "657.7406.559",
    marker: "null",
    stammkost: "A",
    tablename: "World",
  },
];

tables.forEach(function (table) {
  var tableName = table.name;
  console.log(tableName);
});

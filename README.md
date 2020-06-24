ember-table-ag-grid
==============================================================================

This is a simple AG-Grid wrapper component.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

Installation
------------------------------------------------------------------------------

```shell
ember install ember-table-ag-grid
```

Usage
------------------------------------------------------------------------------

Controller or Component

```js
columnDefs = [
  {headerName: 'Make', field: 'make'},
  {headerName: 'Model', field: 'model'},
  {headerName: 'Price', field: 'price'}
]

rowData = [
  {make: 'Toyota', model: 'Celica', price: 35000},
  {make: 'Ford', model: 'Mondeo', price: 32000},
  {make: 'Porsche', model: 'Boxter', price: 72000}
];
```

```hbs
<AgGrid
  class="ag-theme-balham"
  @columnDefs={{this.columnDefs}}
  @rowData={{this.rowData}} />
```

TODO
------------------------------------------------------------------------------

* [ ] SCSS based imports
* [ ] CSS dynamic imports
* [ ] Test cases

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

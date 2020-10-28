import Component from '@glimmer/component';
import { action } from '@ember/object';
import config from 'ember-get-config';


export default class AgGridComponent extends Component {
	gridOptions = {
		columnDefs: this.args.columnDefs,
		rowData: this.args.rowData,
		components: this.args.components,
		...this.args.additionalParameters
	};

	@action
	async initializeGrid(elem) {
		let { Grid } = await import('ag-grid-community');
		new Grid(elem, this.gridOptions);
	}
}

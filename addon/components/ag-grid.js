import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AgGridComponent extends Component {
	gridOptions = {
		columnDefs: this.args.columnDefs,
		rowData: this.args.rowData,
		...this.args.additionalParameters
	};

	@action
	async initializeGrid(elem) {
		let { Grid } = await import('ag-grid-community');

		new Grid(elem, this.gridOptions);
	}
}

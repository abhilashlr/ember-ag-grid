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
		let {LicenseManager} = await import ('@ag-grid-enterprise/core');
		const { environment, modulePrefix } = config;

		console.log("ENVIRONMENT " , environment );
		new Grid(elem, this.gridOptions);
	}
}

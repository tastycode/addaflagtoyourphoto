class FlagList extends React.Component {
  constructor() {
    super();
    this.state = {
      filterValue: null
    };
  }
  _filterChanged(e) {
    this.setState({filterValue: e.target.value});
  }
  filteredFlags() {
    if (!this.state.filterValue) {
      return Object.keys(this.props.flags).slice(0, 3);
    }
    return Object.keys(this.props.flags).filter((code) => {
      const name = this.props.flags[code];
      return (new RegExp(this.state.filterValue, 'i')).test(name);
    }).slice(0,3);
  }
  render () {
    return (
      <div>
        <input className="flagInput" value={this.state.filterValue} onChange={this._filterChanged.bind(this)}/>
        <ul className="flagList">
          {this.filteredFlags().map((key) => {
            const name = this.props.flags[key];
            return (
              <li><Flag {...{key,name}} code={key}/></li>
            );
          })}
        </ul>
      </div>
    );
  }
}


class Flag extends React.Component {
  _flag_clicked(flag) {
    window.location.href = '/preview?flag_name=' + flag;
  }
  render () {
    return (
      <div className="flag" onClick={this._flag_clicked.bind(this, this.props.code)}>
        <img className="flag-img" src={'/assets/flags/' + this.props.code.toLowerCase() + '.png'}/>
        <p className="flag-caption">{this.props.name}</p>
      </div>
    );
  }
}


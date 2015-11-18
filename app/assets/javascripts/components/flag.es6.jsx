class Flag extends React.Component {
  _flag_clicked(flag) {
    $.ajax({
      url: '/flag',
      method: 'POST',
      params: {
        name: flag
      }
    }).then(function(result) {
      console.log(result);
    });
  }
  render () {
    return (
      <div className="flag" onClick={this._flag_clicked.bind(this, this.props.name)}>
        <img className="flag-img" src={'/assets/flags/' + this.props.code.toLowerCase() + '.png'}/>
        <p className="flag-caption">{this.props.name}</p>
      </div>
    );
  }
}


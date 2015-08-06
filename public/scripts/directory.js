var Directory = React.createClass({
    render: function() {
        return (
          <div>
            <div style={directoryWrapper}>
              <img src={'../images/M.png'} alt="M" style={mainLogo} className="img-responsive"/>
              <FamilyTable family={this.props.families[0]} />
            </div>
          </div>
        );
    }
});

var FamilyTable = React.createClass({
    handleSurnameClick: function(family) {
      // TODO: rebuild this table with the new family values
      var currentFamily = family.data;
      console.log(currentFamily);
      this.setState({family: currentFamily});
    },
    getInitialState: function() {
      return {family: this.props.family};
    },
    render: function() {
        var rows = [];
        console.log('incoming fam: ' + this.state.family.surname);
        this.state.family.children.forEach(function(familyMember) {
          rows.push(<FamilyRow family={familyMember} key={familyMember.head} onSurnameClick={this.handleSurnameClick} />);
        }.bind(this));
        return (
          <div>
            <div style={header}>
              <img src={this.state.family.headLeft} alt="boohoo" style={profileLeft} className="img-responsive"/>
              <div style={familySurname} >{this.state.family.surname}</div>
              <img src={this.state.family.headRight} alt="boohoo" style={profileRight} className="img-responsive"/>
            </div>
            {rows}
          </div>
        );
    }
});

var FamilyRow = React.createClass({
  handleClick: function(e) {
    this.props.onSurnameClick({data: this.props.family});
    //alert('CLICK ' + this.props.family.surname);
  },
  render: function() {
    return (
      <div onClick={this.handleClick} >
        <div style={familyHeads}>{this.props.family.head}</div>
        <div style={familyLastName}>{this.props.family.surname}</div>
      </div>
    );
  }
});

var FAMILIES = [
  { "surname": "Mortensen",
    "head": "Boyd and Lucille",
    "hasChildren": true,
    "headLeft": "../images/Gramps.png",
    "headRight": "../images/Granny.png",
    "children": [
      { "surname": "Hart",
        "head": "Ned and Charmaine",
        "hasChildren": true,
        "children": [
          { "surname": "Peterson",
            "head": "Mike and Joanna",
            "hasChildren": true
          },
          {
            "surname": "Hart",
            "head": "Jonathan",
            "hasChildren": false
          }
        ]
      },
      { "surname": "Cannon",
        "head": "Wilford and Melanie",
        "hasChildren": true,
        "children": [

        ]
      },
      { "surname": "Woodmansee",
        "head": "Ralph and Paula",
        "hasChildren": true,
        "headLeft": "../images/Ralph.png",
        "headRight": "../images/Paula.png",
        "children": [
          {
            "surname": "Woodmansee",
            "head": "Cam and Lauren",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          },
          {
            "surname": "Woodmansee",
            "head": "Zack and Hannah",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          },
          {
            "surname": "Woodmansee",
            "head": "Riley and Sabri",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          },
          {
            "surname": "Woodmansee",
            "head": "Drew",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          },
          {
            "surname": "Woodmansee",
            "head": "Darcy",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          },
          {
            "surname": "Woodmansee",
            "head": "Blake",
            "hasChildren": false,
            "headLeft": "../images/Ralph.png",
            "headRight": "../images/Paula.png"
          }
        ]
      },
      { "surname": "Mortensen",
        "head": "Rob and Liz",
        "hasChildren": true,
        "children": [

        ]
      },
      { "surname": "Mortensen",
        "head": "Neal and Annabelle",
        "hasChildren": true,
        "children": [

        ]
      },
      { "surname": "Mortensen",
        "head": "Mark and Krissy",
        "hasChildren": true,
        "children": [

        ]
      }
    ]
  }
];

var Logo = React.createClass({
    render: function() {
        return (
          <div><img src={'../images/M.png'} alt="boohoo" style={mainLogo} className="img-responsive"/></div>
        );
    }
});

React.render(
  <Directory families={FAMILIES} />,
  document.body
);

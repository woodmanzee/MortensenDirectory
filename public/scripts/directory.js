var Directory = React.createClass({
    render: function() {
        return (
          <div>
            <div style={directoryWrapper}>
              <img src={'../images/M.png'} alt="boohoo" style={mainLogo} className="img-responsive"/>
              <FamilyTable family={this.props.families} />
            </div>
          </div>
        );
    }
});

var FamilyTable = React.createClass({
    render: function() {
        var rows = [];
        this.props.family[0].children.forEach(function(familyMember) {
          rows.push(<FamilyRow family={familyMember} key={familyMember.head} />);
        });
        return (
          <div>
            <div style={header}>
              <img src={'../images/Gramps.png'} alt="boohoo" style={profileLeft} className="img-responsive"/>
              <div style={familySurname} >{this.props.family[0].surname}</div>
              <img src={'../images/Granny.png'} alt="boohoo" style={profileRight} className="img-responsive"/>
            </div>
            {rows}
          </div>
        );
    }
});

var FamilyRow = React.createClass({
  render: function() {
    return (
      <div>
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
    "children": [
      { "surname": "Hart",
        "head": "Ned and Charmaine",
        "hasChildren": true,
        "children": [

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
        "children": [

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

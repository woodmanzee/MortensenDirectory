var Directory = React.createClass({
    render: function() {
        return (
          <div>
            <div style={directoryWrapper}>
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
            <div style={familySurname} >{this.props.family[0].surname}</div>
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
        "head": "Neil and Annabelle",
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

React.render(
  <Directory families={FAMILIES} />,
  document.body
);

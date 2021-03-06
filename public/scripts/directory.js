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
        if (this.state.family.hasChildren) {
          this.state.family.children.forEach(function(familyMember) {
            rows.push(<FamilyRow family={familyMember} key={familyMember.head} onSurnameClick={this.handleSurnameClick} />);
          }.bind(this));
        }
        return (
          <div>
            <div style={header}>
              <div style={headLeftBlock}>
                <img src={this.state.family.headLeftPicture} alt="boohoo" style={headLeftPicture} className="img-responsive"/>
                <div style={headLeftInfo} >
                  {this.state.family.headLeftName}<br/>
                  <div style={lightFont} >
                    {this.state.family.headLeftPhone}<br/>
                    {this.state.family.headLeftEmail}<br/>
                    {this.state.family.headLeftBirthday}
                  </div>
                </div>
              </div>
              <div style={familyBlock}>
                <div style={familySurname} >{this.state.family.surname}</div>
                <div style={familyInfo} >
                  <div style={lightFont} >
                    {this.state.family.addressLine1}<br/>
                    {this.state.family.addressLine2}<br/>
                    {this.state.family.homePhone}
                  </div>
                </div>
              </div>
              <div style={headRightBlock}>
                <img src={this.state.family.headRightPicture} alt="boohoo" style={headRightPicture} className="img-responsive"/>
                <div style={headRightInfo}>
                  {this.state.family.headRightName}<br/>
                  <div style={lightFont} >
                    {this.state.family.headRightPhone}<br/>
                    {this.state.family.headRightEmail}<br/>
                    {this.state.family.headRightBirthday}
                  </div>
                </div>
              </div>
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
    "headLeftName": "Boyd",
    "headRightName": "Lucille",
    "hasChildren": true,
    "headLeftPicture": "../images/Gramps.png",
    "headRightPicture": "../images/Granny.png",
    "addressLine1": "658 East 200 North",
    "addressLine2": "Bountiful, UT  84010",
    "homePhone": "801-295-3992",
    "headLeftPhone": "",
    "headRightPhone": "801-664-4640",
    "headLeftBirthday": "",
    "headRightBirthday": "25 Dec 1929",
    "headLeftEmail": "",
    "headRightEmail": "lucillemortensen@gmail.com",
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
        "headLeftName": "Ralph",
        "headRightName": "Paula",
        "hasChildren": true,
        "headLeftPicture": "../images/Ralph.png",
        "headRightPicture": "../images/Paula.png",
        "addressLine1": "4923 Composition Ct.",
        "addressLine2": "Oceanside, CA 92057",
        "homePhone": "760-724-0403",
        "headLeftPhone": "760-672-5455",
        "headRightPhone": "760-672-9663",
        "headLeftBirthday": "19 Sep 1961",
        "headRightBirthday": "7 Jul 1961",
        "headLeftEmail": "ralph@rgang.net",
        "headRightEmail": "paula@rgang.net",
        "children": [
          {
            "surname": "Woodmansee",
            "head": "Cameron and Lauren",
            "headLeftName": "Cam",
            "headRightName": "Lauren",
            "hasChildren": false,
            "headLeftPicture": "../images/Cam.png",
            "headRightPicture": "../images/Lauren.png",
            "addressLine1": "77 H St, NW Apt 252",
            "addressLine2": "Washington, DC 20001",
            "homePhone": "",
            "headLeftPhone": "646-942-3798",
            "headRightPhone": "517-217-4212",
            "headLeftBirthday": "29 Jun 1986",
            "headRightBirthday": "11 Jan 1988",
            "headLeftEmail": "cameron29w@gmail.com",
            "headRightEmail": "laurenwoodmansee@gmail.com"
          },
          {
            "surname": "Woodmansee",
            "head": "Zack and Hannah",
            "headLeftName": "Zack",
            "headRightName": "Hannah",
            "hasChildren": false,
            "headLeftPicture": "../images/Zack.png",
            "headRightPicture": "../images/Hannah.png",
            "addressLine1": "3873 E South Pass Cove",
            "addressLine2": "Eagle Mountain, UT 84005",
            "homePhone": "",
            "headLeftPhone": "760-687-5455",
            "headRightPhone": "760-687-3794",
            "headLeftBirthday": "16 Aug 1988",
            "headRightBirthday": "26 Sep 1994",
            "headLeftEmail": "woodmanzee@gmail.com",
            "headRightEmail": "woodmansee.h@gmail.com"
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
